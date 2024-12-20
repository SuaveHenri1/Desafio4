import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: '<router-outlet></router-outlet><app-navbar></app-navbar>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-4';
}
