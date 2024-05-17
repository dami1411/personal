import { Component } from '@angular/core';
import { NavbarComponent } from '../../@component/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../@component/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
