import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ErrorModal } from '../error-modal/error-modal';
import { PixReceiptComponent } from '../pix-receipt/pix-receipt';

const LIMITE_PIX_SEM_APROVACAO = 5000;

@Component({
  selector: 'app-pix-transfer',
  imports: [ErrorModal, PixReceiptComponent],
  templateUrl: './pix-transfer.html',
  styleUrl: './pix-transfer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PixTransferComponent {
  protected readonly chavePix = signal('');
  protected readonly valor = signal<number | null>(null);
  protected readonly dataAgendamento = signal('');
  protected readonly erroLimiteAberto = signal(false);
  protected readonly recibo = signal<{ valor: number; nome: string } | null>(null);

  protected atualizarValor(bruto: string): void {
    if (bruto === '') {
      this.valor.set(null);
      return;
    }

    const valor = Number(bruto);
    this.valor.set(Number.isFinite(valor) ? valor : null);
  }

  protected confirmar(event: Event): void {
    event.preventDefault();

    const valor = this.valor();
    if (valor === null || valor <= 0) {
      return;
    }

    if (valor > LIMITE_PIX_SEM_APROVACAO) {
      this.erroLimiteAberto.set(true);
      return;
    }

    this.recibo.set({
      valor,
      nome: this.chavePix(),
    });
  }

  protected fecharErroLimite(): void {
    this.erroLimiteAberto.set(false);
  }
}
