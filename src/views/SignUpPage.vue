<template>
  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Acceuil</ion-title>
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
          <form @submit.prevent="submitForm">

            <ion-item>
              <ion-label position="floating">Nom</ion-label>
              <ion-input v-model="form.name"></ion-input>
            </ion-item>
            <ion-item v-if="!$v.form.name.required && $v.form.name.$dirty">
              <ion-note color="danger">Le nom est requis</ion-note>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="form.email"></ion-input>
            </ion-item>
            <ion-item v-if="!$v.form.email.email && $v.form.email.$dirty">
              <ion-note color="danger">L'email est invalide</ion-note>
            </ion-item>
            <ion-item v-if="!$v.form.email.required && $v.form.email.$dirty">
              <ion-note color="danger">L'email est requis</ion-note>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Mot de passe</ion-label>
              <ion-input type="password" v-model="form.password"></ion-input>
            </ion-item>
            <ion-item v-if="!$v.form.password.required && $v.form.password.$dirty">
              <ion-note color="danger">Le mot de passe est requis</ion-note>
            </ion-item>

            <ion-button expand="block" type="submit">S'inscrire</ion-button>
          </form>
  </ion-content>
</template>

<script setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonNote } from '@ionic/vue';

const form = ref({
  name: '',
  email: '',
  password: ''
});

const rules = {
  form: {
    name: { required },
    email: { required, email },
    password: { required }
  }
};

const $v = useVuelidate(rules, { form });
const router = useRouter();

const submitForm = async () => {
  $v.value.$touch();

  if ($v.value.$invalid) {
    console.log('Formulaire invalide');
    return;
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/register', {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    }, {
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    });

    if (response.status === 201) {
      console.log('Inscription réussie');
      router.push('/login');
    }
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
  }
};
</script>

<style scoped>
ion-card {
  margin: 20px;
}
</style>
