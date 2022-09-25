<template>
  <div id="shopcart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{length}})</div>
      </template>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar';

import { mapGetters } from 'vuex';

export default {
  computed: {
    //mapGetters的第一种用法
    // ...mapGetters(['cartCount'])
    //第二种用法 起别名
    ...mapGetters({
      length: 'cartCount'
    })
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  }
}
</script>

<style scoped>
  #shopcart {
    position: relative;
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>