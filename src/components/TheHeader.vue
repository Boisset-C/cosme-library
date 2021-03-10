<template>
  <body>
    <div id="left" class="column">
       <ul>
         <li>home</li>
         <li>about</li>
         <li>range</li>
         <li>blanch</li>
       </ul>
    </div>
    <div id="right" class="column">
        <div class="top-right"></div>
        <div class="bottom"></div>
    </div>
</body>
</template>

<style scoped>
html {
    height: 100%;
}

body {
    height: 100vh;
    width: 20vh;
    overflow: hidden;  /*makes the body non-scrollable (we will add scrolling to the sidebar and main content containers)*/
    margin: 0px;  /*removes default style*/
    display: flex;  /*enables flex content for its children*/
    box-sizing: border-box;
}

.column {
    height: 100%;  /*allows both columns to span the full height of the browser window*/
    display: flex;
    flex-direction: column;  /*places the left and right headers above the bottom content*/
}

#left {
    flex-shrink: 0;  /*makes sure that content is not cut off in a smaller browser window*/
}

.top-left {
    flex-shrink: 0;
}

.top-right {
    flex-shrink: 0;
    display: inline-flex;
}

ul {
    display: inline-flex;
    list-style: none;
}
li {
  color: black;
}
.bottom {
    flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
    overflow-y: auto;  /*adds scroll to this container*/
}
</style>