import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VueComponent } from './pages/vue/vue.component';
// import routes from './router';
const AppRoutes:Routes = [
  {
      path: '',
      component: VueComponent,
      pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ResourceRoutingModule { }
