import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-toggle-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-buttons.component.html',
  styles: ``
})
export class ToggleButtonsComponent {
  loginWithUser = signal(false);
  onStatusChange = output<boolean>();

  changeLoginType(value: boolean) {
    this.loginWithUser.set(value);
    this.onStatusChange.emit(this.loginWithUser());
  }
}
