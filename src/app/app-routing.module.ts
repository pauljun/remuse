import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
// import routes from './router';
const AppRoutes: Routes = [
    {
        path: 'resource',
        loadChildren: './modules/resource/resource.module',
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
    },
    {
        path: '404',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: `/404`
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
