import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute ) { }


  ngOnInit(): void {
  }

  creatorsOption(): void {
    this.router.navigate(['creators'])
  }

  newsOption(): void {
    this.router.navigate(['news'])
  }

  cancel(): void {
    this.router.navigate(['home'])
  }

}