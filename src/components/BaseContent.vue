<template>
 <section>
      <h2>TITLE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue volutpat mauris nec vestibulum. Quisque pretium, metus sit amet pulvinar lacinia, risus leo. 
      </p>
     <pre> 
          <code>recursiveFunction(num) {
            return recursiveFunction(num) - 1;
          if (num  0 ) {
            return "hello";
          }
          }
          </code>
     </pre>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;

  background-color: white;
}
h2 {
  display: inline-flex;
  font-size: 2rem;
  height: 2rem;
}
p {
   margin: 2rem 2rem 2rem 2rem;
}
.code { 
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
  height: 20vh;
  border-radius: 5px;

}
pre {
  margin: 2rem 2rem 2rem 2rem;
  border-radius: 1vh;
  color: white;
  
  background-color: black;
}

</style>