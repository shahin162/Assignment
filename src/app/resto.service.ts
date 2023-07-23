import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/auction";
  rurl="http://localhost:3000/";
  constructor(private http:HttpClient) { }
     getlist(){
      return this.http.get(this.url);
  }
  postlist(data:any){
    // console.log(data);
    return this.http.post(this.url,data);
  }
  deleterestodata(id:any){
    return this.http.delete(`${this.url}/${id}`)
  } 
  getCurdata(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  getupdarevalue(id:any,data: any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  registervalue(data:any){
   return this.http.post(this.rurl+"users",data);
  }
  loginlist(data:any){
    return this.http.get(this.rurl+"users",data);
  }
  getItems(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  updateItem(id: number, itemData: any): Observable<any> {
    const updateUrl = `${this.url}/${id}`;
    return this.http.put<any>(updateUrl, itemData);
  }
}
