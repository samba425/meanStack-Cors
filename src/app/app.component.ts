import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
  '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStore';
  url = environment.apiUrl;
  success;
  error;
  constructor(private httpClient: HttpClient) { 
  }

  getUser() {
    let user = {
      'username': 'first1l896fie@frizzmo-user.com',
      'password': 'ironman01'
    }
    this.httpClient.post(`${this.url}/https://app-api-user-bff-centralus-dev-001.azurewebsites.net/api/auth/signUp`, user)
      .subscribe((data) => {
        this.success = data;
        this.error = undefined;
      }, error => {
        this.error = (error && error['error']) ? error['error'] : error;
        this.success = undefined
      });
  }
  getStates() {
    this.httpClient.get(`${this.url}/https://app-apsi-user-bff-centralus-dev-001.azurewebsites.net/api/states`)
      .subscribe((data) => {
        this.success = data;
        this.error = undefined;
      }, error => {
        alert(1)
        this.error = error;
        this.success = undefined
      });
  }
  signUp() {
    let signUpPayload = {
      'firstname': 'first1',
      'lastname': 'last1',
      'middlename': 'middle1',
      'emailAddress': 'correct1@gmail.com',
      'phoneNumber': '1',
      'password': 'abcdefgh',
      'deviceType': 'MOBILE',
      'deviceId': 'sam1',
      'isPrimary': true
    }
    this.httpClient.post(`${this.url}/https://app-api-user-bff-centralus-dev-001.azurewebsites.net/api/auth/signUp`, signUpPayload)
      .subscribe((data) => {
        this.success = data;
        this.error = undefined;
      }, error => {
        this.error = (error && error['error']) ? error['error'] : error;
        this.success = undefined
      });
  }
}
