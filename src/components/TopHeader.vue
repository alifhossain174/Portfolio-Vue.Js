<template>
    <header id="header">
        <div class="container d-flex align-items-center justify-content-between">

          <h1 class="logo">
            <router-link to="/">DevFolio</router-link>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <router-link class="nav-link scrollto" :class="{ active: isRouteActive('HomePage') }" to="/">Home</router-link>
              </li>
              <li>
                <router-link class="nav-link scrollto" :class="{ active: isRouteActive('AboutUs') }" to="/about">About</router-link>
              </li>
              <li>
                <router-link class="nav-link scrollto" :class="{ active: isRouteActive('ServiceSection') }" to="/service">Services</router-link>
              </li>
              <li>
                <router-link class="nav-link scrollto" :class="{ active: isRouteActive('ContactForm') }" to="/contact">Contact</router-link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->

        </div>
    </header>
</template>

<script>
export default {
  name: 'TopHeader',
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName;
    },
  },
}
</script>

<style scoped>
  #header{
    background-color: black;
  }
</style>