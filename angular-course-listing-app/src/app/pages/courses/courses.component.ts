import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  imports: [CommonModule, FormsModule], // Add FormsModule here
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  filteredCourses: any[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';
  studentName: string = '';
  studentAge: number | null = null;
  studentPhone: string = '';
  selectedCourse: any = null;

  categories = ['Computer Science', 'Business', 'Personal Development'];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any[]) => {
      this.courses = data;
      this.filterCourses();
    });
  }

  filterCourses(): void {
    let filtered = this.courses;

    // Filter by search query
    if (this.searchQuery.trim() !== '') {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Filter by selected category
    if (this.selectedCategory) {
      filtered = filtered.filter(
        (course) => course.category === this.selectedCategory
      );
    }

    this.filteredCourses = filtered;
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.filterCourses();
  }

  enroll(course: any): void {
    this.selectedCourse = course;
  }

  submitEnrollment(): void {
    if (this.studentName && this.studentAge && this.studentPhone) {
      const student = {
        name: this.studentName,
        age: this.studentAge,
        phone: this.studentPhone,
      };

      // Enroll the student
      this.courseService.enrollStudent(this.selectedCourse, student);

      // Clear form fields
      this.studentName = '';
      this.studentAge = null;
      this.studentPhone = '';
      this.selectedCourse = null;
      alert('Enrollment successful!');
    } else {
      alert('Please fill all fields.');
    }
  }

  clearEnrollmentForm(): void {
    this.studentName = '';
    this.studentAge = null;
    this.studentPhone = '';
    this.selectedCourse = null;
  }
}
