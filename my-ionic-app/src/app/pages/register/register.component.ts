import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule,
  ]
})
export class RegisterComponent{

  fullName = '';
  username = ''; // For email
  password = '';
  errorMsg: string | null = null;
  agreeTerms: boolean = false;

  private router = inject(Router);

  register() {
    if (!this.fullName || !this.username || !this.password) {
      this.errorMsg = 'Please fill in all fields.';
      return;
    }

    if (!this.agreeTerms) {
      this.errorMsg = "You must agree to the terms & conditions.";
      return;
    }

    this.errorMsg = null; // Clear previous errors
    localStorage.setItem('user', this.username);
    localStorage.setItem('pass', this.password);
    this.router.navigateByUrl('/');
  }

  goToLogin() {
    console.log('Navigating to Login page...');
    this.router.navigateByUrl('/'); // Navigate to the login page route
  }

}
