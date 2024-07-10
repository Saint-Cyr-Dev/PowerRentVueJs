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

    <div class="hero-section">
      <ion-text color="light">
        <h1>Découvrez Vos Pouvoirs Surnaturels</h1>
      </ion-text>
    </div>
  </ion-content>
</template>

<script setup>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/vue';


</script>

<style scoped>
.hero-section {
  background: linear-gradient(45deg, #7b4397, #dc2430);
  padding: 50px;
  text-align: center;
  height: 100%;
}



button {
  background-color: #9b59b6;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

ion-toolbar[color="primary"] {
  --background: #6a0572;
}

ion-title {
  color: #ffffff;
}
</style>
