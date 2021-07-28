import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import { InstagramService } from '../../data.service';
import { forkJoin } from 'rxjs';

interface InstaParam {
  image: string,
  link: string,
}

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.scss']
})

export class InstaComponent implements OnInit {
  orgImages: string[] = [];
  resizeImages: string[] = [];
  links: string[] = [];

  constructor(
    private instaService: InstagramService
  ) {

    this.instaService.getinsta()
      .subscribe((data: InstaParam[]) => {
        this.orgImages = data.map(insta => insta.image);
        this.links = data.map(insta => insta.link);
      });

   }

  ngOnInit(): void {
    // this.instaService.getinsta()
    //   .subscribe((data: InstaParam[]) => {
    //     this.orgImages = data.map(insta => insta.image);
    //     this.links = data.map(insta => insta.link);
    //     // forkJoin([
    //     //   this.orgImages = data.map(insta => insta.image),
    //     //   this.links = data.map(insta => insta.link)
    //     // ]).subscribe(_ => {
    //       // this.resizeInsta();
    //     // });
    //   });

  }
  //-----------------------
  //instaの画像リサイズ
  //-----------------------
  // private resizeInsta() {
  //   for (let imgUrl in this.orgImages) {
  //     //画像サイズから縦向き・横向き判定、テキスト量判定
  //     this.loadImage(imgUrl)
  //       .then(res=> {
  //         const isPortrait = (res["height"] > res["width"])? true:false;
  //       })
  //       .catch(e => {
  //         console.log('ImgOnload error', e);
  //       })
  //   }
  // }

  // private loadImage(path) {
  //   return new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.onload = () => resolve(img);
  //     img.onerror = (e) => reject(e);
  //     img.src = path;
  //   });
  // }
}
