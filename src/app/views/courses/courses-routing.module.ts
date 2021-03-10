import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewCourseComponent } from "./new-course/new-course.component";
import { ListCoursesComponent } from "./list-courses/list-courses.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Cours",
    },
    children: [
      {
        path: "",
        redirectTo: "list",
      },
      {
        path: "list",
        component: ListCoursesComponent,
        data: {
          title: "Liste des cours",
        },
      },
      {
        path: "new",
        component: NewCourseComponent,
        data: {
          title: "Nouveau cours",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
