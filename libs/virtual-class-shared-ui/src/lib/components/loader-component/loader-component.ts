import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'virtual-class-frontend-shared-loader',
  templateUrl: './loader-component.html',
  styleUrls: ['./loader-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @HostBinding('class') cls = 'apx-ui-loader-component';
}
