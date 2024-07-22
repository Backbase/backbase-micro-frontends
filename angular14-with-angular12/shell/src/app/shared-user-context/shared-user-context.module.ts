import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { SharedUserContextService, UserContextConfigurationToken } from './shared-user-context.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    SharedUserContextService,
    {
      provide: UserContextConfigurationToken,
      useValue: environment.landingPageUrl,
    },
  ],
})
export class SharedUserContextModule {}
