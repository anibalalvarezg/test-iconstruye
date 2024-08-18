import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ToggleButtonsComponent } from '@Components/toggle-buttons/toggle-buttons.component';
import { TextInputComponent } from '@Components/text-input/text-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@Services/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '@Components/dialog/dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ToggleButtonsComponent, TextInputComponent, ReactiveFormsModule, MatDialogModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  loginWithUser = signal(false);
  loginForm!: FormGroup;
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const { email, password } = this.loginForm.value;
    this.authService.authenticate(email, password).subscribe((result) => {
      if (result) {
        this.openDialog('Crendenciales correctas!')
      }
    },
    () => {
      this.openDialog('Crendenciales incorrectas!')
    });
  }

  openDialog(message: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message },
    });
  }
}
