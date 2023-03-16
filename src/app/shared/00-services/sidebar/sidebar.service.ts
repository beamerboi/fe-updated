import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  private subject = new Subject<any>();

  sendClickEvent(){
    this.subject.next(true);
  }

  openSideBar(): Observable<any>{
    return this.subject.asObservable();
  }
}
