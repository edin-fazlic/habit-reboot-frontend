import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnDestroy {

  public formattedTime: string = '';
  private time: number;
  private intervalId: number;

  constructor(private router: Router) {
    this.time = 0;
    this.intervalId = setInterval(() => {
      this.time++;
      this.formattedTime = new Date(this.time * 1000).toISOString().slice(11, 19);
      console.log(this.formattedTime);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }


  navigateFurther() {
    this.router.navigate([
      ''
    ]);
  }
}
