import { NgModule } from '@angular/core';
import {
  AccountAliasDisplayingLevel,
  LOAN_ACCOUNT_ALIAS_DISPLAYING_LEVEL,
  LOANS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  LOANS_TRANSACTIONS_BASE_PATH,
  LoansJourneyModule,
} from '@backbase/loans-business-journey';
import {
  APP_ARRANGEMENT_MANAGER_BASE_PATH,
  APP_TRANSACTIONS_BASE_PATH,
} from '../service-paths.module';

@NgModule({
  imports: [LoansJourneyModule.forRoot()],
  providers: [
    {
      provide: LOANS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
      useExisting: APP_ARRANGEMENT_MANAGER_BASE_PATH,
    },
    {
      provide: LOANS_TRANSACTIONS_BASE_PATH,
      useExisting: APP_TRANSACTIONS_BASE_PATH,
    },
    {
      provide: LOAN_ACCOUNT_ALIAS_DISPLAYING_LEVEL,
      useValue: AccountAliasDisplayingLevel.ACCOUNT,
    },
  ],
})
export class LoansJourneyBundleModule {}
