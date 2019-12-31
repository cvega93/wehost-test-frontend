<template lang="html">
  <nav id="template-header" class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row" toggleable="md">
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/negativologo.png" alt="logo" />
      </router-link>
<!--      <router-link class="navbar-brand brand-logo-mini" to="/">-->
<!--        <img src="../../assets/images/minilogo.png" alt="logo" />-->
<!--      </router-link>-->
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click="collapedSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
      <button class="navbar-toggler navbar-toggler-right align-self-center" type="button" @click="collapedMobileSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </nav>
</template>

<script lang="js">
// eslint-disable-next-line
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'app-header',
  methods: {
    collapedSidebar: function () {
      $('body').toggleClass('sidebar-icon-only')
    },
    collapedMobileSidebar: function () {
      $('#sidebar').toggleClass('active')
    }
  }
}
</script>

<style scoped>
.navbar.default-layout .navbar-menu-wrapper{
  width: initial !important;
  box-shadow: none !important;
}


  .navbar-brand-wrapper {
    background: #2fb9af!important;
  }

  @media (max-width: 991px) {
    .navbar-brand-wrapper {
      width: calc(100% - 74px)!important;
    }
  }
</style>
