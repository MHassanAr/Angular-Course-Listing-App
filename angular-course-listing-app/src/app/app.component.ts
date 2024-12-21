import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'web-proj';

  constructor(private router: Router) {}

  ngOnInit() {
    // clear login status if navigating to public pages
    this.router.events.subscribe(() => {
      if (
        this.router.url === '/' ||
        this.router.url === '/about' ||
        this.router.url === '/courses' ||
        this.router.url === '/contact'
      ) {
        localStorage.setItem('isLoggedIn', 'false'); // Clear login status
      }
    });
  }
}
