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
      <h1>Mentions Légales</h1>
      <div v-html="mentionsLegalesContent"></div>
  </ion-content>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

// Contenu fictif des mentions légales (à remplacer par vos vraies mentions légales)
const mentionsLegalesContent = ref(`
  <p>POWERRENT</p>
  <p>Forme juridique : Société par actions simplifiée (SAS)</p>
  <p>Capital social : 100 000 euros</p>
  <p>Siège social : 123 Rue des Exemples, 75000 Paris, France</p>
  <p>Numéro de téléphone : +33 1 23 45 67 89</p>
  <p>Adresse e-mail : contact@exempletech.com</p>
  
  <p>Hébergement :</p>
  <p>Nom de l'hébergeur : ExempleHosting</p>
  <p>Adresse : 456 Avenue des Tests, 69000 Lyon, France</p>
  <p>Numéro de téléphone : +33 4 56 78 90 12</p>
  <p>Adresse e-mail : support@exemplehosting.com</p>
  
  <p>Propriété intellectuelle :</p>
  <p>Le contenu du site (textes, images, vidéos, etc.) est la propriété exclusive de ExempleTech Inc.</p>
  
  <p>Données personnelles :</p>
  <p>Les données personnelles collectées sur ce site sont destinées à ExempleTech Inc.</p>
  <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
  
  <p>Cookies :</p>
  <p>Ce site utilise des cookies pour améliorer votre expérience utilisateur.</p>
`);

</script>

<style scoped>
.ion-padding {
  padding: 16px;
}
</style>
