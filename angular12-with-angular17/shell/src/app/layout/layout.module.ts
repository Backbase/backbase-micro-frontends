import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@backbase/ui-ang/header';
import { IconModule } from '@backbase/ui-ang/icon';
import { LogoModule } from '@backbase/ui-ang/logo';
import { MediaQueryModule } from '@backbase/ui-ang/media-query-lib';
import { UserContextMenuWidgetModule } from '@backbase/user-context-menu-widget-ang';
import { SharedUserContextModule } from '../shared-user-context/shared-user-context.module';
import { LayoutComponent } from './layout.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { TopBarMenuComponent } from './top-bar-menu/top-bar-menu.component';

@NgModule({
  declarations: [LayoutComponent, NavigationMenuComponent, TopBarMenuComponent],
  imports: [
    CommonModule,
    HeaderModule,
    IconModule,
    LogoModule,
    MediaQueryModule,
    RouterModule,
    SharedUserContextModule,
    UserContextMenuWidgetModule,
  ],
})
export class LayoutModule {}
