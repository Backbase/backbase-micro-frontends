/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export an array named
 * `appModuleImports`.
 *
 */

import { AppDataModule } from './app-data.module';
import { AppRoutingModule } from './app-routing.module';

/**
 * Modules in this array are added to the `imports` array of the AppModule
 * in app.module.ts.
 */
export const appModuleImports = [AppDataModule, AppRoutingModule];
