import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ResourceRoutingModule } from './resource-routing.module';
import { VueComponent } from './pages/vue/vue.component';
import { AngularComponent } from './pages/angular/angular.component';
import { ReactComponent } from './pages/react/react.component';
import { ToolsComponent } from './pages/tools/tools.component';
@NgModule({
  declarations: [VueComponent, AngularComponent, ReactComponent, ToolsComponent],
  imports: [
    ResourceRoutingModule,
  ]
})
export class ResourceModule { }
