import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from './components/card-page/card-page.component';

const routes: Routes = [
  {
    path: "cards",
    component: CardPageComponent
  },
  {
    path: "",
    redirectTo: "/cards",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
