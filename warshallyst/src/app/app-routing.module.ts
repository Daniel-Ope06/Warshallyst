import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrototypeCreateComponent } from './components/prototype-create/prototype-create.component';

const routes: Routes = [
  {path:'demo-create', title: 'Demo Create', component: PrototypeCreateComponent},
  {path:'', redirectTo: 'demo-create', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
