import  { Routes } from '@angular/router';
import { CounterComponent } from './basic/counter/counter.component';
import { CharizardComponent } from './basic/charizard/charizard.component';

export const routes: Routes = [
    {
        path: 'basic/counter',
        component: CounterComponent
    },
    {
        path:'basic/charizard',
        component: CharizardComponent
    },
    {
        path: '**',
        redirectTo: 'basic/counter'
    }
];
