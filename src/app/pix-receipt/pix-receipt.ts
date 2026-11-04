import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pix-receipt',
  imports: [RouterLink],
  templateUrl: './pix-receipt.html',
  styleUrl: './pix-receipt.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PixReceiptComponent {
  readonly valor = input(150);
  readonly nome = input('Erick S.');

  protected readonly idTransacao = 'E00038166202510241432a9fbc8102';
  protected readonly dataOperacao = '24 de Outubro de 2025 às 14:32:18';
  protected readonly chaveMascarada = '***.***.892-00';
  protected readonly instituicaoDestino = 'Nu Pagamentos S.A. (Nubank)';
  protected readonly contaDestino = 'Agência 0001 • C/C 4829104-2';
  protected readonly nomePagador = 'Erick Silva';
  protected readonly instituicaoOrigem = 'Pix Instantâneo Payments';
  protected readonly contaOrigem = 'Agência 0001 • C/C 109283-9';
  protected readonly tipoTransacao = 'Pix Transferência (Normal)';

  protected readonly copiado = signal(false);

  protected readonly valorFormatado = computed(() =>
    this.valor().toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  );

  protected async copiarId(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.idTransacao);
      this.copiado.set(true);
      window.setTimeout(() => this.copiado.set(false), 2500);
    } catch {
      // Clipboard indisponível: o ID permanece selecionável via select-all no template.
    }
  }
}
