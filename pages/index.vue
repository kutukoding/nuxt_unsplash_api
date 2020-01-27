<template>
  <div class="container">
    <div class="wrapper">
      <div class="bd-search">
        <input
          type="text"
          class="bd-search__input"
          placeholder="Search"
        >
      </div>
      <div class="bd-c-latest">
        <div class="bd-c-header">
          <h2 class="bd-c-title">
            Latest
          </h2>
        </div>
        <div class="bd-c-content">
          <ul class="bd-c-latest__list">
            <li
              v-for="(item, index) in dataFromAPI"
              :key="index"
              class="bd-c-latest__items"
            >
              <div class="bd-c-latest__image">
                <img
                  :src="item.urls.small"
                  :alt="item.alt_description"
                  class="bd-c-latest__image"
                >
              </div>
              <div class="bd-c-latest__content">
                <div class="bd-c-latest__action">
                  <a :href="`${item.links.download}?force=true`" class="bd-c-button bd-c-button--download">
                    Download
                  </a>
                  <button :class="`bd-c-likes js-likes ${(item.liked_by_user) ? 'bd-c-likes--user' : ''}`" @click="likeActions(index)" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import vuex untuk menggunakan store
import { mapState } from 'vuex'
import lottie from 'lottie-web'

export default {
  data () {
    return {
      lottieArray: []
    }
  },
  computed: {
    ...mapState({
      // mengambil data dari state yang ada di store [state.nama_file_store.nama_state]
      dataFromAPI: state => state.unsplash.latest
    })
  },
  mounted () {
    const like = document.querySelectorAll('.js-likes')
    const array = this.lottieArray

    console.log(like)

    like.forEach(function (value, index) {
      const animateLottie = lottie.loadAnimation({
        container: value, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/lottie/love-2.json' // the path to the animation json
      })
      animateLottie.setDirection(-1)
      array.push(animateLottie)
    })

    // memanggil fungsi getLatest setelah DOM ter-load
    this.getLatest()
  },
  methods: {
    async getLatest () {
      // memamnggil action yang berada di store
      // await this.$store.dispatch('nama_file_store/nama_action')
      await this.$store.dispatch('unsplash/getDataLatest')
    },
    likeActions (index) {
      const element = document.querySelectorAll('.js-likes')
      const status = element[index].classList.contains('bd-c-likes--user')
      if (status) {
        this.lottieArray[index].setDirection(-1)
        this.lottieArray[index].play()
        element[index].classList.remove('bd-c-likes--user')
      } else {
        this.lottieArray[index].setDirection(1)
        this.lottieArray[index].play()
        element[index].classList.add('bd-c-likes--user')
      }
    }
  }
}
</script>

<style scoped>
/*
  font-family: 'Nunito', sans-serif;
  font-family: 'Open Sans', sans-serif;
*/
@import url('https://fonts.googleapis.com/css?family=Nunito|Open+Sans&display=swap');

.container {
  margin: 0 30px;
}

.bd-search__input {
  width: 100%;
  background-color: #f7f7f8;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  padding: 12px 15px;
}

.bd-search {
  margin-top: 30px;
  margin-bottom: 30px;
}

.bd-c-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.bd-c-title {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: #49484e;
  font-size: 24px;
}

.bd-c-latest__items span {
  position: absolute;
  z-index: 99;
  color: white;
  left: calc(50% - 30px);
  right: calc(50% - 30px);
  transform: translate(calc(50% - 30px), calc(50% - 30px));
  bottom: 0;
  display: inline-block;
  text-align: center;
}

.bd-c-latest__items {
  position: relative;
  width: 100%;
  display: block;
  float: left;
  margin-bottom: 13px;
  border-radius: 8px;
}

.bd-c-latest__items img {
  border-radius: 8px;
  max-width: 100%;
}

.bd-c-latest__list::after {
  content: '';
  display: table;
  clear: both;
}
.bd-c-latest__list {
  list-style: none;
  padding: 0;
}

.bd-c-latest__items a {
  display: block;
  max-width: 100%;
}

.bd-c-button--download {
  display: inline-block !important;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #49484e;
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}

.bd-c-likes {
  width: 46px;
}

.bd-c-latest__action {
  display: flex;
  align-items: center;
}

</style>
