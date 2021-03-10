<template>
 <section class="grid-container">
   <base-sidebar></base-sidebar>
<div>
     <base-content class="content"></base-content>
     <base-content class="content"></base-content>
     <base-content class="content"></base-content>
     <base-content class="content"></base-content>
     <base-content class="content"></base-content>
     <base-content class="content"></base-content>
     <base-content class="content"></base-content>
</div>
  </section>
</template>

<script>
import BaseContent from './components/BaseContent.vue';
import BaseSidebar from './components/BaseSidebar.vue';

export default {
  name: 'App',
  components: {
   BaseContent,
   BaseSidebar,
   
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
 
}
.grid-container {
    display: grid;
    grid-template-columns: 1fr 3fr;

    grid-template-areas: 
    "sidebar content"
    "sidebar content"
    "sidebar content"
    "sidebar content"
    "sidebar content"
    "sidebar content"
}

.navbar {
  display: flex;
  grid-area: sidebar;
  top: 0;
  left: 0;
  right: 0;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 0rem;
  margin-top: 0rem;
  height: 100vh;

}
.nav-link {
  display: flex;
  list-style: none;
  justify-content: left;
  padding: 1rem 1rem 1rem 2rem; 
}

h2 {
  justify-content: center;
  font-size: 5rem;
}
p {
  text-align: left;
}
.scroll-bar {
  height: 100vh;
}
.content {
 grid-area: content;
}
</style>
