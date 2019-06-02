import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.fragment) {
      this.authService.setJWTCredentials(this.route.snapshot.fragment.split('&')[0].split('=')[1])
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.authService.getMSWebToken();
  }
}
