<template>
  <div class="content" style="position: relative;">
    <div v-for="item in categoriesProduct" :key="item.image"  class="content-item">
      <div>
          <img :src="item.image">
          <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoriesProduct: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  margin-top: -50px;
}
.content-item {
  flex: 1;
  padding: 10px 16px 10px 0;
  text-align: center;
}
.content div:nth-child(n+3) {
  padding-right: 0;
}
.content-item img {
  width: 70px;
  height: 70px;
}
.content-item span {
  display: block;
  font-size: 12px;
}
</style>