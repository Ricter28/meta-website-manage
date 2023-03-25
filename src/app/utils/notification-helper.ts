import notify from 'devextreme/ui/notify';
import { confirm, alert, custom } from 'devextreme/ui/dialog';
export class AppNotify {
  static info(message: string) {
    notify(message, 'info', 5000);
  }

  static warning(message: string) {
    notify(message, 'warning', 5000);
  }

  static error(message: string = '') {
    if (!message) {
      message = ERROR;
    }
    notify(message, 'error', 5000);
  }

  static success(message: string) {
    notify(message, 'success', 5000);
  }

  static confirm(message: string, title: string): Promise<boolean> {
    return confirm(message, title);
  }

  static alert(message: string, title: string) {
    alert(message, title)
  }

  static custom(message: string, title: string): Promise<any> {
    return custom({
      title: title,
      message: message,
    }).show()
  }
}

export const ERROR = 'An error has occurred. Please try again.';
