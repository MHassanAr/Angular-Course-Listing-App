import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private coursesSubject = new BehaviorSubject<any[]>([]);
  courses$ = this.coursesSubject.asObservable();

  constructor() {
    const savedCourses = JSON.parse(localStorage.getItem('courses') || '[]');
    if (savedCourses.length === 0) {
      const defaultCourses = [
        {
          title: 'Intro to Computer Science',
          description: 'Learn the basics of computer science.',
          category: 'Computer Science',
          enrolledStudents: [],
          imageUrl: 'https://example.com/image1.jpg',
        },
        {
          title: 'Business Management',
          description: 'An introduction to business management concepts.',
          category: 'Business',
          enrolledStudents: [],
          imageUrl: 'https://example.com/image2.jpg',
        },
        {
          title: 'Personal Development Skills',
          description: 'Enhance your personal skills for success.',
          category: 'Personal Development',
          enrolledStudents: [],
          imageUrl: 'https://example.com/image3.jpg',
        },
      ];
      localStorage.setItem('courses', JSON.stringify(defaultCourses));
      this.coursesSubject.next(defaultCourses);
    } else {
      this.coursesSubject.next(savedCourses);
    }
  }

  addCourse(course: any): void {
    const currentCourses = this.coursesSubject.getValue();
    currentCourses.push(course);
    this.coursesSubject.next(currentCourses);
    localStorage.setItem('courses', JSON.stringify(currentCourses));
  }

  getCourses() {
    return this.courses$;
  }

  removeCourse(index: number): void {
    const currentCourses = this.coursesSubject.getValue();
    currentCourses.splice(index, 1);
    this.coursesSubject.next(currentCourses);
    localStorage.setItem('courses', JSON.stringify(currentCourses));
  }

  enrollStudent(course: any, student: any) {
    const currentCourses = this.coursesSubject.getValue();
    const courseIndex = currentCourses.findIndex(
      (c) => c.title === course.title
    );
    if (courseIndex !== -1) {
      currentCourses[courseIndex].enrolledStudents.push(student);
      this.coursesSubject.next(currentCourses);
      localStorage.setItem('courses', JSON.stringify(currentCourses));
    }
  }
}
