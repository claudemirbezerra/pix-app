import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-pix-transfer',
  templateUrl: './pix-transfer.html',
  styleUrl: './pix-transfer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PixTransferComponent {
  protected readonly chavePix = signal('');
  protected readonly valor = signal<number | null>(null);
  protected readonly dataAgendamento = signal('');

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
  }
}
