import { Component } from '@angular/core';
import { LayoutService } from '@backbase/ui-ang/layout';
import { SharedUserContextService } from '../../shared-user-context/shared-user-context.service';

@Component({
  selector: 'app-top-bar-menu',
  templateUrl: './top-bar-menu.component.html',
})
export class TopBarMenuComponent {
  constructor(
    public readonly layoutService: LayoutService,
    public readonly userContextService: SharedUserContextService,
  ) {}
}
