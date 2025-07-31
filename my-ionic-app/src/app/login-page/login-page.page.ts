import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem, // Make sure to import IonItem
  IonInput, // Make sure to import IonInput
  IonText,  // Make sure to import IonText
  IonButton, IonIcon // Make sure to import IonButton
} from '@ionic/angular/standalone'; // Correctly import individual components
import { Router } from "@angular/router";
// import { IonicModule } from "@ionic/angular"; // <--- REMOVE THIS LINE

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonText,
    IonButton,
    CommonModule,
    FormsModule,
  ]
})
export class LoginPagePage {

  username = '';
  password = '';
  errorMsg = '';

  private router = inject(Router);

  login() {
    const savedUser = localStorage.getItem('user');
    const savedPass = localStorage.getItem('pass');

    if (
        (this.username === 'user' && this.password === 'Password@123') ||
        (this.username === savedUser && this.password === savedPass)
    ) {
      this.router.navigateByUrl('/todo');
    } else {
      this.errorMsg = 'Invalid credentials';
    }
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}