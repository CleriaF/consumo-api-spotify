import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  {
    path: 'albums',
    loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
