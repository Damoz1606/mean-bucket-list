import { Request, Response } from 'express';
import Bucket from "../model/bucket.model";

export async function getBuckets(req: Request, res: Response): Promise<Response> {
    try{
        const buckets = await Bucket.find();
        return res.status(200).json(buckets);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function getBucket(req: Request, res: Response): Promise<Response> {
    try{
        const bucket = await Bucket.findById(req.params.id);
        return res.status(200).json(bucket);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function postBucket(req: Request, res: Response): Promise<Response> {
    try{
        const bucket = await Bucket.create(req.body);
        return res.status(200).json(bucket);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function putBucket(req: Request, res: Response): Promise<Response> {
    try{
        const bucket = await Bucket.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json(bucket);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function deleteBucket(req: Request, res: Response): Promise<Response> {
    try{
        const bucket = await Bucket.findByIdAndDelete(req.params.id);
        return res.status(200).json(bucket);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function deleteBuckets(req: Request, res: Response): Promise<Response> {
    try{
        const bucket = await Bucket.deleteMany({});
        return res.status(200).json(bucket);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}