import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { JobDetail } from './job-detail';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  private jobUrl = "https://hacker-news.firebaseio.com/v0/jobstories.json"
  private jobDetail = "https://hacker-news.firebaseio.com/v0/item/"

  jobIdAdd = new Subject<string>()
  jobIdDelete = new Subject<string>()

  fetchJobsIds() : Observable<number[]> {
    return this.http.get<number[]>(this.jobUrl)
  }

  fetchJob(id: string ) : Observable<JobDetail> {
    return this.http.get<JobDetail>(this.jobDetail + id + ".json")
  }

  sendJobId(id: string) : void {
    this.jobIdAdd.next(id);
  }

  deleteJobId(id: string) : void {
    this.jobIdDelete.next(id);
  }

}
