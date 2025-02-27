import { Component, Input, OnInit } from '@angular/core';
import { JobDetail } from '../job-detail';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent implements OnInit {
  
  @Input() jobId! : string;
  @Input() isInterested! : boolean

  job : JobDetail = {
    title: '',
    by: '',
    time: 0
  }

  constructor(private jobservice: JobsService) {}


  ngOnInit(): void {
    this.jobservice.fetchJob(this.jobId).subscribe(
      (res:JobDetail) => { this.job = res}
    )
  }

  sendJobId() : void {
    this.jobservice.sendJobId(this.jobId.toString())
  }

  deleteJobId() : void {
    this.jobservice.deleteJobId(this.jobId.toString())
  }
}
