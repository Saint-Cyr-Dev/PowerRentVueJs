import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Offres from '../views/Offres.vue';
import News from '../views/News.vue';
import ContactPage from '../views/ContactPage.vue';
import SignUpPage from '../views/SignUpPage.vue';
import LoginPage from '../views/LoginPage.vue';
import LegalPage from '../views/LegalPage.vue';
import TermsPage from '../views/TermsPage.vue';
import PrivacyPolicyPage from '../views/PrivacyPolicyPage.vue';

const routes = [
  { path:'/', name:'Home', component:Home},
  { path:'/offres', name:'Offres', component:Offres},
  { path:'/news', name:'News', component:News},
  { path:'/contact', name:'ContactPage', component:ContactPage},
  { path:'/signup', name:'SignUpPage', component:SignUpPage},
  { path:'/login', name:'LoginPage', component:LoginPage},
  { path:'/legal', name:'LegalPage', component:LegalPage},
  { path:'/terms', name:'TermsPage', component:TermsPage},
  { path:'/privacy-policy', name:'PrivacyPolicyPage', component:PrivacyPolicyPage }
];

const router = createRouter({
  history:createWebHistory(),
  routes,
});

export default router;
