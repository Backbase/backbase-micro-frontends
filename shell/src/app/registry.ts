import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry: { [index: string]: any } = {
  angular14: () =>
    loadRemoteModule({
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'angular14',
      exposedModule: './web-components',
    }),
};
