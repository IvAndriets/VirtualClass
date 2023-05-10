import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'virtual-class-frontend-shared-error-placeholder',
  templateUrl: './error-placeholder.component.html',
  styleUrls: ['./error-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPlaceholderComponent {
  @Input() error: any;
  @Input() dismissible = false;
  @HostBinding('style.display') display = 'block';

  getError(error: any, cut = false): string {
    if (typeof error?.error === 'string') {
      return error.error.slice(0, cut ? 300 : 600);
    } else if (typeof error?.error?.message === 'string') {
      return error.error.message.slice(0, cut ? 300 : 600);
    } else if (typeof error?.message  === 'string') {
      return error.message.slice(0, cut ? 300 : 600);
    } else {
      return 'Something went wrong';
    }
  }

  onDismiss(): void {
    this.display = 'none';
  }
}
