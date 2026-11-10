import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateJoueur } from './update-joueur';

describe('UpdateJoueur', () => {
  let component: UpdateJoueur;
  let fixture: ComponentFixture<UpdateJoueur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateJoueur],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateJoueur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
