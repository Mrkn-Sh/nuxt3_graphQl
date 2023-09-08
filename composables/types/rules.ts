//rules.ts
import type { FormInstance, FormRules } from "element-plus";
import { LoginData } from "~/composables/types/rules";

// set
export const LoginForm = ref<LoginData[]>();
export const loginRulesRef = ref<FormInstance>();

// 文字列
const requiredMessage = "必須入力です";
const emailMessage = "メールアドレスを入れてください";

export const loginRules = ref<FormRules<LoginData>>({
  username: [{ required: true, message: requiredMessage, trigger: "blur" }],
  email: [{ type: 'email', required: true, message: emailMessage, trigger: ["blur", "input"] }],
  password: [{ required: true, message: requiredMessage, trigger: "blur" }],
});

