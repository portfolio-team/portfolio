import { Component, ViewChild,ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import { DataService } from '../../data.service';
import { WorkTemplate1Component } from '../works/work-template1/work-template1.component';
import { WorkTemplate2Component } from '../works/work-template2/work-template2.component';
import { WorkTemplate3Component } from '../works/work-template3/work-template3.component';

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
  factory1: ComponentFactory<WorkTemplate1Component>;
  factory2: ComponentFactory<WorkTemplate2Component>;
  factory3: ComponentFactory<WorkTemplate3Component>;

  workImgList:string[]=[];
  constructor(
    private dataService: DataService,
    public viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.dataService.getWorks()
    .subscribe(data => {
      this.factory1 = this.resolver.resolveComponentFactory(WorkTemplate1Component);
      this.factory2 = this.resolver.resolveComponentFactory(WorkTemplate2Component);
      this.factory3 = this.resolver.resolveComponentFactory(WorkTemplate3Component);
      this.getWorkContent(data['contents']);
    });

  }
  //-----------------------
  //worksのコンテンツDOM作成
  //-----------------------
  getWorkContent(worksData): void{
    let worksList:workParam[]=[];
    for(let i = 1; i < worksData.length + 1; i++){
      //順番(works_num)が一致するworkを取り出す
      let work = worksData.filter(work => {
        return ((work.works_num) === i);
      });
      let src = work[0].works_img.url;
      worksList.push(work);
      this.workImgList.push(src);
    }
    this.renderWorks(worksList);
  }

  async renderWorks(worksList) {
    for (let work of worksList) {
      let src = work[0].works_img.url;
      //画像サイズから縦向き・横向き判定、テキスト量判定
      await this.loadImage(src)
      .then(res=> {
        let portrait = (res["height"] > res["width"])? true:false;
        if(portrait){
          const ref = this.viewContainerRef.createComponent(this.factory1);
          (ref.instance as WorkTemplate1Component).work = work[0];
        }
        else if(work[0].works_text.length > 560){
          const ref = this.viewContainerRef.createComponent(this.factory2);
          (ref.instance as WorkTemplate2Component).work = work[0];
        }
        else{
          const ref = this.viewContainerRef.createComponent(this.factory3);
          (ref.instance as WorkTemplate3Component).work = work[0];
        }
      })
      .catch(e => {
        console.log('ImgOnload error', e);
      })
    }
  }

  loadImage(path) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = path;
    });
  }
}
