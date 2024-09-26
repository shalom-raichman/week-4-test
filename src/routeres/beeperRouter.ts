import express, { Router, Request, Response }  from "express"
import NewBeeperDTO from "../DTO/newBeeper"
import BeeperService from "../services/beeperService"
import Beeper from "../models/beeper"
import { getFileData, saveFileData } from "../dal/fileDAL"
import DeployedReq from "../DTO/deployedReq"

const router: Router = express.Router()

// create new beeper
router.post("/", async (
    req: Request<any, any, NewBeeperDTO>,
     res: Response): Promise<void> => {
    try {
        const result: boolean = await BeeperService.createNewBeeper(req.body)
        if(!result) throw new Error("cant save New Beeper in file");
        res.status(200).json({
            err: false,
            message: "Beeper created successfuly",
            data: req.body
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: (err as Error).message,
            data: null
        })
    }
})

// get all beepers
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const beepers: Beeper[] = await getFileData("beepers") as Beeper[]
        if(!beepers) throw new Error("Cent get data from file")
        res.status(200).json({
            err: false,
            message: "here is all the beepers saved in file",
            data: beepers
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: (err as Error).message,
            data: null
        })
    }
})

// get beeper by id
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const beepers: Beeper[] = await getFileData("beepers") as Beeper[]
        if(!beepers) throw new Error("Cent get data from file")
        const result: Beeper = beepers.find(b => b.id == Number(req.params.id)) as Beeper
        if(!result) throw new Error("beeper not found");
        res.status(200).json({
            err: false,
            message: "here is the requested beeper",
            data: result
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: (err as Error).message,
            data: null
        })
    }
})

// change beeper status
router.get("/:id/status", async (
    req: Request<any, any, DeployedReq>,
    res: Response): Promise<void> => {
    
})

// delete by id
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        // get all beepers
        const beepers: Beeper[] = await getFileData("beepers") as Beeper[]
        if(!beepers) throw new Error("Cent get data from file")
        
        const beeperToDelete: Beeper = beepers.find(b => b.id == Number(req.params.id)) as Beeper
        if(!beeperToDelete) throw new Error("could not find the beeper to delete");

        // filter the beeper to delet out
        const result: Beeper[] = beepers.filter(b => b.id != Number(req.params.id)) as Beeper[]

        // save the filterd data back to the file
        const isDeleted: boolean = await saveFileData("beepers", result)
        if(!isDeleted) throw new Error("could not delete beeper");

        res.status(200).json({
            err: false,
            message: `beeper ${beeperToDelete.name} deleted successfuly`,
            data: beeperToDelete
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: (err as Error).message,
            data: null
        })
    }
})

// get beeper by status
router.get("/status/:status", async (req: Request, res: Response): Promise<void> => {
    try {
        const beepers: Beeper[] = await getFileData("beepers") as Beeper[]
        if(!beepers) throw new Error("Cent get data from file")
        const result: Beeper[] = beepers.filter(b => b.status == req.params.status) as Beeper[]
        if(result.length == 0) throw new Error("no beeper maetch");
        res.status(200).json({
            err: false,
            message: "here is the requested beeper",
            data: result
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: (err as Error).message,
            data: null
        })
    }
})

export default router