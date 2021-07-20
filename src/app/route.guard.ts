import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { authService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(private route: Router, private authService: authService) {}
  canActivate(): boolean {
    if (this.authService.getUser()) {
      this.route.navigate(['/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}
