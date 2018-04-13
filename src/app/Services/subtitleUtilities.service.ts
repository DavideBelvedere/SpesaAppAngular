import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SubtitleUtilitiesService {
    private numberList: Subject<String> = new Subject<String>();
    public numberList$ = this.numberList.asObservable();
    public nextNumberList(numberList: String) {
        this.numberList.next(numberList);
      }
}
