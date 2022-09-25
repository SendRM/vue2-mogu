<template>
  <scroll id="menu">
    <div v-for="(item,index) in categories" :key="item.title" 
         @click="itemClick(index)" :class="{active: index === currentIndex}" class="menu-list-item">
      {{item.title}}
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
 data() {
		return {
		  currentIndex: 0
    }
  },
  props: {
    categories: Array
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('selectItem', index);
    }
  },
  components: {
    Scroll
  }
}
</script>

<style>
#menu {
  background-color: #f6f6f6;
  box-sizing: border-box;
}
.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>