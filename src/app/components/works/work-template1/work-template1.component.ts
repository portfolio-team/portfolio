import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-work-template1',
  templateUrl: './work-template1.component.html',
  styleUrls: ['./work-template1.component.scss']
})
export class WorkTemplate1Component implements OnInit {
  @Input() work:any

  firstText:string;
  secondText:string;

  constructor() { }

  ngOnInit(): void {
    let fullLen = this.work.works_text.length;
    let halfText = this.work.works_text.substr(0,Math.round(fullLen/2));
    let splitLen = halfText.lastIndexOf(" ");
    this.firstText = this.work.works_text.substr(0,splitLen);
    this.secondText = this.work.works_text.slice(splitLen+1);
  }

}
