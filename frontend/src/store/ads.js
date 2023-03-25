export default {
    state: {
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

    },
    mutations: {},
    actions: {},
    getters: {
        ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds(state) {
			return state.ads
	},
adById(state) {
return id => {
return state.ads.find(ad => ad.id == id)
}
}
    }
}