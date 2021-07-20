import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { authService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private authService: authService) {}
  canActivate(): boolean {
    if (this.authService.getUser()) {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
