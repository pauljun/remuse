import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NotFindPageComponent } from './components/not-find-page/not-find-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        NotFindPageComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        HeaderComponent,
    ],
    entryComponents: [
        
    ]
})
export class SharedModule {

}