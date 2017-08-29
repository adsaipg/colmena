import { Component } from '@angular/core'
import { UiService } from '@colmena/admin-ui'

@Component({
  selector: 'app-dev-toast',
  template: `
    <ui-card>
      <ui-card-header>Toasts</ui-card-header>
      <ui-card-content>
        <div class="form-group">
          <label for="toastTitle">Toast Title</label>
          <input id="toastTitle" type="text" class="form-control" [(ngModel)]="toast.title" />
        </div>

        <div class="form-group">
          <label for="toastText">Toast Text</label>
          <input id="toastText" type="text" class="form-control" [(ngModel)]="toast.text" />
        </div>

        <button (click)="testToastSuccess()" class="btn btn-success">Success!</button>
        <button (click)="testToastError()" class="btn btn-danger">Error!</button>
        <button (click)="testToastWarning()" class="btn btn-warning">Warning!</button>
        <button (click)="testToastInfo()" class="btn btn-info">Info!</button>
        <button (click)="testToastWait()" class="btn btn-primary">Wait!</button>
        <button (click)="testToast()" class="btn btn-secondary">All!</button>
      </ui-card-content>
    </ui-card>
  `,
  styles: []
})
export class ToastComponent {

  public toast = {
    title: 'Toast Title',
    text: 'This is the Toast Text!',
  }

  constructor(private ui: UiService) {}

  testToastError() {
    this.ui.alerts.toastError(`Error ${this.toast.title}`, this.toast.text)
  }

  testToastInfo() {
    this.ui.alerts.toastInfo(`Info ${this.toast.title}`, this.toast.text)
  }

  testToastSuccess() {
    this.ui.alerts.toastSuccess(`Success ${this.toast.title}`, this.toast.text)
  }

  testToastWait() {
    this.ui.alerts.toastWait(`Wait ${this.toast.title}`, this.toast.text)
  }

  testToastWarning() {
    this.ui.alerts.toastWarning(`Warning ${this.toast.title}`, this.toast.text)
  }

  testToast() {
    this.testToastError()
    this.testToastInfo()
    this.testToastSuccess()
    this.testToastWait()
    this.testToastWarning()
  }

}
