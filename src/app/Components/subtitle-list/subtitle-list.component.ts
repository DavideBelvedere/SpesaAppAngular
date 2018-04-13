import { Component, OnInit } from '@angular/core';
import { SubtitleUtilitiesService } from '../../Services/subtitleUtilities.service';

@Component({
  selector: 'subtitle-list',
  templateUrl: './subtitle-list.component.html',
  styleUrls: ['./subtitle-list.component.css']
})
export class SubtitleListComponent implements OnInit {
  numberListText: String;
  constructor(private subtitleUtilitiesService: SubtitleUtilitiesService) {
    this.subtitleUtilitiesService.numberList$.subscribe(text => {
      this.numberListText = text;
    });
  }

  ngOnInit() {
  }

}
