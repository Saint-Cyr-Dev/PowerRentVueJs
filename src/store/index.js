import { createStore } from 'vuex';

const store = createStore({
  state: {
    // État global de l'application
    user: null, // Exemple: pour stocker les informations de l'utilisateur connecté
    isAuthenticated: false, // Indicateur pour l'authentification
    subscription: null, // Informations sur l'abonnement de l'utilisateur
  },
  mutations: {
    // Mutations pour modifier l'état global (synchrones)
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user; // Définir isAuthenticated en fonction de l'existence de l'utilisateur
    },
    setSubscription(state, subscription) {
      state.subscription = subscription;
    },
    // Autres mutations selon les besoins
  },
  actions: {
    // Actions pour effectuer des opérations asynchrones et appeler des mutations
    login({ commit }, credentials) {
      // Exemple d'action pour la connexion (appel à une API, etc.)
      // Ici, vous devriez appeler votre API d'authentification
      // Après une réponse réussie, appelez commit('setUser', user) avec les données de l'utilisateur
      const user = { username: credentials.username, email: credentials.email }; // Exemple de données utilisateur
      commit('setUser', user); // Mutation pour définir l'utilisateur dans l'état global
    },
    logout({ commit }) {
      // Exemple d'action pour la déconnexion
      // Réinitialisation de l'état global de l'utilisateur
      commit('setUser', null);
      commit('setSubscription', null);
    },
    // Autres actions selon les besoins
  },
  modules: {
    // Modules Vuex (si nécessaire)
    // Exemple de module :
    // exampleModule,
  },
});

export default store;
