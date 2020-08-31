import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'math', pathMatch: 'full' },
    { path: 'math',         loadChildren: './pages/math/math.module#MathPageModule' },
    { path: 'list',         loadChildren: './pages/list/list.module#ListPageModule' },
    { path: 'chart',        loadChildren: './pages/chart/chart.module#ChartPageModule' },
    { path: 'plotly',       loadChildren: './pages/plot/plot.module#PlotPageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
