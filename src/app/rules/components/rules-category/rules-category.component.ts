import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules-category',
  templateUrl: './rules-category.component.html',
  styleUrls: ['./rules-category.component.scss'],
})
export class RulesCategoryComponent implements OnInit {
  @Input() id: number = 1;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  constructor() {

   }

  ngOnInit(): void {
  }
}
