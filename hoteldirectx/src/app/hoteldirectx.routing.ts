import { HoteldirectxHomeComponent } from './components/hoteldirectx-home/hoteldirectx-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HoteldirectxHomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class HotelDirectXRouting { }
