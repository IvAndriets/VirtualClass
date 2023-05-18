import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'virtual-class-frontend-shared-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHeaderComponent {
}
