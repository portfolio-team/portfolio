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
    this.dataService.getTopview()
    .subscribe(data => {
      this.topviewPcURL = data['contents'][0]['topview_pc']['url'];
      this.topviewSpURL = data['contents'][0]['topview_sp']['url'];
    });
  }

}
