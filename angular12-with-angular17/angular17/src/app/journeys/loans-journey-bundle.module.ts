import { NgModule } from '@angular/core';
import {
  LoansJourneyModule,
  LOANS_JOURNEY_ARRANGEMENT_MANAGER_BASE_PATH,
  LOAN_ACCOUNT_ALIAS_DISPLAYING_LEVEL,
  AccountAliasDisplayingLevel,
  LOANS_TRANSACTIONS_BASE_PATH,
  LoansJourneyConfigurationToken,
  loansConfigurationDefault,
  LoansJourneyConfiguration,
} from '@backbase/loans-business-journey';
import { APP_ARRANGEMENT_MANAGER_BASE_PATH, APP_TRANSACTIONS_BASE_PATH } from '../service-paths.module';

const APP_CONFIG = {
  paginationType: 'pagination',
  pageSize: 20,
};

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
    {
      provide: LoansJourneyConfigurationToken,
      useValue: {
        transaction: {
          ...loansConfigurationDefault.transaction,
          itemsPerPage: APP_CONFIG.pageSize,
          paginationType: APP_CONFIG.paginationType,
        },
        accountStatement: {
          ...loansConfigurationDefault.accountStatement,
          itemsPerPage: APP_CONFIG.pageSize,
          paginationType: APP_CONFIG.paginationType,
        },
        loansList: {
          ...loansConfigurationDefault.loansList,
          itemsPerPage: APP_CONFIG.pageSize,
        },
        paymentSchedule: {
          ...loansConfigurationDefault.paymentSchedule,
          itemsPerPage: APP_CONFIG.pageSize,
        },
        loanChildren: {
          ...loansConfigurationDefault.loanChildren,
          itemsPerPage: APP_CONFIG.pageSize,
        },
        escrow: {
          ...loansConfigurationDefault.escrow,
          itemsPerPage: APP_CONFIG.pageSize,
        },
      } as Partial<LoansJourneyConfiguration>,
    },
  ],
})
export class LoansJourneyBundleModule {}
