import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component'
import { LoginFormComponent } from './components/login-form/login-form.component'

export const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'feed', component: FeedComponent}
];
