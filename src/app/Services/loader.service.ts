import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class LoaderService {
    counter: number = 0;
    public loaderVisible: Subject<boolean> = new Subject<boolean>();;

    showLoader(): void {
        this.incrLoader();
        if (this.getCounterLoader() == 1) {
            this.loaderVisible.next(true);
        }
    };

    hideLoader(): void {
        this.decrLoader();
        if (this.getCounterLoader() == 0) {
            this.loaderVisible.next(false);
        }
    };

    hideAndResetLoader(): void {
        this.setCounterLoader(0);
        this.loaderVisible.next(false);
    };

    incrLoader(): void {
        this.counter++;
    };

    decrLoader(): void {
        if (this.counter > 0)
            this.counter--;
    };

    getCounterLoader(): number {
        return this.counter;
    };

    setCounterLoader(value: number): void {
        this.counter = value;
    };
  }