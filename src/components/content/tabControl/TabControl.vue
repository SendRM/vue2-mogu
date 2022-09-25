<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item" class="tab-control-item" 
         :class="{isActive: currentIndex === index}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  },
  props: {
    titles: Array
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px
}
.tab-control-item {
  flex: 1;
}
.isActive {
  color: var(--color-high-text);
}
.isActive span {
  border-bottom: 3px solid var(--color-tint);
}
</style>