import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardsComponent } from './components/cards/cards.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SharedModule } from '../shared/shared.module';
import { DegreePipe } from '../shared/pipes/degree.pipe';



@NgModule({
  declarations: [
    DropdownComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

  ],
  exports:[
    DropdownComponent,
    CardsComponent
  ],
  providers:[
    DegreePipe
  ]
})
export class WeatherModule { }
