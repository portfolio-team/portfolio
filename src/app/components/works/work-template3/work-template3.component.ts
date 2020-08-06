import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-work-template3',
  templateUrl: './work-template3.component.html',
  styleUrls: ['./work-template3.component.scss']
})
export class WorkTemplate3Component implements OnInit {
  @Input() work:any
  constructor() { }

  ngOnInit(): void {
  }

}
