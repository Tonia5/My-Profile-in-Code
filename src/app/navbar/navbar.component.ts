import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PieceOfMyWorkComponent } from '../piece-of-my-work/piece-of-my-work.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,HomeComponent,PieceOfMyWorkComponent,AboutMeComponent,ContactMeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
