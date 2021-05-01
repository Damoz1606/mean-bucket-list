import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bucket } from '../../interface/bucket';
import { BucketService } from '../../service/bucket.service';
import { ListBucketComponent } from '../list-bucket/list-bucket.component';

@Component({
  selector: 'app-input-bucket',
  templateUrl: './input-bucket.component.html',
  styleUrls: ['./input-bucket.component.css']
})
export class InputBucketComponent implements OnInit {

  bucket: Bucket = {} as Bucket;

  constructor(private bucketService:BucketService) { }

  ngOnInit(): void {
  }

  addBucket(form: NgForm){
    this.bucketService.postBucket(form.value)
    .subscribe(res => {
      console.log(res);
      window.location.reload();
    }, error =>{
      console.log(error);
    });
    this.bucket = {} as Bucket;
  }

  deleteAllBuckets(){
    this.bucketService.deleteBuckets()
    .subscribe(res => {
      console.log(res);
      window.location.reload();
    }, error => {
      console.log(error);
    })
  }

}
