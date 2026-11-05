import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export type PixTransactionType = 'received' | 'sent';

export interface PixTransaction {
  id: string;
  title: string;
  amount: number;
  type: PixTransactionType;
  date: string;
}

@Component({
  selector: 'app-pix-history',
  templateUrl: './pix-history.html',
  styleUrl: './pix-history.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PixHistoryComponent {
  protected readonly transactions = signal<PixTransaction[]>([
    {
      id: 'tx-001',
      title: 'Pix recebido - Erick S.',
      amount: 500,
      type: 'received',
      date: '14 de Março, 14:30',
    },
    {
      id: 'tx-002',
      title: 'Transferência enviada - Ana P.',
      amount: 150,
      type: 'sent',
      date: '13 de Março, 09:15',
    },
    {
      id: 'tx-003',
      title: 'Pagamento efetuado - Conta de Luz',
      amount: 42.9,
      type: 'sent',
      date: '12 de Março, 18:45',
    },
  ]);

  protected formatAmount(transaction: PixTransaction): string {
    const formatted = transaction.amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const sign = transaction.type === 'received' ? '+' : '-';
    return `${sign} R$ ${formatted}`;
  }

  protected iconFor(type: PixTransactionType): string {
    return type === 'received' ? 'arrow_upward' : 'arrow_downward';
  }
}
