import { Component } from '@angular/core';
import { LayoutService } from '@backbase/ui-ang/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(public readonly layoutService: LayoutService) {}
}
