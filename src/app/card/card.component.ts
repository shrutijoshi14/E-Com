import { Component } from '@angular/core';

@Component( {
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
} )
export class CardComponent {
  students = [
    {
      id: 1,
      name: 'Shruti',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.223,
      fees: 75000,
      dob: '2000-01-20',
      code: 'S1-05'
    },
    {
      id: 2,
      name: 'Shaheen',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.576,
      fees: 55000,
      dob: '2002-02-14',
      code: 'S1-05'
    },
    {
      id: 3,
      name: 'Meghana',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.3856,
      fees: 85000,
      dob: '2004-03-12',
      code: 'S1-05'
    },
    {
      id: 4,
      name: 'Shruti',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.223,
      fees: 75000,
      dob: '2000-04-20',
      code: 'S1-05'
    },
    {
      id: 5,
      name: 'Shaheen',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.576,
      fees: 55000,
      dob: '2002-05-14',
      code: 'S1-05'
    },
    {
      id: 6,
      name: 'Meghana',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.3856,
      fees: 85000,
      dob: '2004-06-12',
      code: 'S1-05'
    },
    {
      id: 7,
      name: 'Shruti',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.223,
      fees: 75000,
      dob: '2000-07-20',
      code: 'S1-05'
    },
    {
      id: 8,
      name: 'Shaheen',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.576,
      fees: 55000,
      dob: '2002-08-14',
      code: 'S1-05'
    },
    {
      id: 9,
      name: 'Meghana',
      image: 'https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp',
      cgpa: 9.3856,
      fees: 85000,
      dob: '2004-09-12',
      code: 'S1-05'
    },
  ]
}
