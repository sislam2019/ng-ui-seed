import { Component, OnInit } from '@angular/core';
import { PopupInvokeService } from '../_services/popup-invoke.service';
import { NotificationToastComponent } from '../shared-components/notification-toast/notification-toast.component';
import { PostService } from '../_services/post.service';

// Kendo Specific
import { State } from '@progress/kendo-data-query';
import { IntlService } from '@progress/kendo-angular-intl';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public popup: PopupInvokeService,
    public intl: IntlService,
    public postService: PostService
  ) { }

  // variables declare and initialize
  // ================================
  public state: State = {
    skip: 0,
    take: 80,
    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: []
    }
  };

  postData = [];
  selectedPosts = [];

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      posts.forEach(e => {
        e.REQUEST_START_DATE = this.intl.parseDate(e.REQUEST_START_DATE);
        e.REQUEST_END_DATE = this.intl.parseDate(e.REQUEST_END_DATE);
        e.Demos = e.Demos.split(',');
      });
      this.postData = posts;
    });
  }


  // ======================
  // Callback Notifications
  // ======================
  successCallback() {
    this.popup.CallNotification(
      NotificationToastComponent, 'check_circle', 'success_icon_color', 'Campaign saved Successfully', 4000, 'start', 'success'
    );
  }
  errorCallback() {
    this.popup.CallNotification(
      NotificationToastComponent, 'cancel', 'error_icon_color', 'Something Went wrong on saving Campaign', 4000, 'start', 'error'
    );
  }
  notificationCallback() {
    this.popup.CallNotification(
      NotificationToastComponent,
      'notification_important', '', 'General Notification for example in progress please wait', 4000, 'center', 'General Info'
    );
  }

  // Grid data change stae for filtering, sorting, grouping
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
  }

}
