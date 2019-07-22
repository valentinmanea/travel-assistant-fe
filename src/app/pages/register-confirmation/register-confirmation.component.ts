import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.css']
})
export class RegisterConfirmationComponent implements OnInit {
  token ='';
  message='';
  constructor(private route: ActivatedRoute, private accountService:AccountService) { }

  ngOnInit() {
    this.route.params.subscribe((response) => this.token = response['token']);
    this.confirmAccount();
  }

  confirmAccount(){
    this.accountService.confirmAccount(this.token).subscribe(response=>{
      if(response == 'Success'){
        this.message = 'Your account has been confirmed...';
        toastr.success(response);
      }else{
        toastr.error(response);
      }
      
    });
  }

}
