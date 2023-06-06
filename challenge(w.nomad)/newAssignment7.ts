interface LocalStorageAPI<T> {
    [key: string]: T;
}

abstract class AbstractLocalStorage<T> {
    abstract setItem(key: string, value: T): void;
    abstract getItem(key: string): T | null;
    abstract clearItem(key: string): void;
    abstract clear(): void;
}

class NewLocalStorage<T> extends AbstractLocalStorage<T> {
    private storage: LocalStorageAPI<T>;
    constructor() {
        super();
        this.storage = {}
    }
    setItem(key: string, value: T): void {
        this.storage[key] = value;
    }

    getItem(key: string): T | null {
        return this.storage.hasOwnProperty(key) ? this.storage[key] : null;
    }

    clearItem(key: string): void {
        delete this.storage[key];
    }

    clear(): void {
        this.storage = {} as LocalStorageAPI<T>;
    }
}



type IGeolocationCoordinates = {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

type IPositionCallback = {
    (position: IGeolocationPosition): void;
}
interface IGeolocationPosition {
    readonly coords: IGeolocationCoordinates;
    readonly timestamp: number;
}

type IGeolocationPositionError = {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}
type IPositionErrorCallback = {
    (positionError: IGeolocationPositionError): void;
}


type IGeolocationOptions = {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
}

interface GeolocationAPI {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: IPositionCallback, errorCallback?: IPositionErrorCallback, options?: IGeolocationOptions): void;
    watchPosition( successCallback: PositionCallback, errorCallback?: IPositionErrorCallback, options?: IGeolocationOptions): number;
}

class NewGeolocation implements GeolocationAPI {
  
  getCurrentPosition(successCallback: IPositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions) {
    if (successCallback) console.log(successCallback)
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
  }
  watchPosition(successCallback: PositionCallback,errorCallback?: PositionErrorCallback, options?: PositionOptions) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
    return 0;
  }

  clearWatch(id: number) {
    console.log(id);
  }
}

/*
classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.

LocalStorage API
Geolocation API
LocalStorage API:
Use abstract classes and generics.
추상화 클래스와 제네릭을 사용하세요.
Usage:

localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()
Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Storage

Geolocation API:
overloading을 사용하세요.
geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);
Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
*/