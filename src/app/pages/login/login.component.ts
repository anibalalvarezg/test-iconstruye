import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ToggleButtonsComponent } from '../../components/toggle-buttons/toggle-buttons.component';
import { TextInputComponent } from '../../components/text-input/text-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ToggleButtonsComponent, TextInputComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  loginWithUser = signal(false);
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const { email, password } = this.loginForm.value;
    this.authService.authenticate(email, password).subscribe((result) => console.log(result));
  }
}
