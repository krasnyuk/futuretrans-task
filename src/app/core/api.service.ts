import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entity} from '../models/entity.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiBaseUrl: string = environment.apiUrl;

    constructor(private httpClient: HttpClient) {
    }

    getEntityById(id: string): Observable<Entity> {
        const url: string = this.apiBaseUrl + '/hs/wa/load/';
        return this.httpClient.get<Entity>(url, {params: {uuid: id}});
    }
}
