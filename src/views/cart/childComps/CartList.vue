<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <div>
        <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item" />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
import CartListItem from './CartListItem';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
.cart_list {
  height: calc(100% - 44px -49px - 50px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>