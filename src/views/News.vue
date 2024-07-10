<template>
    <ion-menu side="end" content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>actualités</ion-title>
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
      <h1>Articles</h1>
      <ul>
          <li v-for="article in articles" :key="article.id">
              <h2>{{ article.title }}</h2>
              <p>{{ article.content }}</p>
          </li>
      </ul>
    </ion-content>
</template>

<script>
import ArticleService from '@/services/ArticleService';

export default {
  data() {
      return {
          articles: []
      };
  },
  mounted() {
      this.fetchArticles();
  },
  methods: {
      fetchArticles() {
          ArticleService.getArticles()
              .then(response => {
                  this.articles = response.data;
              })
              .catch(error => {
                  console.log('Error fetching articles:', error);
              });
      }
  }
};
</script>
