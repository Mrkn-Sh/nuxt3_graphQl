//rules.ts
import type { FormInstance, FormRules } from "element-plus";

// set
export const presentRulesRef = ref<FormInstance>();
export const PresentRulesForm = ref<UpdatePresent>();
export const originCapacity = ref<UpdatePresent["capacity"]>();

// 文字列
const requiredMessage = "必須入力です";

export const presentRules = ref<FormRules<UpdatePresent>>({
  title: [{ required: true, message: requiredMessage, trigger: "blur" }],
  productMaker: [{ required: true, message: requiredMessage, trigger: "blur" }],
  productName: [{ required: true, message: requiredMessage, trigger: "blur" }],
  productPrice: [{ required: true, message: requiredMessage, trigger: "blur" }],
  productDescription: [
    { required: true, message: requiredMessage, trigger: "blur" },
  ],
  precautions: [{ required: true, message: requiredMessage, trigger: "blur" }],
  termsOfUse: [{ required: true, message: requiredMessage, trigger: "blur" }],
  externalLink: [
    {
      type: "url",
      required: true,
      message: "有効なインターネットアドレスを入力してください。",
      trigger: "blur",
    },
  ],
  precautionsForUse: [
    { required: true, message: requiredMessage, trigger: "blur" },
  ],
});
