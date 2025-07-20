import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  display = '';

  press(key: string) {
    // ยังไม่ต้องทำอะไร
  }

  calculate() {
    // ยังไม่ต้องทำอะไร
  }

  clear() {
    // ยังไม่ต้องทำอะไร
  }

  onSaveData(event: Event, value: string) {
    // ตัวอย่าง: log ค่าไว้ก่อน
    console.log('Button pressed:', value);
    // สามารถเก็บข้อมูลหรือประมวลผลต่อได้
  }
}
