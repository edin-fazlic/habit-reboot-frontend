import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Log} from '../../models/log.model';
import {ResolverProperty} from '../../constants/resolver-property.enum';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit, OnDestroy {

  public logs!: Log[];
  public displayedColumns: string[] | undefined;
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['time', 'reason'];
    this.unsubscribe = this.activatedRoute.data.subscribe((data) => {
      this.logs = data[ResolverProperty.LOGS];
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }
}
