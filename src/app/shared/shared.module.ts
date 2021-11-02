import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DegreePipe } from './pipes/degree.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    DegreePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SidebarComponent,
    DegreePipe
  ]
})
export class SharedModule { }

