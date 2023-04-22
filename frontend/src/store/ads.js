export default {
    state: {
        ads: [
            {
            title: "First",
            desc: "First Desc",
            promo: true,
            src: "https://img2.akspic.ru/previews/4/7/7/7/6/167774/167774-stalker_2_the_return_of_old_friend-x750.jpg",
            id: "1",
            userId: "1"
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
    mutations: {
		createAd(state, payload){
			state.ads.push(payload)
		},
        loadAds (state, payload) {
            state.ads = payload
          },  
        updateAd (state, {title, desc, id}) {
	    	const ad = state.ads.find(a => {
	    		return a.id === id
	    	})
	    	ad.title = title
	    	ad.desc = desc
	    }

	},
	actions: {
		createAd({commit, getters},payload){
            payload.id = Math.random()
            payload.userId = getters.user != null ? getters.user.id : '1'
        }
                    
	},
    getters: {
        ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds(state, getters) {
            return state.ads.filter(ad => {
            return ad.userId == getters.user.id
            })
            },
            
adById(state) {
return id => {
return state.ads.find(ad => ad.id == id)
}
},
async createAd({commit, getters},payload){
    payload.id = Math.random()
    payload.userId = getters.user != null ? getters.user.id : '1'
    commit('clearError')
    commit('setLoading', true)
    //Заглушка запроса
    let isRequestOk = true
    let promise = new Promise(function(resolve) {
    setTimeout(() => resolve('Done')
    , 3000);
    });
    if (isRequestOk) {
    await promise.then(()=> {
    commit('createAd', payload)
    commit('setLoading', false)
    })
    } else {
    await promise.then(()=> {
    commit('setLoading', false)
    commit('setError', 'Ошибка создания объявления')
    throw 'Упс... Ошибка создания объявления'
    })
    }
    },
    async updateAd ({commit},{title,desc,id}) {
        commit('clearError')
        commit('setLoading', true)
        //Заглушка запроса
        let isRequestOk = true
        let promise = new Promise(function(resolve) {
        resolve('Done')
        });
        if (isRequestOk) {
        await promise.then(()=> {
        commit('updateAd',{ title, desc, id})
        commit('setLoading', false)
        })
        } else {
        await promise.then(()=> {
        commit('setLoading', false)
        commit('setError', 'Ошибка редактирования объявления')
        throw 'Упс... Ошибка редактирования объявления'
        })
        }
        }
        
    }
}