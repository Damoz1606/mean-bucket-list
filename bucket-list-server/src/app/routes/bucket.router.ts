import { Router } from 'express';
import * as Bucket from "../controller/bucket.controller";

const router = Router();

router.route("/")
.get(Bucket.getBuckets)
.post(Bucket.postBucket)
.delete(Bucket.deleteBuckets);

router.route("/:id")
.get(Bucket.getBucket)
.put(Bucket.putBucket)
.delete(Bucket.deleteBucket);

export default router;