export class URLSearchParamsStub implements URLSearchParams {
  size: number;
  private data: Map<string, string[]> = new Map();
  constructor() {
    this.size = 0;
  }
  entries(): IterableIterator<[string, string]> {
    const self = this;
    const iterator: IterableIterator<[string, string]> = {
      next: function (): IteratorResult<[string, string]> {
        const keys = Array.from(self.data.keys());
        if (keys.length > 0) {
          const key = keys[0];
          const values = self.data.get(key) || [];
          if (values.length > 0) {
            return { value: [key, values.shift() || ''], done: false };
          } else {
            self.data.delete(key);
            return this.next();
          }
        } else {
          return { value: undefined as any, done: true };
        }
      },
      [Symbol.iterator]: function (): IterableIterator<[string, string]> {
        return this;
      },
    };

    return iterator;
  }

  keys(): IterableIterator<string> {
    const self = this;
    const keysIterator: IterableIterator<string> = {
      next: function (): IteratorResult<string> {
        const keys = Array.from(self.data.keys());
        if (keys.length > 0) {
          const key = keys[0];
          self.data.delete(key);
          return { value: key, done: false };
        } else {
          return { value: undefined as any, done: true };
        }
      },
      [Symbol.iterator]: function (): IterableIterator<string> {
        return this;
      },
    };

    return keysIterator;
  }
  values(): IterableIterator<string> {
    const self = this;
    const valuesIterator: IterableIterator<string> = {
      next: function (): IteratorResult<string> {
        const keys = Array.from(self.data.keys());
        if (keys.length > 0) {
          const key = keys[0];
          const values = self.data.get(key) || [];
          if (values.length > 0) {
            return { value: values.shift() || '', done: false };
          } else {
            self.data.delete(key);
            return this.next(); // Recursive call to get the next value
          }
        } else {
          return { value: undefined as any, done: true };
        }
      },
      [Symbol.iterator]: function (): IterableIterator<string> {
        return this;
      },
    };

    return valuesIterator;
  }
  [Symbol.iterator](): IterableIterator<[string, string]> {
    return this.entries();
  }
  append(name: string, value: string): void {}
  delete(name: string, value?: string | undefined): void {}
  get(name: string): string | null {
    return null;
  }
  getAll(name: string): string[] {
    return [];
  }
  has(name: string, value?: string | undefined): boolean {
    return false;
  }
  set(name: string, value: string): void {}
  sort(): void {}
  toString(): string {
    return '';
  }
  forEach(
    callbackfn: (value: string, key: string, parent: URLSearchParams) => void,
    thisArg?: any,
  ): void {}
}
