import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KkkComponent } from './kkk/kkk.component';
import { KkjhgfdfghComponent } from './kkjhgfdfgh/kkjhgfdfgh.component';

const routes: Routes = [
  {path:'dashboard',component:KkkComponent,children:[
  {path:'t1',component:KkjhgfdfghComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
