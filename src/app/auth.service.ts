import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private route: Router) {}

  getData(): [{ [key: string]: string }] {
    let data = JSON.parse(localStorage.getItem('userData'));
    return data ?? [];
  }
  getEmail(email: string): { [key: string]: string } {
    const jsonData = this.getData();
    return jsonData.find((data) => data.email == email);
  }
  checkLogin(userData: { [key: string]: string }): void {
    const jsonData = this.getData();
    let getUser = {};

    getUser = jsonData.find(
      (data) =>
        data.email == userData.email && data.password == userData.password
    );
    if (!getUser) {
      alert('invalid Email or Password');
    } else {
      const data = {
        id: getUser['id'],
        email: getUser['email'],
        password: getUser['password'],
      };
      localStorage.setItem('currentLogin', JSON.stringify(data));
    }
  }
  uudId(): string {
    return 'xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      let r = (Math.random() * 6) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(6);
    });
  }
  register(userData: { [key: string]: string }): any {
    const getMail = this.getEmail(userData.email);
    if (getMail) {
      alert('Email id already exist !!');
    } else {
      const jsonData = this.getData();
      const data = {
        id: this.uudId(),
        email: userData.email,
        password: userData.password,
      };
      jsonData.push(data);
      localStorage.setItem('userData', JSON.stringify(jsonData));
      return true;
    }
  }
  getUser(): [{ [key: string]: string }] {
    return JSON.parse(localStorage.getItem('currentLogin'));
  }

  logout(): void {
    localStorage.removeItem('currentLogin');
    this.route.navigate(['/login']);
  }
}
