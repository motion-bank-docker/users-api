<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header
      q-toolbar
        q-toolbar-title Users
        q-btn(v-if="!hasToken" size="lg" flat @click="login" icon="arrow_forward")
        q-btn(v-else size="lg" flat @click="logout" icon="eject")

    q-page-container
      router-view
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
  methods: {
    login () {
      openURL(`${process.env.API_BASE_URL}oauth/auth0`)
    },
    logout () {
      this.$store.commit('auth/setToken', null)
      this.$router.push({ name: 'index' })
    }
  },
  computed: {
    ...mapGetters({
      hasToken: 'auth/hasToken'
    })
  }
}
</script>
