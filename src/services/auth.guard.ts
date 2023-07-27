import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _utilityService: UtilityService
  ) {}
  /**
   * @description : To Check and Authenticate User and Navigate User back to login page
   * @param route :ActivatedRouteSnapshot
   * @param state :RouterStateSnapshot
   * @returns Boolean
   */
  canActivate(): boolean {
    if (
      sessionStorage.getItem('username') &&
      sessionStorage.getItem('password')
    ) {
      return true;
    } else {
      this._router.navigateByUrl('login');
      this._utilityService.openSnackBar(
        'Please login to proceed further',
        'close'
      );
      return false;
    }
  }
}
