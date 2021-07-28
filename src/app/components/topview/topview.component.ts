import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-topview',
  templateUrl: './topview.component.html',
  styleUrls: ['./topview.component.scss']
})
export class TopviewComponent implements OnInit {

  topviewPcURL :string;
  topviewSpURL :string;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getTopviewPC()
    .subscribe(data => {
      this.topviewPcURL = data['topview_pc']['url'] + "?fit=clip&w=1270&h=1270";
    });
    this.dataService.getTopviewSP()
    .subscribe(data => {
      this.topviewSpURL = data['topview_sp']['url'] + "?fit=clip&w=570&h=570";
    });
  }

}
