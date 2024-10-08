import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private _router :Router)
  {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(childRoute, state);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if(!localStorage.getItem("accessToken")){
      this._router.navigateByUrl("/Login");
      return false;
    }
    return true;
  }
  
}
