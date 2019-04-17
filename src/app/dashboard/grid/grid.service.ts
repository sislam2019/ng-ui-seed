import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IntlService } from '@progress/kendo-angular-intl';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { GridData } from '../../_models/grid-data';
import { NotificationToastComponent } from 'src/app/shared-components/notification-toast/notification-toast.component';
import { PopupInvokeService } from 'src/app/_services/popup-invoke.service';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';



@Injectable({
  providedIn: 'root'
})
export class GridService extends BehaviorSubject<any[]> {

  constructor(
    private http: HttpClient, private intl: IntlService,
    public popup: PopupInvokeService
  ) {
    super([]);
  }


  private data: any[] = [];

    public read() {
        if (this.data.length) {
            return super.next(this.data);
        }

        this.fetch()
            .pipe(
                tap(posts => {
                posts.forEach(e => {
                  e.REQUEST_START_DATE = this.intl.parseDate(e.REQUEST_START_DATE);
                  e.REQUEST_END_DATE = this.intl.parseDate(e.REQUEST_END_DATE);
                  e.Demos = e.Demos.split(',');
                });
                this.data = posts;
                console.log(this.data);
                })
            )
            .subscribe(data => {
                super.next(data);
            });
    }

    public save(data: any, isNew?: boolean) {
        const action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        console.log(data);
        console.log(isNew);
        this.reset();

        this.fetch(action, data)
            .subscribe(() => {
                this.read();
                this.popup.CallNotification(
                  NotificationToastComponent, 'check_circle', 'success_icon_color', 'Post saved Successfully', 4000, 'start', 'success'
                );
              },
              err => {
                this.popup.CallNotification(
                  NotificationToastComponent, 'cancel', 'error_icon_color', 'Something Went wrong', 4000, 'start', 'error'
                );
              });
    }

    public remove(data: any) {
        this.reset();

        this.fetch(REMOVE_ACTION, data)
            .subscribe(() => {
              this.read();
              this.popup.CallNotification(
                NotificationToastComponent, 'check_circle', 'success_icon_color', 'Post deleted Successfully', 4000, 'start', 'success'
              );
            },
            err => {
              this.popup.CallNotification(
                NotificationToastComponent, 'cancel', 'error_icon_color', 'Something Went wrong', 4000, 'start', 'error'
              );
            });
    }

    public resetItem(dataItem: any) {
        if (!dataItem) { return; }

        // find orignal data item
        const originalDataItem = this.data.find(item => item.REQUEST_ID === dataItem.REQUEST_ID);

        // revert changes
        Object.assign(originalDataItem, dataItem);

        super.next(this.data);
    }

    private reset() {
        this.data = [];
    }

    private fetch(action: string = '', data?: any): Observable<any[]> {
        return this.http.get<GridData[]>('../../../assets/data/grid/post.json');
    }

}
