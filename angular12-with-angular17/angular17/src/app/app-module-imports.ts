/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an array named
 * `appModuleImports`.
 *
 */

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authConfig, environment } from '../environments/environment';
import { AppDataModule } from './app-data.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedAppCoreModule } from './shared-app-core.module';

/**
 * Modules in this array are added to the `imports` array of the AppModule
 * in app.module.ts.
 */
export const appModuleImports = [
  AppDataModule,
  AppRoutingModule,
  AuthModule.forRoot(environment.apiRoot, authConfig, environment.mocksEnabled),
  EffectsModule.forRoot([]),
  SharedAppCoreModule.forRoot(environment),
  StoreModule.forRoot({}),
];
