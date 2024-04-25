import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipModule } from '@swimlane/ngx-charts';

import { BalanceHistoryViewComponent } from './balance-history-view.component';

describe('BalanceHistoryViewComponent', () => {
  let component: BalanceHistoryViewComponent;
  let fixture: ComponentFixture<BalanceHistoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceHistoryViewComponent],
      imports: [TooltipModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
