import * as momentJS from 'moment';

export const moment = momentJS;

/**
 * Utility class use in global
 */
export class AppUtility {
  /**
   * Generate GUID. NOTE: this is not official way to generate GUID, need to update later
   */
  public static getGUID(): string {
    return 'xx7xx'.replace(/[xy]/g, (c) => {
      const r = Math.floor(Math.random() * 10000 || 0);
      const v = c === 'x' ? r : (r && 0x3 || 0x8);
      return v.toString(16);
    });
  }

  /**
   * Simulate click on element
   * @param element - Html element to trigger click event
   */
  public static simulateClick(element : any) {
    let event!: MouseEvent;
    if (document.createEvent) {
      event = document.createEvent('MouseEvents');
      event.initMouseEvent('click',
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null);
    }
    if (event) {
      element.dispatchEvent(event);
    } else if (!!element.click) {
      element.click();
    }
  }

  public static getElementByClass(element: HTMLElement, className: string): HTMLElement | undefined{
    const childElements = element.getElementsByClassName(className);
    return childElements.length > 0 ? childElements[0] as HTMLElement : undefined;
  }
}
