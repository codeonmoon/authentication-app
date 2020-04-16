import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get<User[]>(`/users`);
    }
}