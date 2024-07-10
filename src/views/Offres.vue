<template>
  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Abonnements</ion-title>
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
      <div class="card-container">
        <ion-text>
          <h1 class="offresh1">Nos Produits</h1>
        </ion-text>
        <div v-if="products.length">
          <ion-card v-for="product in products" :key="product.id" class="style-card">
            <ion-card-header>
              <ion-card-title>{{ product.name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>{{ product.description }}</ion-card-content>
            <div class="card-actions">
              <a href="https://buy.stripe.com/test_6oE8yec5tdusf1S5ks"><ion-button color="primary" expand="block" type="submit">Payer</ion-button></a>
            </div>
          </ion-card>
        </div>
        <div v-else>
          <ion-text>Aucun produit disponible</ion-text>
        </div>
      </div>
    </ion-content>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonButtons, IonMenuButton, IonButton } from '@ionic/vue';
import axios from 'axios';

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/stripe/products');
    products.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits', error);
  }
};

onMounted(fetchProducts);
</script>

<style scoped>
.hero-section {
  background: linear-gradient(45deg, #7b4397, #dc2430);
  padding: 50px;
  text-align: center;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: #7b4397;

}

.offresh1 {
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bolder;
  text-align: center;
  font-size: 35px;
}

.style-card {
  color: #29003b;
  font-weight: bold;
  font-size: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.style-card:hover {
  transform: translateY(-5px);
}

.card-actions {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

ion-toolbar[color="primary"] {
  --background: #6a0572;
}

ion-title {
  color: #ffffff;
}
</style>
