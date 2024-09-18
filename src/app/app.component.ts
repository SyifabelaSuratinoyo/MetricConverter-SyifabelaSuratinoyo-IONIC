import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fromUnit: string = '';
  toUnit: string = '';
  inputValue: string = '';  // Ubah dari number ke string untuk memudahkan penggabungan
  result: number = 0;
  unitsAvailable: boolean = false;
  availableUnits: string[] = ['meters', 'kilometers', 'centimeters', 'millimeters'];

  // Method to update the units list when the metric is selected
  updateUnits(event: any) {
    this.unitsAvailable = true; // Enable the unit selections once a metric is selected
  }

  // Method to handle conversion logic
  convert() {
    let inputInMeters: number;
    
    switch (this.fromUnit) {
      case 'meters':
        inputInMeters = parseFloat(this.inputValue);
        break;
      case 'kilometers':
        inputInMeters = parseFloat(this.inputValue) * 1000;
        break;
      case 'centimeters':
        inputInMeters = parseFloat(this.inputValue) / 100;
        break;
      case 'millimeters':
        inputInMeters = parseFloat(this.inputValue) / 1000;
        break;
      default:
        this.result = 0;
        return;
    }

    switch (this.toUnit) {
      case 'meters':
        this.result = inputInMeters;
        break;
      case 'kilometers':
        this.result = inputInMeters / 1000;
        break;
      case 'centimeters':
        this.result = inputInMeters * 100;
        break;
      case 'millimeters':
        this.result = inputInMeters * 1000;
        break;
      default:
        this.result = 0;
        break;
    }
  }

  // Method to append a number to the input value
  appendNumber(num: number) {
    this.inputValue += num.toString();
  }

  // Method to clear the input value
  clear() {
    this.inputValue = '';
  }
}
