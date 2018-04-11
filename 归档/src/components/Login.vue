<template>
    <el-container>
        <el-main class="login">
            <el-form label-position='top'
                :model='login'
                status-icon
                ref="login">
                <el-form-item prop="LoginName">
                    账号：
                    <el-input type="text"
                        v-model="login.LoginName"></el-input>
                </el-form-item>
                <el-form-item prop="LoginPwd">
                    密码：
                    <el-input type="password"
                        v-model="login.LoginPwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"
                        @click="submitForm('login')">提交</el-button>
                    <el-button @click="resetForm('login')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
// 登录页面
export default {
  data() {
    return {
      login: {
        LoginName: '陈行剑',
        LoginPwd: '123456'
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch('subLogin', this.login).then(value => {
              //本地存储用户信息
            localStorage.setItem('user', JSON.stringify(value));
            //存储登录时间戳
            localStorage.setItem('userTime', new Date());
            if (value.UNIT_ID !== undefined) {
              this.$store.dispatch('userAuthority').then(aut => {
                this.$router.push({ path: '/index' });
              });
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">

</style>
