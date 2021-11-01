import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from './weather/components/dropdown/dropdown.component';
import { CardsComponent } from './weather/components/cards/cards.component';

const routes: Routes = [

  {
    path:'',
    component:DropdownComponent
  },
  {
    path:'weather',
    component:CardsComponent
  },
  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
