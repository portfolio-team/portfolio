import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-topview',
  templateUrl: './topview.component.html',
  styleUrls: ['./topview.component.scss']
})
export class TopviewComponent implements OnInit {

  topviewURL :string;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getTopview()
    .subscribe(data => {
      this.topviewURL = data['contents'][0]['topview-image']['url'];
    });
  }

}
