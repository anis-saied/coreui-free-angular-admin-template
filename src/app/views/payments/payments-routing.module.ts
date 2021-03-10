import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewPaymentComponent } from "./new-payment/new-payment.component";
import { ListPaymentsComponent } from "./list-payments/list-payments.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Paiements",
    },
    children: [
      {
        path: "",
        redirectTo: "new",
      },
      {
        path: "list",
        component: ListPaymentsComponent,
        data: {
          title: "Liste des paiements",
        },
      },
      {
        path: "new",
        component: NewPaymentComponent,
        data: {
          title: "Nouveau paiement",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
