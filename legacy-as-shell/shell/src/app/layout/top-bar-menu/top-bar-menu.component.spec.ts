import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MediaQueryModule } from '@backbase/ui-ang/media-query-lib';
import { SharedUserContextService } from '../../shared-user-context/shared-user-context.service';

import { TopBarMenuComponent } from './top-bar-menu.component';

describe('TopBarMenuComponent', () => {
  let component: TopBarMenuComponent;
  let fixture: ComponentFixture<TopBarMenuComponent>;

  beforeEach(async () => {
    const sharedUserContextStub = jasmine.createSpyObj('SharedUserContext', ['logout', 'reload']);
    await TestBed.configureTestingModule({
      declarations: [TopBarMenuComponent],
      imports: [MediaQueryModule, RouterTestingModule],
      providers: [{ provide: SharedUserContextService, useValue: sharedUserContextStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
