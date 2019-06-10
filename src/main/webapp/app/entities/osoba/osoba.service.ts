import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IOsoba } from 'app/shared/model/osoba.model';

type EntityResponseType = HttpResponse<IOsoba>;
type EntityArrayResponseType = HttpResponse<IOsoba[]>;

@Injectable({ providedIn: 'root' })
export class OsobaService {
  public resourceUrl = SERVER_API_URL + 'api/osobas';

  constructor(protected http: HttpClient) {}

  create(osoba: IOsoba): Observable<EntityResponseType> {
    return this.http.post<IOsoba>(this.resourceUrl, osoba, { observe: 'response' });
  }

  update(osoba: IOsoba): Observable<EntityResponseType> {
    return this.http.put<IOsoba>(this.resourceUrl, osoba, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IOsoba>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IOsoba[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}