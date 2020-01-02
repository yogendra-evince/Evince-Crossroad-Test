import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: RepoDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];
/**
 *
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
