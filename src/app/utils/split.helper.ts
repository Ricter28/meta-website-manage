export class SplitHelper {
  constructor() {
  }

  static getExtensionFileUrl(url: string): string {
    return url.split('.').pop()??'';
  }

  static getNameFileUrl(url: string): string {
    return url.split('_').pop()??'';
  }
}


