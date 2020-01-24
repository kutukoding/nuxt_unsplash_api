// variable state ini berfungsi untuk deklarasian variable
export const state = () => ({
  latest: []
})

// variable mutations berfungsi untuk mengisi nilai dari variable [state] diatas
export const mutations = {
  // berfungsi untuk mengisi variable latest di state
  setDataLatest (state, items) {
    // [ latest ] berasal dari variable state diatas
    state.latest = items
  }
}

// variable action berfungsi untuk mengoprasikan data dari API mulai dari:
// GET    = menampilkan data
// POST   = menambah data baru
// PUT    = mengedit data
// DELETE = menghapus data
export const actions = {
  async getDataLatest ({ commit }) {
    // mengatur auth untuk akses API Unsplash menggunakan akun di unsplash developer https://unsplash.com/oauth/applications
    // Client-ID [Access Key]
    this.$axios.setToken(
      'Client-ID 7fbf449b60460d94fbb2ee2b3e6e546096c5a1d1b920689ed6f312d6c6fc42af'
    )
    // mengambil data foto dari unsplash menggunakan get('photos' = berasal dari dokumentasi API https://unsplash.com/documentation#list-photos)
    const dataFromAPI = await this.$axios.get('photos')
    // memanggil fungsi dari state dan mengirim data dari API ke variable state melalui mutations
    commit('setDataLatest', dataFromAPI.data)
  }
}
