import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [
        CommonModule,
        ChartsRoutingModule,
        Ng2Charts,
        HttpClientModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
