import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private ofset: number = 300;
  private startPos: number = 0;
  public headerPos: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
  }
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event) {
  //   let currentPos = this.document.body.scrollTop;
  //   console.log(currentPos)
  //   if(currentPos > this.startPos) {
  //     if(this.document.body.scrollTop >= this.ofset) {
  //       console.log("aaaa")
  //       this.headerPos = -this.ofset;
  //     }
  //   } else {
  //     this.headerPos = 0;
  //   }
  //   this.startPos = currentPos;
  // }

}
