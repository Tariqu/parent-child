import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'component-basic';
  heros: string[] = [
    'Tarique Akhtar Ansari',
    'Sharuk khan',
    'Ranveer kapoor',
    'Saumya',
    'Afsa',
  ];
}
