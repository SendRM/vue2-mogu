<template>
  <div class="list">
    <el-row v-for="item in list" :key="item.icon">
      <i :class="item.icon"></i>
      <span class="text">{{item.text}}</span>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    default() {
      return []
    }
  }
}
</script>

<style scoped>
.el-row {
  background-color: #fff;
  padding: 4px 0;
}
i {
  color: var(--color-tint);
  font-size: 24px;
  vertical-align: middle;
}
i, 
.text {
  padding: 5px 10px;
}
.text {
  width: 200px;
}
.list .el-row:nth-child(1),
.list .el-row:nth-child(4),
.list .el-row:nth-child(6) {
  margin-top: 14px;
}
.list .el-row:first-child,
.list .el-row:nth-child(even) {
  border-bottom: 1px solid #ddd;
}
</style>