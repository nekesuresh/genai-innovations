import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: spy },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation if the user is authenticated', () => {
    // Simulate an authenticated user
    spyOn(localStorage, 'getItem').and.returnValue('mock-token');

    const canActivate = guard.canActivate();

    expect(canActivate).toBeTrue(); // Navigation allowed
    expect(routerSpy.navigate).not.toHaveBeenCalled(); // No redirect
  });

  it('should block navigation and redirect to login if the user is not authenticated', () => {
    // Simulate an unauthenticated user
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const canActivate = guard.canActivate();

    expect(canActivate).toBeFalse(); // Navigation blocked
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']); // Redirect to login
  });

  it('should display an alert when redirecting to login', () => {
    // Simulate an unauthenticated user
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(window, 'alert'); // Spy on window.alert

    guard.canActivate();

    expect(window.alert).toHaveBeenCalledWith(
      'Login to access this page. Redirecting to login page...'
    );
  });
});
