import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bucket } from '../../interface/bucket';
import { BucketService } from '../../service/bucket.service';

@Component({
  selector: 'app-list-bucket',
  templateUrl: './list-bucket.component.html',
  styleUrls: ['./list-bucket.component.css']
})
export class ListBucketComponent implements OnInit {

  selectedBucket: Bucket = {} as Bucket;
  buckets: Bucket[];

  constructor(private bucketService:BucketService) { }

  ngOnInit(): void {
    this.getBuckets();
  }

  getBuckets(): void{
    this.bucketService.getBuckets()
    .subscribe(res => {
      this.buckets = res;
    },
    error => {
      console.log(error);
    });
  }

  putBucket(update: Bucket){
    this.bucketService.putBucket(update._id, update)
    .subscribe(res => {
      this.buckets.filter(item => {if(item._id == res._id){ item = res; }});
      this.disableEditableBucket();
    }, error => {
      console.log(error);
    });
  }

  deleteBucket(id: string){
    this.bucketService.deleteBucket(id)
    .subscribe(res => {
      this.buckets.splice(this.buckets.indexOf(res), 1);
    }, error => {
      console.log(error);
    });
  }

  setEditableBucket(bucket: Bucket): void{
    this.selectedBucket = bucket;
  }

  disableEditableBucket(): void {
    this.selectedBucket = {} as Bucket;
  }

  

}
