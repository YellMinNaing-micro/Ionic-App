import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoPagePage } from './todo-page.page';

describe('TodoPagePage', () => {
  let component: TodoPagePage;
  let fixture: ComponentFixture<TodoPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
