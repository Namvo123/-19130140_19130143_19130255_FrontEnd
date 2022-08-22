import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";
import {News} from "../../models/news";

// declare const myTest:any;
// import * as $ from "jquery";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titleSlider = {items: 1, dots: true, nav: true};
  //mảng cho db.xml
  news: News[] = []; //tạo 1 mảng news rỗng
  //mảng cho db2.xml
  newsCategory2: News[] = [];
  //mảng cho db3.xml
  newsCategory3: News[] = [];
  //mảng cho db4.xml
  newsCategory4: News[] = [];

  //lưu mảng cho cái bảng ở dưới gần cuối bên trái
  numberMiddle1: number = 0;
  middleNew1: News[] = [];

  //lưu mảng cho cái bảng ở dưới gần cuối bên phải
  numberMiddle2: number = 0;
  middleNew2: News[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.loadCategory1();
    this.loadCategory2();
    this.loadCategory3();
    this.loadCategory4();
  }

  //load db.xml de bo vao mang
  loadCategory1() {
    const url = "assets/db.xml";
    fetch(url)
      .then(Response => Response.text())
      .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");

        this.news = this.newsService.getNews(xml);
        this.middleNew1 = this.newsService.getNews(xml).slice(0, 3);//moi vao thi tao ra mang middle truoc tu 0 - 3

        // console.log(this.news);
      });
  }

  //load db2.xml để lấy dữ liệu bỏ vào mảng
  loadCategory2() {
    const url = "assets/db2.xml";
    fetch(url)
      .then(Response => Response.text())
      .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");

        this.newsCategory2 = this.newsService.getNews(xml);
        this.middleNew2 = this.newsService.getNews(xml).slice(0, 3);//moi vao thi tao ra mang middle truoc tu 0 - 3

        // console.log(this.news);
      });
  }

  //load db3.xml để lấy dữ liệu bỏ vào mảng
  loadCategory3() {
    const url = "assets/db3.xml";
    fetch(url)
      .then(Response => Response.text())
      .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");

        this.newsCategory3 = this.newsService.getNews(xml);

        // console.log(this.newsCategory3);
      });
  }
  //load db4.xml để lấy dữ liệu bỏ vào mảng
  loadCategory4() {
    const url = "assets/db4.xml";
    fetch(url)
      .then(Response => Response.text())
      .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");

        this.newsCategory4 = this.newsService.getNews(xml);

        console.log(this.newsCategory4);
      });
  }

  //event để thay đổi bảng sau mỗi lần nhấn nút khác trên bảng ở gần cuối bên trái
  middleNews1(i: number) {
    const url = "assets/db.xml";
    fetch(url)
      .then(Response => Response.text())
      .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");

        this.middleNew1 = this.newsService.getNews(xml).slice(i, i + 3);
        this.numberMiddle1 = i;
        console.log(this.middleNew1);
      });
  }

  //event để thay đổi bảng sau mỗi lần nhấn nút khác trên bảng ở gần cuối bên phải
  middleNews2(i: number) {
    const url = "assets/db2.xml";
    fetch(url)
      .then(Response => Response.text())
      .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");

        this.middleNew2 = this.newsService.getNews(xml).slice(i, i + 3);
        this.numberMiddle2 = i;
        console.log(this.middleNew2);
      });
  }
}
