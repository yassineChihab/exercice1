import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  totalMantant: number = 0;
  MontantPayer: number = 0;
  change: number = 0;
  changeNotes: string[] = [];

  calculateChange() {
    this.change = this.MontantPayer - this.totalMantant;
    this.changeNotes = this.calcul(this.change);
  }

  calcul(Montant: number): string[] {
    debugger;
    const notes = [10, 5, 1];
    const response: string[] = [];

    for (const note of notes) {
      const count = Math.floor(Montant / note);
      if (count > 0) {
        response.push(`${count} Euro${count > 1 ? 's' : ''} de ${note}`);
        Montant -= count * note;
      }
    }

    return response;
  }
}
