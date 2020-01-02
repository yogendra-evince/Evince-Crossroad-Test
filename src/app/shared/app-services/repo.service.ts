import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { AbstractService } from './abstract.service';
import { RepoDetails } from '../models/repo/repo-details';

@Injectable({
  providedIn: 'root'
})
export class RepoService extends AbstractService {
  constructor(protected http: HttpClient) {
    super(http);
  }
  //Call API to get All Commits from the Got Hub API
  getAllCommits() {
    return this.http.get<RepoDetails[]>(`${this.apiUrl}/repos/yogendra-evince/Evince-Crossroad-Test/commits`, {})
    .pipe(catchError(this.handleError));
  }
}
