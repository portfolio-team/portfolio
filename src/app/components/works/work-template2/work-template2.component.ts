import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-work-template2',
  templateUrl: './work-template2.component.html',
  styleUrls: ['./work-template2.component.scss']
})
export class WorkTemplate2Component implements OnInit {
  @Input() work:any
  constructor() { }

  ngOnInit(): void {
  }

}
