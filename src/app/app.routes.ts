import { Routes } from '@angular/router';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';

export const routes: Routes = [
  // Lista Crisis
  { path: 'crisis', component: CrisisListComponent },

  // Lista Heroes
  { path: 'heroes', component: HeroListComponent },

  // Detalle de heroe
  { path: 'hero/:id', component: HeroDetailComponent },

  // Detalle de Crisis
  { path: 'crisis/:id', component: CrisisDetailComponent },

  // Redirección
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },

  // Ruta errores
  { path: '**', component: PageNotFoundComponent }
];