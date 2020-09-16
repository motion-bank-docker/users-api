<template lang="pug">

</template>

<script>
export default {
  name: 'admin',
  mounted () {
    if (!this.$store.state.auth.token) this.$router.replace({ name: 'index' })
  }
}
</script>

<style scoped>

</style>
