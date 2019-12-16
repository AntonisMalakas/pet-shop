import { Headers, RequestOptions, Http, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';

import { AppSettings } from './appSettings';



@Injectable()
export class BaseService {

    mongoDbUrl: string;
    constructor(private http: Http) {
        this.mongoDbUrl = AppSettings.MONGO_DB_API + "/api/data/";
    }

    getData = (uri: string): Observable<any[]> => {
        return this.http.get("../assets/data/" + uri)
            .map((result: any) => { return result.json() })
            .catch((error: any) => Observable.throw(error.json().error || 'server error'));

    }
    mongoGetData = (dbKey: string, collectionName: string): Observable<any[]> => {
        return this.http.get(this.mongoDbUrl + 'getData?dbKey=' + dbKey + '&collectionName=' + collectionName)
            .map((result: any) => {
                // console.log(this.productName + collectionName);
                return result.json()
            })
            .catch((error: any) => Observable.throw(error.json().error || 'server error'));


    }

    mongoFilterData = (collection: string, fieldName: string, fieldValue: string) => {
        return this.http.get(this.mongoDbUrl + 'filterData?collection=' + collection + '&key=' + fieldName + '&value=' + fieldValue)
            .map((result: any) => {
                return result.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || 'server error'));            
    }

    mongoAdd = (collectionName: string, payload: object) => {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.mongoDbUrl + 'add?collectionName=' + collectionName, payload, options)
            .map(res => res.json())

    }

    mongoUpdate = (collectionName: string, payload: object) => {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.put(this.mongoDbUrl + 'update?collectionName=' + collectionName, payload, options)
            .map(res => res.json());

    }

}
