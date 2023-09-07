<template>
    <span class="warning">Debug Mode</span>
    <el-form label-position="top">
        <el-form-item label="User">
            <el-input v-model="user" placeholder="user name" />
        </el-form-item>
        <el-form-item label="Mail">
            <el-input v-model="mail" placeholder="mail address" />
        </el-form-item>
        <!--
        <el-form-item label="Password">
            <el-input v-model="password" type="password" class="" show-password />
        </el-form-item>
        -->
        <el-col :span="1">
            <el-button type="primary" @click="onClick">login</el-button>
        </el-col>
    </el-form>
</template>

<script setup lang="ts">
const user = ref<string>("testUser");
const mail = ref<string>("test@test.mail");
// const password = ref<string>('')

const emits = defineEmits<{ (e: "click", value: LoginData): void }>();
const onClick = () => {
    const data = {
        user: user.value,
        mail: mail.value,
        password: "dummyPassword",
    } as LoginData;
    emits("click", data);
};
</script>

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
