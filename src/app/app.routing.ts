import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/auth/login/login.component";
import { SettingsComponent } from "./views/settings/settings.component";
import { LogoutComponent } from "./views/auth/logout/logout.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "logout",
    component: LogoutComponent,
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Accueil",
    },
    children: [
      {
        path: "students",
        loadChildren: () =>
          import("./views/students/students.module").then(
            (m) => m.StudentsModule
          ),
      },
      {
        path: "payments",
        loadChildren: () =>
          import("./views/payments/payments.module").then(
            (m) => m.PaymentsModule
          ),
      },
      {
        path: "teachers",
        loadChildren: () =>
          import("./views/teachers/teachers.module").then(
            (m) => m.TeachersModule
          ),
      },
      {
        path: "courses",
        loadChildren: () =>
          import("./views/courses/courses.module").then((m) => m.CoursesModule),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },

      {
        path: "settings",
        component: SettingsComponent,
        data: {
          title: "Réglages",
        },
      },
      {
        path: "users",
        loadChildren: () =>
          import("./views/users/users.module").then((m) => m.UsersModule),
      },
      {
        path: "account",
        loadChildren: () =>
          import("./views/account/account.module").then((m) => m.AccountModule),
      },
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
