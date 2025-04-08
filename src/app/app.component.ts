import { Component } from '@angular/core';
import { OtpService } from './services/otp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-k';

   phoneNumber: string = '';
    enteredOtp: Number = 0;
    otpSent: boolean = false;
    verificationMessage: string = '';
  store:number=0;
    constructor(private otpService: OtpService) {}
    otp(){
      this.otpService.generateOtp().subscribe(
        (data:any)=>{
          this.store = data;
         alert(this.store);
        },
        (error:any)=>{
          console.error('Error generating OTP:', error);
        }
      );
    }
 
  sendOtp() {
    if (this.phoneNumber) {
      this.otpSent = true;
      // alert(this.store);
      this.verificationMessage = 'OTP sent to ' + this.phoneNumber;
      this.otp();
    } else {
      alert('Please enter a valid phone number.');
    }
  }

verifyOtp(){
  if(this.store == (this.enteredOtp)){
    alert('OTP verified successfully!')
    }else{
      alert('Invalid OTP. Please try again.');
    }
  

}
  
}
