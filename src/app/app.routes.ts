import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pix-transfer/pix-transfer').then((m) => m.PixTransferComponent),
  },
  {
    path: 'comprovante',
    loadComponent: () =>
      import('./pix-receipt/pix-receipt').then((m) => m.PixReceiptComponent),
  },
];
