import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isMinimized = false;

  toggleMenu() {
    this.isMinimized = !this.isMinimized;
  }

}
