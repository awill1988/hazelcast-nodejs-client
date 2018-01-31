import * as Promise from 'bluebird';

export function DeferredPromise<T>(): Promise.Resolver<T> {
    let resolve: any;
    let reject: any;

    let promise = new Promise(function() {
        resolve = arguments[0];
        reject = arguments[1];
    });

    return <Promise.Resolver<T>>{
        resolve: resolve,
        reject: reject,
        promise: promise
    };
}
