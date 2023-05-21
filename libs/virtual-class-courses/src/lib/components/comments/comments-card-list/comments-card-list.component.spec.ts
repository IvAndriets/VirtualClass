import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsCardListComponent } from './comments-card-list.component';

describe('CommentsCardListComponent', () => {
  let component: CommentsCardListComponent;
  let fixture: ComponentFixture<CommentsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
