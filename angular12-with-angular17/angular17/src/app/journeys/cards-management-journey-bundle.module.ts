import { NgModule } from '@angular/core';
import {
  CARDS_MANAGEMENT_JOURNEY_CARDS_BASE_PATH,
  CardsManagementJourneyConfiguration,
  CardsManagementJourneyConfigurationToken,
  CardsManagementJourneyModule,
} from '@backbase/cards-management-journey-ang';
import { environment } from '../../environments/environment';
import { APP_CARDS_BASE_PATH } from '../service-paths.module';

const CARDS_MANAGEMENT_JOURNEY_CONFIGURATION: Partial<CardsManagementJourneyConfiguration> = {
  deElevatedHeader: true,
};

if (environment.cardProductsModelBankConfigurations) {
  CARDS_MANAGEMENT_JOURNEY_CONFIGURATION.cardProductNameFormatter = (cardProduct) => {
    if (!cardProduct) return '';
    const { name } = cardProduct;

    switch (name) {
      case 'Single-Use':
        return $localize`:@@card.cardProducts.cardProductName.single:Single-use virtual`;
      case 'Multi-Use':
        return $localize`:@@card.cardProducts.cardProductName.multi:Multi-use virtual`;
      case 'Backbase Standard':
        return $localize`:@@card.cardProducts.cardProductName.standard:Backbase Standard`;
      case 'Backbase Green':
        return $localize`:@@card.cardProducts.cardProductName.green:Backbase Green`;
      case 'Backbase Gold':
        return $localize`:@@card.cardProducts.cardProductName.gold:Backbase Gold`;
      default:
        return cardProduct.name;
    }
  };

  CARDS_MANAGEMENT_JOURNEY_CONFIGURATION.cardProductDescriptionFormatter = (cardProduct) => {
    if (!cardProduct) return '';
    const { name } = cardProduct;

    switch (name) {
      case 'Single-Use':
        return $localize`:@@card.cardProducts.cardProductDescription.single:Secure and free virtual card designed for one-time online payments`;
      case 'Multi-Use':
        return $localize`:@@card.cardProducts.cardProductDescription.multi:Convenient and free virtual card for multiple transactions`;
      case 'Backbase Standard':
        return $localize`:@@card.cardProducts.cardProductDescription.standard:Reliable debit card for your everyday transactions and withdrawals`;
      case 'Backbase Green':
        return $localize`:@@card.cardProducts.cardProductDescription.green:Biodegradable debit card for the conscious spender`;
      case 'Backbase Gold':
        return $localize`:@@card.cardProducts.cardProductDescription.gold:Prestigious card with premium benefits and unmatched financial flexibility`;
      default:
        return '';
    }
  };
}

@NgModule({
  imports: [CardsManagementJourneyModule.forRoot()],
  providers: [
    {
      provide: CardsManagementJourneyConfigurationToken,
      useValue: CARDS_MANAGEMENT_JOURNEY_CONFIGURATION,
    },
    {
      provide: CARDS_MANAGEMENT_JOURNEY_CARDS_BASE_PATH,
      useExisting: APP_CARDS_BASE_PATH,
    },
  ],
})
export class CardsManagementJourneyBundleModule {}
