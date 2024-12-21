import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AdminComponent implements OnInit {
  newCourse: any = { title: '', description: '', category: '', imageUrl: '' };
  courses: any[] = [];
  errorMessage: string = '';

  categories = ['Computer Science', 'Business', 'Personal Development'];

  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Subscribe to the courses observable and update the courses array dynamically
    this.courseService.courses$.subscribe((data) => {
      this.courses = data;
    });
  }

  addCourse() {
    if (
      !this.newCourse.title ||
      !this.newCourse.description ||
      !this.newCourse.category
    ) {
      this.errorMessage = 'Please fill all fields.';
      return;
    }

    // Add the new course using the service
    this.courseService.addCourse(this.newCourse);

    // Reset the form
    this.newCourse = { title: '', description: '', category: '', imageUrl: '' };
  }

  removeCourse(index: number) {
    // Remove the course using the service
    this.courseService.removeCourse(index);
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newCourse.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
