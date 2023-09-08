//rules.ts
import type { FormInstance, FormRules } from "element-plus";

// set
export const loginRulesRef = ref<FormInstance>();
export const LoginForm = ref<LoginData>();
export const originCapacity = ref<UpdatePresent["capacity"]>();

// 文字列
const requiredMessage = "必須入力です";

export const loginRules = ref<FormRules<LoginData>>({
  username: [{ required: true, message: requiredMessage, trigger: "blur" }],
  email: [{ required: true, message: requiredMessage, trigger: "blur" }],
  password: [{ required: true, message: requiredMessage, trigger: "blur" }],
});

