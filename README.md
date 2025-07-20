# hello-angular

โปรเจกต์ Angular สำหรับทดลองสร้างหน้า Profile และ Calculator  
รองรับทั้งดีไซน์ปกติและ Tailwind CSS

---

## Features

- **หน้า Profile**  
  - ใช้ Reactive Forms
  - กรอกชื่อ-นามสกุล และแสดงผลข้อมูล

- **หน้า Calculator**  
  - ดีไซน์เครื่องคิดเลขครบ กดปุ่มได้ทุกปุ่ม (ยังไม่คำนวณจริง)
  - มีทั้งเวอร์ชัน CSS ปกติ และเวอร์ชัน Tailwind CSS

- **หน้า Main**  
  - ตัวอย่างการใช้ date pipe, form, และ control flow template

- **หน้า Text**  
  - ตัวอย่างการเปลี่ยนหน้า

---

## เทคโนโลยีที่ใช้

- Angular Standalone Components
- Tailwind CSS (ตั้งค่าพร้อมใช้งาน)
- SCSS

---

## วิธีติดตั้งและรันโปรเจกต์

1. **ติดตั้ง dependencies**
   ```
   npm install
   ```

2. **รันเซิร์ฟเวอร์ Angular**
   ```
   ng serve
   ```
   เปิดเบราว์เซอร์ที่ [http://localhost:4200](http://localhost:4200)

---

## โครงสร้างโปรเจกต์

- `src/app/page/profile` — หน้าโปรไฟล์ (Reactive Forms)
- `src/app/page/calculator` — หน้าเครื่องคิดเลข (CSS ปกติ)
- `src/app/page/calculator-tailwind` — หน้าเครื่องคิดเลข (Tailwind CSS)
- `src/app/page/main` — หน้า main ตัวอย่าง
- `src/app/page/text` — หน้า text ตัวอย่าง

---

## ตัวอย่างการใช้ Tailwind

```html
<div class="bg-blue-500 text-white p-4">Hello Tailwind</div>
```

---

## การตั้งค่า Tailwind CSS

- กำหนดใน `tailwind.config.js`:
  ```js
  content: [
    "./src/**/*.{html,ts}",
  ],
  ```
- import ใน `src/styles.scss`:
  ```scss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```