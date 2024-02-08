import {Component, inject, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public isShowed: boolean = false;
  private loaderService: LoaderService = inject(LoaderService);

  ngOnInit(): void {
    this.loaderService.isShowed$.subscribe((isShowed: boolean) => this.isShowed = isShowed);
  }
}
