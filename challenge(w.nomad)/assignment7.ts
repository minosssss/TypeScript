

interface LocalStorageAPI<T> {
    [key: string]: T
}

abstract class SStorage<T>{
    protected storage: LocalStorageAPI<T> = {}
    protected getItem(key:string):any {}
    protected setItem(key:string, value:T):void {}
    protected clearItem(key:string):void {}
    protected clear():void {}

}

class LocalStorage<T> extends SStorage<T> {
    constructor() {
        super();
    }
    getItem(key:string) {
        return this.storage[key]
    }
    setItem(key:string, value:T){
        this.storage[key] = value;
    }
    clearItem(key:string){
        delete this.storage[key]
    }
     clear(){
        this.storage = {}
    }
}


interface IPositionCallback {
  (position: IGeolocationPosition): void;
}
interface IGeolocationPosition {
  readonly coords: IGeolocationCoordinates;
  readonly timestamp: IEpochTimeStamp;
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
type IEpochTimeStamp = number;



interface IPositionErrorCallback {
  (positionError: IGeolocationPositionError): void;
}
type IGeolocationPositionError = {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}


type IGeolocationOptions = {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

interface GeolocationAPI {
    clearWatch(watchId: number): void;
    getCurrentPosition(
        successCallback: IPositionCallback,
        errorCallback?: IPositionErrorCallback | null,
        options?: IGeolocationOptions
    ): void;
    watchPosition(
        successCallback: PositionCallback,
        errorCallback?: IPositionErrorCallback | null,
        options?: IGeolocationOptions
    ): number;
}

class GGeolocation implements GeolocationAPI {
  clearWatch(watchId: number) {
    console.log(watchId);
  }
  getCurrentPosition(
    successCallback: IPositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
  }
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
    return 0;
  }
}