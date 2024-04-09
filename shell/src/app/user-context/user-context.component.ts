import { Component } from '@angular/core';
import { SharedUserContextService } from '../shared-user-context/shared-user-context.service';

@Component({
  selector: 'app-user-context',
  templateUrl: './user-context.component.html',
})
export class UserContextComponent {
  constructor(public readonly userContextService: SharedUserContextService) {}
}
