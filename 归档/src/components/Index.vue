<template>
  <el-container>
    <el-header @click="hand">Header
    </el-header>
    <el-container>
      <el-menu default-active="0-1" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-submenu v-for="(modules,mindex) in UserAuthority" :key="modules.ID" :index="String(mindex)" @click="hand">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{modules.Name}}</span>
          </template>
          <el-menu-item-group v-for="(childModules,cindex) in modules.children" :key="childModules.ID">
            <router-link :to="goStringIndex(childModules.ID)">
              <el-menu-item :index="childStringIndex(mindex,cindex)">
                {{childModules.Name}}
              </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    ...mapGetters({
      logindata: 'getLoginData',
      UserAuthority: 'getUserAuthority'
    })
  },
  methods: {
    // 拼接导航的index
    childStringIndex(mindex, cindex) {
      return `${mindex}-${cindex}`;
    },
    goStringIndex(url) {
      return `/index/${url}`;
    },
    // 是否缩小
    hand() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped>
.el-main {
  padding: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
