<template>
  <button @click="clickFunction" class="lottie" />
</template>

<script>
import lottie from 'lottie-web'
export default {
  data () {
    return {
      lottie: ''
    }
  },
  mounted () {
    this.lottie = lottie.loadAnimation({
      container: document.querySelector('.lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/lottie/love-2.json' // the path to the animation json
    })
  },
  methods: {
    clickFunction () {
      const status = document.querySelector('.lottie').classList.contains('bd-c-likes--user')
      if (status) {
        this.lottie.setDirection(-1)
        this.lottie.play()
        document.querySelector('.lottie').classList.remove('bd-c-likes--user')
      } else {
        this.lottie.setDirection(1)
        this.lottie.play()
        document.querySelector('.lottie').classList.add('bd-c-likes--user')
      }
    }
  }
}
</script>
