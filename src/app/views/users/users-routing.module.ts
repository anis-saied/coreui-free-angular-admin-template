import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewUserComponent } from "./new-user/new-user.component";
import { ListUsersComponent } from "./list-users/list-users.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Utilisateurs",
    },
    children: [
      {
        path: "",
        redirectTo: "list",
      },
      {
        path: "list",
        component: ListUsersComponent,
        data: {
          title: "Liste des utilisateurs",
        },
      },
      {
        path: "new",
        component: NewUserComponent,
        data: {
          title: "Nouveau utilisateur",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
