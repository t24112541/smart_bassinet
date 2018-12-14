<template>
<div>
  <div>home</div>
  <div>home</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lock: false,
      valid: false,
      user: '',
      pass: '',
    }
  }, // data

  methods: {
    doLogin() {
      this.lock = true
      setTimeout(() => {
        this.$router.replace('/wecan')
      }, 1000)
    }, // doLogin
  }, // methods
}
</script>
<style lang="scss">
.login-page {
  .login-form {
    margin-top: 96px;
    .primary--text {
      color: #eee !important;
    }
    .login-btn {
      max-width: 144px;
      border-radius: 20px;
      height: 44px;
      color: #034EA1;
    }
  }
  .screen-lock {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
}
</style>
