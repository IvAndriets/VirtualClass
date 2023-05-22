import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeworksCardComponent } from './homeworks-card.component';

describe('HomeworksCardComponent', () => {
  let component: HomeworksCardComponent;
  let fixture: ComponentFixture<HomeworksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeworksCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeworksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
