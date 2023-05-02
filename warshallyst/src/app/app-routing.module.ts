import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrototypeCreateComponent } from './components/prototype-create/prototype-create.component';
import { NotResponsiveComponent } from './components/not-responsive/not-responsive.component';

const routes: Routes = [
  {path:'create-demo', title: 'Warshallyst : Create Demo', component: PrototypeCreateComponent},
  { path: 'not-responsive', title: 'Warshallyst : Not Responsive', component: NotResponsiveComponent },
  {path:'', redirectTo: 'create-demo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
