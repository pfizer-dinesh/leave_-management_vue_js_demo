import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import LeaveApplyPage from "@/views/LeaveApplyPage.vue";
import EmpLeaveReportPage from "@/views/EmpLeaveReportPage.vue";
import LeaveConfigPage from "@/views/LeaveConfigPage.vue";
import LeaveManageGuidePage from "@/views/LeaveManageGuidePage.vue";
import AddEmployeePage from "@/views/AddEmployeePage.vue";


const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
 {
    path: "/leave-apply",
    name: "LeaveApplyPage",
    component: LeaveApplyPage,
  },
  {
    path: "/leave-report",
    name: "EmpLeaveReportPage",
    component: EmpLeaveReportPage,
  },
  {
    path: "/leave-config",
    name: "LeaveConfigPage",
    component: LeaveConfigPage,
  },
  {
    path: "/leave-manage-guide",
    name: "LeaveManageGuidePage",
    component: LeaveManageGuidePage,
  },
  {
    path: "/add-employee",
    name: "AddEmployeePage",
    component: AddEmployeePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;