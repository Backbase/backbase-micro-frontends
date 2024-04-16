import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatementBusinessViewComponent } from './account-statement-business-view.component';

describe('AccountStatementBusinessViewComponent', () => {
  let component: AccountStatementBusinessViewComponent;
  let fixture: ComponentFixture<AccountStatementBusinessViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountStatementBusinessViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatementBusinessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
