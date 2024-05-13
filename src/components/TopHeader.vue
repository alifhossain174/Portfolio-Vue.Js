<template>
    <header id="header">
        <div class="container d-flex align-items-center justify-content-between">

          <h1 class="logo">
            <router-link to="/">DevFolio</router-link>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <router-link class="nav-link scrollto active" to="/">Home</router-link>
              </li>
              <li>
                <router-link class="nav-link scrollto" to="/about">About</router-link>
              </li>
              <li>
                <router-link class="nav-link scrollto" to="/service">Services</router-link>
              </li>
              <li>
                <router-link class="nav-link scrollto" to="/contact">Contact</router-link>
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
}
</script>

<style scoped>
  #header{
    background-color: black;
  }
</style>