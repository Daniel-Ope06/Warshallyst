import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrototypeCreateComponent } from './components/prototype-create/prototype-create.component';

const routes: Routes = [
  {path:'create-demo', title: 'Warshallyst : Create Demo', component: PrototypeCreateComponent},
  {path:'', redirectTo: 'create-demo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
