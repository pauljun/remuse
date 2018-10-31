import { Component, OnInit } from '@angular/core';
import { HomeFill } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private iconService: NzIconService) { 
    this.iconService.addIcon(HomeFill);
  }

  ngOnInit() {
  }

}
