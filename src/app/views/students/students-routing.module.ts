import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewStudentComponent } from "./new-student/new-student.component";
import { ListStudentsComponent } from "./list-students/list-students.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Elèves",
    },
    children: [
      {
        path: "",
        redirectTo: "list",
      },
      {
        path: "list",
        component: ListStudentsComponent,
        data: {
          title: "Liste des élèves",
        },
      },
      {
        path: "new",
        component: NewStudentComponent,
        data: {
          title: "Nouveau élève",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
