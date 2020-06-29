import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getStart():void{
    this.router.navigate(['/getstart']);
  }
}
