<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item button ><router-link to="/">Home</router-link></ion-item>
          <ion-item button ><router-link to="/offres">Offres</router-link></ion-item>
          <ion-item button ><router-link to="/news">Actualité</router-link></ion-item>
          <ion-item button ><router-link to="/login">login</router-link></ion-item>
          <ion-item button ><router-link to="/signup">signup</router-link></ion-item>
          <ion-item button ><router-link to="/legal">legal</router-link></ion-item>
          <ion-item button ><router-link to="/terms">Conditions Générales</router-link></ion-item>

        </ion-list>
      </ion-content>
    </ion-menu>

    <router-view></router-view>
  </ion-app>
</template>

<script setup>
import { IonApp, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/vue';
</script>

<style scoped>
.app {
  background-color: #6a0572;
  color: #ffffff;
}
</style>
