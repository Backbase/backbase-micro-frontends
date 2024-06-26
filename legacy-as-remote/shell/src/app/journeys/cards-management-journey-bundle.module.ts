import { NgModule } from '@angular/core';
import {
  CARDS_MANAGEMENT_JOURNEY_CARDS_BASE_PATH,
  CardsManagementJourneyConfiguration,
  CardsManagementJourneyConfigurationToken,
  CardsManagementJourneyModule,
} from '@backbase/cards-management-journey-ang';
import { APP_CARDS_BASE_PATH } from '../service-paths.module';

@NgModule({
  imports: [CardsManagementJourneyModule.forRoot()],
  providers: [
    {
      provide: CardsManagementJourneyConfigurationToken,
      useValue: {
        deElevatedHeader: true,
      } as Partial<CardsManagementJourneyConfiguration>,
    },
    {
      provide: CARDS_MANAGEMENT_JOURNEY_CARDS_BASE_PATH,
      useExisting: APP_CARDS_BASE_PATH,
    },
  ],
})
export class CardsManagementJourneyBundleModule {}
