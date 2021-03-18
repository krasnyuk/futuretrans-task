import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {finalize, map, switchMap, tap} from 'rxjs/operators';
import {ApiService} from '../../../../core/api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Entity} from '../../../../models/entity.model';

@Component({
    selector: 'app-entity-details-page',
    templateUrl: './entity-details-page.component.html',
    styleUrls: ['./entity-details-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityDetailsPageComponent implements OnInit {
    private isLoading = new BehaviorSubject<boolean>(false);

    isLoading$: Observable<boolean> = this.isLoading.asObservable();
    entity$: Observable<Entity> | undefined;

    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.getEntityData();
    }

    private getEntityData() {
        this.entity$ = this.activatedRoute.paramMap.pipe(
            tap(() => this.isLoading.next(true)),
            map((paramMap: ParamMap) => paramMap.get('uuid') || ''),
            switchMap((id: string) => this.apiService.getEntityById(id).pipe(
                finalize(() => this.isLoading.next(false))
            )),
        );
    }
}
