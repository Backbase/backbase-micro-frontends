import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectContextWidgetModule } from '@backbase/select-context-widget-ang';
import { SharedUserContextModule } from '../shared-user-context/shared-user-context.module';
import { UserContextComponent } from './user-context.component';

@NgModule({
  declarations: [UserContextComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserContextComponent,
      },
    ]),
    SelectContextWidgetModule,
    SharedUserContextModule,
  ],
})
export class UserContextModule {}
