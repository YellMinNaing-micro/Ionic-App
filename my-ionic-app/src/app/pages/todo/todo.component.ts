import { Component, inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  imports: [
    IonicModule, // IonicModule imports all necessary Ionic components
    FormsModule,
    CommonModule,

  ],
})
export class TodoComponent {
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
