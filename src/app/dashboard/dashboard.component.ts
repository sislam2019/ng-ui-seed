import { Component, OnInit } from '@angular/core';
import { PopupInvokeService } from '../_services/popup-invoke.service';
import { NotificationToastComponent } from '../shared-components/notification-toast/notification-toast.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public popup: PopupInvokeService) { }

  ngOnInit() {
  }



  // Callback Notifications
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
}
