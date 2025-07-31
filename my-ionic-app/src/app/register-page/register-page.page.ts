import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	IonButton,
	IonCheckbox,
	IonContent,
	IonHeader,
	IonInput,
	IonItem, IonLabel,
	IonText,
	IonTitle,
	IonToolbar
} from '@ionic/angular/standalone';
import { Router } from "@angular/router";

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.page.html',
	styleUrls: ['./register-page.page.scss'],
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		// List all individual Ionic components used in the template
		IonContent,
		IonItem,
		IonInput,
		IonText,
		IonButton,
		IonCheckbox,
		IonLabel,
		// Do NOT include IonicModule here for standalone components
	]
})
export class RegisterPagePage {
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
