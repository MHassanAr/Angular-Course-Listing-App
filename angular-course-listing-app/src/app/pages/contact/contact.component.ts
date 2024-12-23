import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, CommonModule],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  successMessage: string | null = null;

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      return;
    }

    // Display success message
    this.successMessage = 'Form submitted successfully!';

    // Reset the form values and validation state
    contactForm.resetForm();

    // Clear the success message after 5 seconds
    setTimeout(() => {
      this.successMessage = null;
    }, 5000);
  }
}