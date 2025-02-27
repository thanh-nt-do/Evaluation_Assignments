import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { JobDetail } from '../job-detail';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-jobs-board',
  templateUrl: './jobs-board.component.html',
  styleUrl: './jobs-board.component.scss'
})
export class JobsBoardComponent implements OnInit {
  jobIdList? : number[]
  job? : JobDetail
  jobDisplayList? : number[]
  limit : number = 6
  isInterestedJob : boolean = false
    
  constructor(private jobservice: JobsService) {}

  ngOnInit(): void {
    this.jobservice.fetchJobsIds().subscribe(
      (res:number[]) => {
        this.jobIdList = res;
        this.jobDisplayList = this.jobIdList.slice(0,6)
      }
    )
  }

  loadMoreJobs() : void {
    this.limit += 6
    this.jobDisplayList = this.jobIdList?.slice(0, this.limit)
  }

}
