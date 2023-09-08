<script setup lang="ts">
import { LoginData } from '~/composables/types/interfaces'
import { loginRulesRef, loginRules } from '~/composables/types/rules'
import ja from "element-plus/es/locale/lang/ja";

// data
const loginForm = ref({
  username: '',
  email: '',
  password: '',
});

const emits = defineEmits(['login']);

const login = () => {
  const { email, password } = loginForm.value;
  const userData: LoginData = {
    username: '', 
    email,
    password,
  };

  emits('login', userData); 
};

</script>

<template>
  <el-form 
    ref="formRef"
    :model="loginForm"
    :rules="loginRules"
    status-icon
  >
    <el-config-provider :locale="ja">
      <el-form-item
        prop="username"
        label="ユーザー名"
      >
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item
        prop="email"
        label="メールアドレス"
        >
        <el-input v-model="loginForm.email" />
        </el-form-item>
        <el-form-item prop="password" label="パスワード">
        <el-input v-model="loginForm.password" />
        </el-form-item>
        <el-col :span="1">
        <el-button type="primary" @click="login">login</el-button>
        </el-col>
      </el-config-provider>
  </el-form>
</template>

<style scoped>
.el-form {
    margin: 16px;
}

.el-input {
    width: 300px;
}

.warning {
    color: red;
}
</style>
