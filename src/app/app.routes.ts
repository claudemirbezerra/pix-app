import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pix-transfer/pix-transfer').then((m) => m.PixTransferComponent),
  },
];
