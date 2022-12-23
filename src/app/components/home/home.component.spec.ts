import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReCaptchaV3Service } from '@angular-google-recaptcha/ngx-captcha';

import { HomeComponent } from './home.component';

export class LoginComponent {
  constructor(private captchaV3Service: ReCaptchaV3Service) { }

  onSubmit(form: NgForm) {
    this.captchaV3Service.execute('login')
      .subscribe((token) => {
        // Envie o token, o nome de usuário e a senha para o seu servidor
        // e verifique se a resposta do ReCaptcha é válida
      });
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
