import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.less']
})
export class VueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(333)
  }

}
