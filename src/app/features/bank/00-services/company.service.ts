import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private getCompaniesURL =  "http://localhost:3000/companies"
  private updateCompanysURL =  "http://localhost:3000/companies"
  private deleteCompanyURL =  "http://localhost:3000/companies"

  constructor(private http: HttpClient) { }

  getAllCompanies() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.getCompaniesURL, {headers: headers})
        .pipe(map(result => result))
  }
  deleteCompany(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(`${this.deleteCompanyURL}/${id}`)
        .pipe(map(result => result));
  }
}
