<template>
  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Conditions Générales de Vente / d'Utilisation</ion-title>
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
    <ion-content class="ion-padding">  
      <div class="content-wrapper">
        <h1>Conditions Générales de Vente / d'Utilisation</h1>
        <p>Insérez ici le contenu de vos conditions générales de vente ou d'utilisation.</p>
        <h2>1. Acceptation des Conditions</h2>
        <p>En accédant et en utilisant notre plateforme, vous acceptez pleinement et sans réserve les présentes conditions générales d'utilisation.</p>
        
        <h2>2. Description du Service</h2>
        <p>PowerRent propose des abonnements permettant d'accéder à des pouvoirs surnaturels pour des périodes déterminées. Nos services incluent la fourniture de contenu et d'expériences immersives dans le domaine du surnaturel.</p>
        
        <h2>3. Inscription et Compte Utilisateur</h2>
        <p>Pour accéder à nos services, vous devez créer un compte utilisateur. Vous êtes responsable de maintenir la confidentialité de vos informations de compte et de toutes les activités qui se produisent sous votre compte.</p>
        
        <h2>4. Abonnements et Paiements</h2>
        <p>Les abonnements sont proposés sous forme de plans tarifaires avec des périodes et des conditions spécifiques. En vous abonnant, vous acceptez de payer les frais applicables selon le plan choisi.</p>
        
        <h2>5. Utilisation des Services</h2>
        <p>Vous vous engagez à utiliser nos services uniquement à des fins légales et conformément aux présentes conditions générales.</p>
        
        <h2>6. Propriété Intellectuelle</h2>
        <p>Tous les contenus, marques, logos et autres éléments de propriété intellectuelle disponibles sur notre plateforme sont la propriété exclusive de PowerRent ou de ses partenaires.</p>
        
        <h2>7. Limitation de Responsabilité</h2>
        <p>PowerRent ne peut être tenu responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs découlant de l'utilisation de nos services ou de l'impossibilité d'y accéder.</p>
        
        <h2>8. Modification des Conditions Générales</h2>
        <p>Nous nous réservons le droit de modifier ces conditions générales à tout moment. Les modifications seront effectives dès leur publication sur notre site web.</p>
        
        <h2>9. Droit Applicable et Règlement des Litiges</h2>
        <p>Ces conditions générales sont régies par les lois en vigueur dans [Pays/État]. Tout litige découlant de l'utilisation de nos services sera soumis à la compétence exclusive des tribunaux compétents de [Ville, Pays/État].</p>
      </div>
    </ion-content>
  </ion-content>
</template>

<script setup>
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/vue';
</script>

<style scoped>
.ion-padding {
  padding: 16px;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
</style>
