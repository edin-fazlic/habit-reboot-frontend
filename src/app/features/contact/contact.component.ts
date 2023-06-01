import {Component, OnDestroy, OnInit} from '@angular/core';
import {BugReportService} from '../../services/bug-report.service';
import {BugReport} from '../../models/bug-report.model';
import {ResolverProperty} from '../../constants/resolver-property.enum';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  public bugReports: BugReport[] = [];
  public bugReport: BugReport | undefined;
  public displayedColumns: string[] = [];
  public imagePath: SafeUrl | undefined;
  private unsubscribe: Subscription[] = [];

  constructor(private bugReportService: BugReportService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['title', 'description', 'action'];
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.bugReports = data[ResolverProperty.BUG_REPORTS];
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  public fileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      const fileName = file.name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);

        const bugReport:BugReport = {
          title: fileName,
          image: reader.result as string,
        }
        this.bugReportService.sendScreenshot(bugReport).subscribe(() => {
          console.log('screenshot uploaded');
        });
      };
    }
  }

  public showImage(id:number):void {
    this.bugReportService.getBugReport(id).subscribe(bugReport => {
      this.bugReport = bugReport;
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(bugReport.image);
    });
  }
}
