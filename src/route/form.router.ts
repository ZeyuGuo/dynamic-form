import MainLayout from "@/layout/main/MainLayout.vue";

const router = {
  path: "/",
  component: MainLayout,
  name: "/",
  redirect: "/dynamic-form",
  meta: {
    title: "表单页",
    icon: "form",
    i18n: `menu.form`,
  },
  children: [
    {
      path: "dynamic-form",
      name: "/dynamic-form",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/DynamicForm.vue"),
      meta: {
        title: "动态表单",
        i18n: `动态表单`,
      },
    },
  ],
};

export default router;
