import { Routes } from '@angular/router';
import { PieceOfMyWorkComponent } from './piece-of-my-work/piece-of-my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';

export const routes: Routes = [

    { path: 'pieceOfmyWork', component: PieceOfMyWorkComponent },
    { path: 'aboutme', component: AboutMeComponent },
    { path: 'contactme', component: ContactMeComponent },
    
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: FileNotFoundComponent },
    

];
