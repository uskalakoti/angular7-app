import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='Umesh'
  password=''
  errorMessage='Invalid Credentials!!'
  invalidFlag=false
  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleLogin()
  {
    if(this.username=='Umesh' && this.password=='Umesh'){
    this.router.navigate(['welcome',this.username])
    this.invalidFlag=false
    }
    else
    this.invalidFlag=true

    console.log(this.username)
  }


}
