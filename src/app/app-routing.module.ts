import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntityDetailsPageComponent} from './features/entity-details/components/entity-details-page/entity-details-page.component';
import {LoadPageComponent} from './features/entity-details/components/load-page/load-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'load'
    },
    {
        path: 'load',
        component: LoadPageComponent,
        children: [
            {
                path: ':uuid',
                component: EntityDetailsPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
