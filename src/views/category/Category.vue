<template>
  <div id="category">
    <nav-bar>
      <template v-slot:center><div>分类</div></template>
    </nav-bar>

    <el-container class="content">
      <el-aside style="width: 20%;">
        <category-menu :categories="categories" @selectItem="selectItem"></category-menu>
      </el-aside>

      <el-main>
        <scroll class="scroll" ref="scroll">
          <category-content-item :categoriesProduct="categoriesItem" />
          <tab-control :titles="titles" @tabClick="tabClick" class="tab-control" />
          <goods-list :goods="goods[currentType]" />
        </scroll>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll';
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import CategoryMenu from './childComps/CategoryMenu';
import CategoryContentItem from './childComps/CategoryContentItem';

import { getCategory, getSubcategory, getCategoryDetail } from 'network/category';
import { tabControlMixin, itemListenerMixin } from "common/mixin";

export default {
  data() {
    return {
      categories: [],
      categoriesItem: [],
      goods: {
        pop: [],
        new: [],
        sell: []
      },
      titles: ['综合', '新品', '销量'],
      currentIndex: 0
    }
  },
  mixins:[tabControlMixin, itemListenerMixin],
  created() {
    this._getCategory();
  },
  deactivated() {
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  methods: {
    // 网络请求相关
    _getCategory() {
      getCategory().then(res => {
        this.categories = res.data.category.list;
        this._getSubcategory(0);
      })
    },
    _getSubcategory(index) {
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoriesItem = res.data.list;
        this._getCategoryDetail('pop');
        this._getCategoryDetail('new');
        this._getCategoryDetail('sell');
      })
    },
    _getCategoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then(res => {
        const goodsInfo = res;
        this.goods[type] = goodsInfo;
      })
    },
    // 普通函数
    selectItem(index) {
      this.currentIndex = index;
      this._getSubcategory(index);
      this.$refs.scroll.scrollTo(0, 0, 0);
    }
  },
  components: {
    NavBar,
    CategoryMenu,
    CategoryContentItem,
    Scroll,
    TabControl,
    GoodsList
  }
}
</script>

<style scoped>
.category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  width: 100%;
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 49px;
}
.scroll {
  height: 100%;
}
.tab-control {
  margin-top: 40px;
}
</style>