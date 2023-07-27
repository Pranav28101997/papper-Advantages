import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { Router } from '@angular/router';
import { CONSTANTS } from '../constants/pepper-advantage-constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  showErrorMessage: boolean = false;
  translations: any; // Declare as any to handle dynamic JSON data.

  constructor(
    private formBuilder: FormBuilder,
    private _utilityService: UtilityService,
    private _router: Router
  ) {
    if (
      sessionStorage.getItem('username') &&
      sessionStorage.getItem('password')
    ) {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('password');
    }
  }

  ngOnInit(): void {
    this.getCultures();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  /**
   * @description: will navigate to home page after login credentials are correct
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      this._utilityService.authenticateUser(this.loginForm.value)
        ? this._router.navigateByUrl(CONSTANTS.home)
        : this._utilityService.openSnackBar(
            'Please enter valid Username and Password',
            'close'
          );
    } else {
      this._utilityService.openSnackBar(
        'Please enter valid Username and Password!!!',
        'close'
      );
    }
  }

  /**
   * @description : To get translation cultures from en.json
   */
  getCultures(): void {
    this._utilityService.getTranslations().subscribe((data: any) => {
      this.translations = data;
    });
  }
}
