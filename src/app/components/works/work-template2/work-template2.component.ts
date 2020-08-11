import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-work-template2',
  templateUrl: './work-template2.component.html',
  styleUrls: ['./work-template2.component.scss']
})
export class WorkTemplate2Component implements OnInit {
  @Input() work:any
  initialChar:String;
  mainText:String;

  constructor() { }

  ngOnInit(): void {
    this.initialChar = this.work.works_text.substr(0,1);
    this.mainText = this.work.works_text.slice(1);
  }

}
