<template>
  <div id="home">
    <nav>
      <ul>
        <li v-for="item in navBar" :key="item.title">{{ item.title }}</li>
      </ul>
    </nav>
    <div id="content">

    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeView',
  setup() {
    const navBar = [
      {
        title: "首页",
        icon: "",
      },
      {
        title: "用户",
        icon: ""
      }
    ]
    return {
      navBar
    }

  }

}
</script>
<style lang="less">
@media screen and (max-width: 1920px) {
  nav {
    width: 300px;
    background-color: white;
  }
}

@media screen and (max-width: 800px) {
  nav {
    width: 180px;
    background-color: red;
  }
}

@media screen and (max-width: 700px) {
  nav {
    display: none;
  }
}
</style>
