import { RulesService } from '../../shared/services/rules.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  id: number = 1;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, public service: RulesService, private router: Router) {
      this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
      this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationEnd) { this.service.get(this.id); window.scroll(0,0); }
    });
     }

  ngOnInit() {}

}
