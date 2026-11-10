import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddJoueur } from './add-joueur';

describe('AddJoueur', () => {
  let component: AddJoueur;
  let fixture: ComponentFixture<AddJoueur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJoueur],
    }).compileComponents();

    fixture = TestBed.createComponent(AddJoueur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
