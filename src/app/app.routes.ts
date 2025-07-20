import { Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { ProfileComponent } from './page/profile/profile.component';
import { TextComponent } from './page/text/text.component';
import { CalculatorComponent } from './page/calculator/calculator.component';

export const routes: Routes = [
    { path: "main", component: MainComponent },
    { path: "profile", component: ProfileComponent },
    { path: "text", component: TextComponent },
    { path: "calculator", component: CalculatorComponent }
    
];
