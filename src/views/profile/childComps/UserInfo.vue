<template>
  <div>
    <el-row  class="user">
      <el-col :span="5">
        <el-avatar icon="el-icon-user-solid" :size="60"></el-avatar>
      </el-col>
      <el-col :span="17" style="padding-top: 10px;">
        <div>登录/注册</div>
        <i class="el-icon-mobile phone">暂无绑定手机号</i>
      </el-col>
      <el-col :span="2" style="padding-top: 10px;">
        <i class="el-icon-arrow-right"></i>
      </el-col>
    </el-row>

    <el-row class="info">
      <el-col :span="8">
        <span class="count">0.00</span>
        <span>元</span>
        <div class="my-info">我的余额</div>
      </el-col>
      <el-col :span="8" class="middle">
       <span class="count">0</span>
        <span>个</span>
        <div class="my-info">我的优惠</div>
      </el-col>
      <el-col :span="8">
        <span class="count">0</span>
        <span>分</span>
        <div class="my-info">我的积分</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user {
  background-color: var(--color-tint);
  color: #fff;
  padding: 16px 0 18px 16px;
}
.el-avatar {
  font-size: 40px;
  vertical-align: text-top;
  color: rgb(220, 220, 220);
  background: #fff;
}
.phone,
.el-icon-arrow-right {
  padding-top: 6px;
}
.info {
  background-color: #fff;
}
.info .el-col {
  padding: 14px 2px;
  text-align: center;
}
.count {
  font-weight: 700;
  color: #ff5f3e;
  font-size: 22px;
}
.my-info {
  font-size: 12px;
  padding-top: 4px;
}
.middle {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
</style>