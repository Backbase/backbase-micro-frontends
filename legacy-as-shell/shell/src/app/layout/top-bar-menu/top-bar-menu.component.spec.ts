import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MediaQueryModule } from '@backbase/ui-ang/media-query-lib';

import { TopBarMenuComponent } from './top-bar-menu.component';

describe('TopBarMenuComponent', () => {
  let component: TopBarMenuComponent;
  let fixture: ComponentFixture<TopBarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarMenuComponent],
      imports: [MediaQueryModule, RouterTestingModule],
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
