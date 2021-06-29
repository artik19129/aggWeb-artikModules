import { RulesService } from './shared/services/rules.service';
import { HttpClientModule } from '@angular/common/http';
import { RulesRoutingModule } from './rules-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RulesComponent } from './pages/rules/rules.component';
import { RulesCategoryComponent } from './components/rules-category/rules-category.component';


@NgModule({
  imports: [
    CommonModule,
    RulesRoutingModule,
	  HttpClientModule,
    FormsModule,
  ],
  declarations: [
    RulesComponent,
    RulesCategoryComponent
  ],
  providers: [RulesService]
})
export class RulesModule { }
