import { Component, OnInit,Input } from '@angular/core';

interface workParam {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  works_img: {[key:string]:string};
  works_text: string;
  works_num: number;
}

@Component({
  selector: 'app-work-template1',
  templateUrl: './work-template1.component.html',
  styleUrls: ['./work-template1.component.scss']
})
export class WorkTemplate1Component implements OnInit {
  @Input() work:any
  constructor() { }

  ngOnInit(): void {
  }

}
