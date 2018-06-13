import { Component, OnInit } from '@angular/core';
import { GetRandomUserService } from '../../network/get-random-user.service';
import { RandomUser } from '../../models/randomUser';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.css'],
  providers: [GetRandomUserService]
})
export class MiniProfileComponent implements OnInit {
  user: RandomUser;

  placeholderImageSRC = 'https://randomuser.me/api/portraits/thumb/men/83.jpg';
  constructor(randomUserService: GetRandomUserService
  ) {
    this.user = JSON.parse(window.localStorage.getItem('randomUser'));

    randomUserService.getRandomUser()
      .subscribe((data: any) => {
        console.log(data);

        this.user = data.results[0];
        window.localStorage.setItem('randomUser', JSON.stringify(this.user));
      });
  }

  ngOnInit() {

  }

}
