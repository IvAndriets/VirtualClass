import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'virtual-class-frontend-shared-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UILayoutComponent {
}
