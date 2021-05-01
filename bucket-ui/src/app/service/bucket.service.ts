import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bucket } from '../interface/bucket';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  URI:string = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  getBuckets(){
    return this.http.get<Bucket[]>(this.URI);
  }

  getBucket(id: string){
    return this.http.get<Bucket>(`${this.URI}/${id}`);
  }

  postBucket(bucket: Bucket){
    return this.http.post<Bucket>(this.URI, bucket);
  }

  putBucket(id: string, bucket: Bucket){
    return this.http.put<Bucket>(`${this.URI}/${id}`, bucket);
  }

  deleteBucket(id:string){
    return this.http.delete<Bucket>(`${this.URI}/${id}`);
  }

  deleteBuckets(){
    return this.http.delete(this.URI);
  }

}
