import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-interested-jobs-board',
  templateUrl: './interested-jobs-board.component.html',
  styleUrl: './interested-jobs-board.component.scss'
})
export class InterestedJobsBoardComponent implements OnInit {

  constructor(private jobservice : JobsService) {}

  jobList : string[] = [];
  isInterestedJob : boolean = true

  ngOnInit(): void {
    this.jobservice.jobIdAdd.subscribe(
      (res:string) => { 
        if (!this.jobList.includes(res)) {
          this.jobList.push(res) 
        }
      }
    )

    this.jobservice.jobIdDelete.subscribe(
      (res:string) => { 
        if (this.jobList.includes(res)) {
          this.jobList = this.jobList.filter((item) => {return item != res})
        }
      }
    )
  }

}
