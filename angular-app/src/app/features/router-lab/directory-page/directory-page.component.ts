import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDetail } from '../interface/user-detail';

@Component({
  selector: 'app-directory-page',
  templateUrl: './directory-page.component.html',
  styleUrl: './directory-page.component.scss'
})
export class DirectoryPageComponent implements OnInit {

  constructor(private userService : UserService) {}

  userList? : UserDetail[];
  page : number = 1;

  ngOnInit(): void {
    this.userService.fetchUser().subscribe(
      (res:any) => { this.userList = res }
    )
  }

}
