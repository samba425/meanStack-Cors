import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from
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

  
  test() {
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', 'Basic dummy');
    this.httpClient.request('POST', `${this.url}/{{ur external url}}`, { headers })
    .subscribe(res => {
      console.log('response',res)
    })
  }

}
