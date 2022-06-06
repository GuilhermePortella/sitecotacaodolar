import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  creatorsOption(): void {
    this.router.navigate(['creators'])
  }

  newsOption(): void {
    this.router.navigate(['news'])
  }

  home(): void {
    this.router.navigate(['home'])
  }

}
