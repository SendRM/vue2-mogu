<template>
  <div class="profile">
    <!-- <nav-bar>
      <template v-slot:center><div>超级商场</div></template>
    </nav-bar> -->
    <user-info></user-info>
    <list-view :list="list"></list-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserInfo from "./childComps/UserInfo";
import ListView from "./childComps/ListView";

export default {
  name: "Profile",
  data() {
    return {
      list: [
        { icon: "el-icon-tickets", text: "我的消息" },
        { icon: "el-icon-shopping-bag-2", text: "积分商城" },
        { icon: "el-icon-star-on", text: "会员卡" },
        { icon: "el-icon-shopping-cart-2", text: "我的购物车" },
        { icon: "el-icon-info", text: "下载购物APP" },
        { icon: "el-icon-s-tools", text: "设置" },
        { icon: "el-icon-s-help", text: "更多" },
      ],
    };
  },
  components: {
    NavBar,
    UserInfo,
    ListView,
  },
};
</script>

<style scoped>
.profile {
  height: 100vh;
  background-color: #f2f2f2;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
