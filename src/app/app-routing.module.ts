import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsContentComponent } from './cards-content/cards-content.component';
import { CardsComponent } from './shared/cards/cards.component';
import { FavoritesComponent } from './shared/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: CardsContentComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
