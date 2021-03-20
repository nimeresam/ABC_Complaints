import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IComplaint } from '../models/complaint.interface';

@Injectable()
export class ComplaintsService {

  link: string;

  constructor(
    private http: HttpClient
  ) {
    this.link = '/complaints';
  }

  /**
   * get all complaints that available for the logged in user
   * @returns {Observable<IComplaint[]>}
   */
  get(): Observable<IComplaint[]> {
    return this.http.get<IComplaint[]>(this.link);
  }

  /**
   * insert or udpate complaint
   * @param {IComplaint} complaint 
   * @returns {Observable<IComplaint>} complaint with id and meta properties
   */
  upsert(complaint: IComplaint): Observable<IComplaint> {
    return this.http.post<IComplaint>(this.link, complaint);
  }

  /**
   * @param {string} id 
   * @returns just a thrown error if something happened 
   */
  deleteById(id: string) {
    return this.http.delete<IComplaint>(`${this.link}/${id}`);
  }

}
