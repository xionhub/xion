export class DeviceHelper {
  static isClient(): boolean {
    const w = window;
    return typeof w !== 'undefined';
  }
  static isServer(): boolean {
    const w = window;
    return typeof w === 'undefined';
  }
  static isIos(): boolean {
    if (this.isClient()) {
      return false;
    }
    const ios = /iPhone|IPad|IPod/i;
    const nav = navigator;
    return ios.test(nav?.userAgent);
  }
  static isAndroid(): boolean {
    if (this.isClient()) {
      return false;
    }
    const android = /Android/i;
    const nav = navigator;
    return android.test(nav?.userAgent);
  }
  static isWeb(): boolean {
    if (this.isClient()) {
      return false;
    }
    const android = /Android/i;
    const ios = /iPhone|IPad|IPod/i;
    const nav = navigator;
    return !android.test(nav?.userAgent) && !ios.test(nav?.userAgent);
  }
  static getDevice(): 'server' | 'ios' | 'android' | 'web' | 'unknown' {
    if (this.isServer()) {
      return 'server';
    }
    if (this.isIos()) {
      return 'ios';
    }
    if (this.isAndroid()) {
      return 'android';
    }
    if (this.isWeb()) {
      return 'web';
    }
    return 'unknown';
  }
}
