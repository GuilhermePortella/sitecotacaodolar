import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

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