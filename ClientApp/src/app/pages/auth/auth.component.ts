import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }
  
  public logedIn;

  ngOnInit() {
    if (this.route.snapshot.queryParams['code']) {
      this.logedIn = true;
      this.authService.getApiToken(this.route.snapshot.queryParams);
    }
  }

  login() {
    console.log(this.authService.getMSAuthTokenURL());
    // window.location.href = this.authService.getMSAuthTokenURL();
  }
}
