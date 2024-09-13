import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
  getById(id: string |null): Observable<User> {
    return this.http.get<User>(this.baseUrl + "/" + id);
  }
  updateById(id: string, user: User) {
    return this.http.put<User>(this.baseUrl + "/" + id, user);
  } 
  deleteById(id: string):Observable<void> {
    console.log(id);
    return this.http.delete<void>(this.baseUrl + "/" + id);
  }
}
