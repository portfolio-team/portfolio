import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Direct } from 'protractor/built/driverProviders';

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
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {

  worksList:workParam[];
  worksNum:number;
  workImgList:string[];
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getWorks()
    .subscribe(data => {
      this.worksList = data['contents'];
      this.worksNum = data['totalCount'];
      this.workImgList = this.worksList.map(work => work.works_img.url);
    });

  }

}
