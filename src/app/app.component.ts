import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiId = 'ivewn9r2vl'
const baseUrl = `http://localhost:4566/restapis/${apiId}/dev/_user_request_/`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  newSubAccount() {
    this.http.post<any>(
      baseUrl + 'account',
      { accountTable: 'PARENT_ACCOUNT', coreAccountId: 'burgerstand' },
      ).subscribe((data: any) => {
        console.log(data);
    })
  }
}
