<template>

    <nav class="grid-container">
    <ul>
      <li class="nav-link"><a>home</a></li>
      <li class="nav-link"><a>about</a></li>
      <li class="nav-link"><a>donate</a></li>
      <li class="nav-link"><a>hello</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.grid-container {
  display: grid;
  position: relative;
  padding: 5% 5% 5% 5%;

}
nav {
  display: flex;
  text-align: center;
  color: white;
  
}
ul {
  border-radius: 5px;
  position: fixed;
  background: navy;
  width: 25vw;
}

</style>