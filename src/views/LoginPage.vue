<template>
  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Mentions Légales</ion-title>
      </ion-toolbar>
    </ion-header>
  </ion-menu>
  <ion-content id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content id="main-content" class="ion-padding">
      <ion-card>
        <ion-card-content>
          <form @submit.prevent="submitForm">
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="form.email" required></ion-input>
              <ion-icon slot="end" :icon="emailIcon"></ion-icon>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Mot de passe</ion-label>
              <ion-input type="password" v-model="form.password" required></ion-input>
              <ion-icon slot="end" :icon="lockClosedIcon"></ion-icon>
            </ion-item>
>

            <ion-button expand="block" type="submit">Se connecter</ion-button>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-content>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonIcon, IonButton } from '@ionic/vue';

import { mailOutline, lockClosedOutline } from 'ionicons/icons';

const emailIcon = mailOutline;
const lockClosedIcon = lockClosedOutline;

const form = {
  email: '',
  password: ''
};

const rules = {
  form: {
    email: { required, email },
    password: { required }
  }
};

const { $v } = useVuelidate(rules, { form });

const router = useRouter();

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: form.email,
      password: form.password
    });

    const token = response.data.token;

    localStorage.setItem('token', token);

    console.log('Connexion réussie', response.data);
    router.push('/dashboard'); 
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
  }
};
</script>

<style scoped>
ion-card {
  margin: 20px;
}

.error {
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
}
</style>
