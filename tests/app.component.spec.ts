import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have the 'angular-testing' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance; 
    expect(component.title).toEqual('angular-testing');
  });

  // test('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const component = fixture.componentInstance; 

  //   const h1 = compiled.querySelector('h1');
  //   expect(h1?.textContent).toContain(component.title);
  // });

  // test('should match with snapshot', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled).toMatchSnapshot();
  // });
});
