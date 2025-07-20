import { Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { ProfileComponent } from './page/profile/profile.component';
import { TextComponent } from './page/text/text.component';
import { CalculatorComponent } from './page/calculator/calculator.component';
import { CalculatorTailwindComponent } from './page/calculator-tailwind/calculator-tailwind.component';

export const routes: Routes = [
    { path: "main", component: MainComponent },
    { path: "profile", component: ProfileComponent },
    { path: "text", component: TextComponent },
    { path: "calculator", component: CalculatorComponent },
    { path: "calculator-2", component: CalculatorTailwindComponent }
];
