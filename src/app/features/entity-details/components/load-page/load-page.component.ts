import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
