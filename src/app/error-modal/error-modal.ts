import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

let proximoId = 0;

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.html',
  styleUrl: './error-modal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'fechar($event)',
    '(keydown)': 'conterFoco($event)',
  },
})
export class ErrorModal {
  readonly title = input.required<string>();
  readonly message = input.required<string>();
  readonly closed = output<void>();

  private readonly id = ++proximoId;
  protected readonly titleId = `error-modal-title-${this.id}`;
  protected readonly messageId = `error-modal-message-${this.id}`;
  protected readonly visivel = signal(true);

  private readonly dialog = viewChild.required<ElementRef<HTMLElement>>('dialog');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  private elementoAnterior: HTMLElement | null = null;
  private focoRestaurado = false;
  private rolagemTravada = false;
  private readonly isolados: HTMLElement[] = [];

  constructor() {
    afterNextRender(() => {
      const ativo = document.activeElement;
      this.elementoAnterior = ativo instanceof HTMLElement ? ativo : null;
      this.isolarFundo();
      this.travarRolagem();
      this.dialog().nativeElement.focus();
    });

    this.destroyRef.onDestroy(() => {
      this.liberarRolagem();
      this.liberarFundo();
      this.restaurarFoco();
    });
  }

  protected fechar(event?: Event): void {
    if (!this.visivel()) {
      return;
    }

    event?.preventDefault();
    event?.stopPropagation();
    this.visivel.set(false);
    this.liberarRolagem();
    this.liberarFundo();
    this.restaurarFoco();
    this.closed.emit();
  }

  protected conterFoco(event: KeyboardEvent): void {
    if (event.key !== 'Tab' || !this.visivel()) {
      return;
    }

    const dialogo = this.dialog().nativeElement;
    const focaveis = this.elementosFocaveis(dialogo);

    if (focaveis.length === 0) {
      event.preventDefault();
      dialogo.focus();
      return;
    }

    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    const ativo = document.activeElement;
    const noInicio = ativo === primeiro || ativo === dialogo;
    const noFim = ativo === ultimo;
    const fora = ativo instanceof Node && !dialogo.contains(ativo);

    if (event.shiftKey && (noInicio || fora)) {
      event.preventDefault();
      ultimo.focus();
      return;
    }

    if (!event.shiftKey && (noFim || fora)) {
      event.preventDefault();
      primeiro.focus();
    }
  }

  private elementosFocaveis(raiz: HTMLElement): HTMLElement[] {
    const seletor = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return Array.from(raiz.querySelectorAll<HTMLElement>(seletor)).filter(
      (elemento) => !elemento.hasAttribute('disabled') && elemento.tabIndex >= 0,
    );
  }

  private isolarFundo(): void {
    let atual: HTMLElement = this.host.nativeElement;

    while (atual !== document.body) {
      const pai = atual.parentElement;
      if (!pai) {
        break;
      }

      for (const irmao of Array.from(pai.children)) {
        if (irmao !== atual && irmao instanceof HTMLElement && !irmao.hasAttribute('inert')) {
          irmao.setAttribute('inert', '');
          this.isolados.push(irmao);
        }
      }

      atual = pai;
    }
  }

  private liberarFundo(): void {
    for (const elemento of this.isolados) {
      elemento.removeAttribute('inert');
    }

    this.isolados.length = 0;
  }

  private travarRolagem(): void {
    if (this.rolagemTravada) {
      return;
    }

    this.rolagemTravada = true;
    document.body.style.overflow = 'hidden';
  }

  private liberarRolagem(): void {
    if (!this.rolagemTravada) {
      return;
    }

    this.rolagemTravada = false;
    document.body.style.overflow = '';
  }

  private restaurarFoco(): void {
    if (this.focoRestaurado) {
      return;
    }

    this.focoRestaurado = true;
    this.elementoAnterior?.focus();
  }
}
