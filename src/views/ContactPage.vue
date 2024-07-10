<template>
  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Contact</ion-title>
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

    <div class="contact-container">
      <div class="contact-info">
        <h2>Nos coordonnées</h2>
        <p>Adresse : 123 Rue Exemple, Ville, Pays</p>
        <p>Téléphone : +123 456 7890</p>
        <p>Email : contact@exemple.com</p>
      </div>

      <div class="map-container">
        <!-- Carte Google Maps -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509567!2d144.95565131512386!3d-37.81732797975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sVictoria%20Harbour%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1614251565101!5m2!1sen!2sus"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy">
        </iframe>
      </div>

      <form class="contact-form">
        <!-- Formulaire de contact -->
        <ion-card>
          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Nom</ion-label>
              <ion-input v-model="form.name"></ion-input>
            </ion-item>
            <ion-item v-if="!$v.form.name.required && $v.form.name.$dirty">
              <ion-note color="danger">Le nom est requis</ion-note>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="form.email"></ion-input>
            </ion-item>
            <ion-item v-if="!$v.form.email.email && $v.form.email.$dirty">
              <ion-note color="danger">L'email est invalide</ion-note>
            </ion-item>
            <ion-item v-if="!$v.form.email.required && $v.form.email.$dirty">
              <ion-note color="danger">L'email est requis</ion-note>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Message</ion-label>
              <ion-textarea v-model="form.message"></ion-textarea>
            </ion-item>
            <ion-item v-if="!$v.form.message.required && $v.form.message.$dirty">
              <ion-note color="danger">Le message est requis</ion-note>
            </ion-item>

            <ion-button expand="block" @click="submitForm">Envoyer</ion-button>
          </ion-card-content>
        </ion-card>
      </form>
    </div>
  </ion-content>
</template>

<script setup>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/vue';

import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { reactive } from 'vue';

// Déclaration des données réactives pour le formulaire
const form = reactive({
  name: '',
  email: '',
  message: ''
});

// Règles de validation avec Vuelidate
const rules = {
  form: {
    name: { required },
    email: { required, email },
    message: { required }
  }
};

// Utilisation de Vuelidate pour la validation
const $v = useVuelidate(rules, { form });

// Fonction de soumission du formulaire
const submitForm = () => {
  $v.value.$touch();
  if ($v.value.$invalid) {
    console.log('Formulaire invalide');
    return;
  }

  // Envoyer les données du formulaire à votre backend (Laravel)
  fetch('http://127.0.0.1:8000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
  .then(response => {
    if (response.ok) {
      console.log('E-mail envoyé avec succès');
      // Réinitialiser le formulaire ou effectuer une autre action
    } else {
      console.error('Erreur lors de l\'envoi de l\'e-mail');
    }
  })
  .catch(error => {
    console.error('Erreur réseau:', error);
  });
};
</script>

<style scoped>
.contact-container {
  padding: 16px;
}

.contact-info,
.map-container,
.contact-form {
  margin-bottom: 24px;
}

.contact-info h2,
.contact-form h2 {
  margin-bottom: 8px;
}
</style>
