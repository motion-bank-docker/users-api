<template lang="pug">
  q-page
</template>

<script>
export default {
  name: 'callback',
  mounted () {
    const { query } = this.$route
    if (query.access_token) {
      console.log('token', query.access_token)
      this.$store.commit('auth/setToken', query.access_token)
      return this.$router.replace({ name: 'admin' })
    }
    this.$router.replace({ name: 'index' })
  }
}
</script>

<style scoped>

</style>
