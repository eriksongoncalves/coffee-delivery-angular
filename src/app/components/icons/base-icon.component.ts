import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-base-icon',
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseIconComponent {
  @Input()
  width?: number = 32

  @Input()
  height?: number = 32
}
