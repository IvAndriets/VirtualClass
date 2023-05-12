import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualClassUiSignInCallBackComponent } from './virtual-class-ui-sign-in-call-back.component';

describe('VirtualClassUiSignInCallBackComponent', () => {
  let component: VirtualClassUiSignInCallBackComponent;
  let fixture: ComponentFixture<VirtualClassUiSignInCallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirtualClassUiSignInCallBackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VirtualClassUiSignInCallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
