import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import zh from '@angular/common/locales/zh';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@ant-design/icons-angular';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './modules/home/home.component';
import { ResourceModule } from './modules/resource/resource.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './modules/about/about.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    IconModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    ResourceModule
  ],
  providers: [
    {
      provide: NZ_I18N, 
      useValue: zh_CN
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }