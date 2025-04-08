import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OtpService {
   generatedOtp: number = 0;

  constructor(private http: HttpClient) {}

  generateOtp():Observable<Number> {
    this.generatedOtp = parseInt(Math.floor(100000 + Math.random() * 900000).toString()); // 6-digit OTP
    return of(this.generatedOtp);
     
  }
  verifyOtp(enteredOtp: string): boolean {
    return parseInt(enteredOtp, 10) === this.generatedOtp;
  }
}
