import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should be match with the snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('increaseBy should be increase based on the argument', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });

  test('click on buttons should be increment and decrease in 1', () => {
    const buttons = compiled.querySelectorAll('button');//se puede buscar por clases . por id # por algo especifico []
    buttons[0].click();
    expect(component.counter).toBe(11);

    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(9);
  });

  test('changing counter should be update h1 label', () => {
    component.increaseBy(10);
    fixture.detectChanges();
    
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');//que en su estring tenga un valor de 20
  });
});
