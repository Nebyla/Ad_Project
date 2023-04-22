import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BuyAdModal from './views/Shared/BuyAdModal';

loadFonts()
const firebaseConfig = {
  apiKey: "AIzaSyBo-YPC5Aq5g1m6DtA-7ECXW-AqfLG7I7s",
  authDomain: "ad-project-795fe.firebaseapp.com",
  projectId: "ad-project-795fe",
  storageBucket: "ad-project-795fe.appspot.com",
  messagingSenderId: "210624070109",
  appId: "1:210624070109:web:6363e143112d10fab17634",
  measurementId: "G-6DZ01ML1L4"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createApp(App).use(router)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
  .component("buy-ad-modal",BuyAdModal)