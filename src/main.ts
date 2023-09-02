import { createApp } from 'vue'
import './assets/tailwind.css'
import './assets/style.css'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './apolloInstance'

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);

app.mount('#app');
