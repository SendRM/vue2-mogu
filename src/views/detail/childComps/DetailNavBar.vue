<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="" @click="backClick" class="back">
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item, index) in titles" :key="item" @click="titleClick(index)"
               class="title-item" :class="{active: currentIndex === index}">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index);
    },
    backClick() {
      this.$router.back();
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 12px;
}
</style>