import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewTeacherComponent } from "./new-teacher/new-teacher.component";
import { ListTeachersComponent } from "./list-teachers/list-teachers.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Enseignants",
    },
    children: [
      {
        path: "",
        redirectTo: "list",
      },
      {
        path: "list",
        component: ListTeachersComponent,
        data: {
          title: "Liste des enseignants",
        },
      },
      {
        path: "new",
        component: NewTeacherComponent,
        data: {
          title: "Nouveau enseignant",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
