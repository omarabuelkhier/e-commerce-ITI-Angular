import { Component,Input } from '@angular/core';
import { NgbRatingConfig,NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
  providers: [NgbRatingModule],
  styles:`
ngb-rating{
  color:gold
}
  `
})
export class StarsComponent {
  tappedStar:any;
  starConfig:any;
constructor(config:NgbRatingConfig) {
		config.max = 5;
this.starConfig=config;
	}
    @Input () rating:number = 0;


    ngOnInit(){
    // console.log(this.rating);
    }
}
