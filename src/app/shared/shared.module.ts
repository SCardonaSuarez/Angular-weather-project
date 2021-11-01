import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TemperatureConverterPipe } from './pipes/tempareture.pipe';
import { DegreePipe } from './pipes/degree.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    TemperatureConverterPipe,
    DegreePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SidebarComponent,
    TemperatureConverterPipe,
    DegreePipe
  ]
})
export class SharedModule { }
