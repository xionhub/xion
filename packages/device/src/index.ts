export class DeviceHelper {
  ios: RegExp;
  android: RegExp;
  constructor() {
    this.ios = /iPhone|IPad|IPod/i;
    this.android = /Android/i;
  }

  isClient(): boolean {
    const w = window;
    return typeof w !== 'undefined';
  }
  isServer(): boolean {
    const w = window;
    return typeof w === 'undefined';
  }
  isIos(): boolean {
    if (this.isClient()) {
      return false;
    }
    return this.ios.test(navigator?.userAgent);
  }
  isAndroid(): boolean {
    if (this.isClient()) {
      return false;
    }
    return this.android.test(navigator?.userAgent);
  }
  isWeb(): boolean {
    if (this.isClient()) {
      return false;
    }
    return (
      !this.android.test(navigator?.userAgent) &&
      !this.ios.test(navigator?.userAgent)
    );
  }
  getDevice(): 'server' | 'ios' | 'android' | 'web' | 'unknown' {
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
