import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  requestOptions: RequestOptions;

  constructor(private http: Http) {
    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    this.requestOptions = new RequestOptions({ headers: headers });
  }

  onClick(): void {
    this.http.get("https://2j162c91nb.execute-api.us-east-1.amazonaws.com/prod/lambda", this.requestOptions).subscribe((response: any) => {
      console.log("Hello");
      console.log(response);
    });
  }

}

