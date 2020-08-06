import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

export const shellRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'main',
        component: MainContentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(shellRoutes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    ShellComponent, 
    MainContentComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
})
export class ShellModule {}
