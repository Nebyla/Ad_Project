<template>
  <div>
  <v-container fluid>
  <v-row>
  <v-col>
  <v-carousel>
  <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.src"
  ><div class="ad-link">
  <v-btn class="error" :to="'/ad/' + ad.id">
  {{ ad.title }}
  </v-btn>
  </div>
  </v-carousel-item>
  </v-carousel>
  </v-col>
  </v-row>
  </v-container>
  <v-container grid-list-lg>
  <v-row>
  <v-col cols="4" v-for="ad in ads" :key="ad.id">
  <v-card>
  <v-img :src="ad.src" height="200px"></v-img>
  <v-card-title primary-title>
  <div>
  <h3 class="headline mb-0">{{ ad.title }}</h3>
  <div>{{ ad.desc }}</div>
  </div>
  </v-card-title>
  <v-card-actions>
  <v-spacer></v-spacer>
  <v-btn text :to="'/ad/' + ad.id"> Open </v-btn>
  <v-btn raised color="primary"> Buy </v-btn>
  </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
  </div>
  </template>
  
  <script>
  export default {
  data() {
  return {
  ads: [
  {
  title: "First",
  desc: "First Desc",
  promo: true,
  src: "https://img2.akspic.ru/previews/4/7/7/7/6/167774/167774-stalker_2_the_return_of_old_friend-x750.jpg",
  id: "1",
  },
  {
  title: "Second",
  desc: "Second Desc",
  promo: true,
  src: "https://img2.akspic.ru/previews/4/6/7/5/6/165764/165764-zvezdnye_vojny-dart_vejder-lyuk_skajuoker-dzhedaj-atmosfera-550x310.jpg",
  id: "2",
  },
  {
  title: "Third",
  desc: "Thitd Desc",
  promo: true,
  src: "https://img1.akspic.ru/previews/9/4/0/4/6/164049/164049-prizrak_cusimy-opleuha_proizvodstv-masako_adachi-dzhin_sakai-playstation_4-550x310.jpg",
  id: "3",
  },
  {
  title: "Fouth",
  desc: "Fouth Desc",
  promo: true,
  src: "https://img3.akspic.ru/previews/7/9/9/3/6/163997/163997-among_us-innersloth_llc-mnogopolzovatelskaya_video_igra-art-kosmos-550x310.jpg",
  id: "4",
  },
  ],
  };
  },
  };
  </script>
  <style scoped>
  .ad-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgb(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  }
  </style>
  

  
