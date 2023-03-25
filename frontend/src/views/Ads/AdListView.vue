<template>
    <v-container>
        <h1 class="text--secondary mb-3 mt-3">My ads</h1>
        <v-card v-for="ad in ads" :key="ad.id" class="mx-auto" max-width="1000">
            <v-row>
                <v-img :src="ad.src" height="175px"></v-img>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-card-text>
                    <h2 class="text--primary">{{ ad.title }}</h2>
                    <p>{{ ad.desc }}</p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
                        Open
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-row>
        </v-card>
    </v-container>
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