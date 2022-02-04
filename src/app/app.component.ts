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
  constructor(private httpClient: HttpClient) {
    this.httpClient.get(`${this.url}/https://app-api-user-bff-centralus-dev-001.azurewebsites.net/api/states`)
      .subscribe((data) => console.log(data));
  }
}
