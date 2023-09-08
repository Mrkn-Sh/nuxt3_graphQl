<script setup lang="ts">
import { LoginData } from '~/composables/types/interfaces'

const loginForm = ref({
  email: '',
  password: '',
});

const emits = defineEmits(['login']);

const login = () => {
  const { email, password } = loginForm.value;
  const userData: LoginData = {
    user: 'a', 
    email,
    password,
  };

  emits('login', userData); 
};

</script>

<template>
  <el-form 
    ref="formRef"
    :model="dynamicValidateForm"
  >
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <el-input v-model="loginForm.email" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="loginForm.password" />
    </el-form-item>
    <el-col :span="1">
      <el-button type="primary" @click="login">login</el-button>
    </el-col>
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
