import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  trendingCourses = [
    {
      title: 'Introduction to AI',
      imageUrl: 'assets/ai.jpeg',
    },
    {
      title: 'Business Strategies',
      imageUrl: 'assets/business.jpeg',
    },
    {
      title: 'Personal Development',
      imageUrl: 'assets/pd.jpeg',
    },
    {
      title: 'Robotics Engineering',
      imageUrl: 'assets/rob.jpeg',
    },
    {
      title: 'Machenical Engineering',
      imageUrl: 'assets/mech.jpeg',
    },
    {
      title: 'Data Science',
      imageUrl: 'assets/ds.jpeg',
    },
  ];

  reviews = [
    {
      name: 'John Doe',
      feedback: 'This platform transformed my career! Highly recommended.',
    },
    {
      name: 'Jane Smith',
      feedback: 'Loved the courses! Very insightful and easy to follow.',
    },
    {
      name: 'Alex Johnson',
      feedback: 'Great community and amazing resources.',
    },
  ];

  constructor(private router: Router) {}

  navigateToCourses() {
    this.router.navigate(['/courses']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
