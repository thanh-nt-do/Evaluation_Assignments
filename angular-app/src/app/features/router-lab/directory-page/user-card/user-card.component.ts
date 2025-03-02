import { Component, Input } from '@angular/core';
import { UserDetail } from '../../interface/user-detail';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user! : UserDetail

  
}
