import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Mon profil",
    },
    children: [
      {
        path: "",
        redirectTo: "profile",
      },
      {
        path: "profile",
        component: ProfileComponent,
        data: {
          title: "Mon profile",
        },
      },
      {
        path: "settings",
        component: SettingsComponent,
        data: {
          title: "paramètres",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
