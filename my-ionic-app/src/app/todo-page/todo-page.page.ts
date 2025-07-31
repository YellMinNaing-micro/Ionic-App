import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon, // Added: for ion-icon
  IonContent,
  IonItem,  // Added: for ion-item
  IonInput, // Added: for ion-input
  IonButton, // Added: for ion-button
  IonLabel  // Added: for ion-label
} from '@ionic/angular/standalone';
import { Router } from "@angular/router";


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.page.html',
  styleUrls: ['./todo-page.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
    FormsModule,
    CommonModule,
  ],
})
export class TodoPagePage {

  newTask = '';
  tasks: { title: string; completed: boolean }[] = [
    // Pre-populate tasks to match the image
    { title: 'Working call', completed: false },
    { title: 'Meet with doctor', completed: false },
    { title: 'Go to the shop', completed: true },
    { title: 'Take the kids to school', completed: true },
    { title: 'Finish mobile mockups', completed: false },
    { title: 'Walk with dog', completed: false },
  ];

  private router = inject(Router);
  constructor() {
    // If addIcons were needed for specific icons, it would go here or in main.ts
    // addIcons({ gridOutline, add, checkmarkCircleSharp });
  }

  addTask() {
    if (this.newTask.trim()) {
      // Add new task to the top of the list
      this.tasks.unshift({ title: this.newTask.trim(), completed: false });
      this.newTask = ''; // Clear input field
    }
  }

  logout() {
    console.log('Navigating to Login page...');
    this.router.navigateByUrl('/'); // Navigate to the login page route
  }
}
