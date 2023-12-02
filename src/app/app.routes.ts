import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Child2Component } from './child2/child2.component';
import { ChartsComponent } from './charts/charts.component';
import { BarComponent } from './charts/bar/bar.component';
import { AreaComponent } from './charts/area/area.component';
import { PieComponent } from './charts/pie/pie.component';

export const routes: Routes = [
    {path : '', title: 'Charts', component: ChartsComponent},
    {
        path : 'charts', component: ChartsComponent,
        children : [ 
            { path : '', component: AreaComponent },
            { path : 'bar', component: BarComponent },
            { path : 'area', component: AreaComponent },
            { path : 'pie', component: PieComponent } 
        ]
    },
    {path : 'signal', component : Child1Component},
    { path: '**', component: PagenotfoundComponent },
];
