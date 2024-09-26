import express, { Router, Request, Response }  from "express"
import NewBeeperDTO from "../DTO/newBeeper"
import BeeperService from "../services/beeperService"
import Beeper from "../models/beeper"
import { getFileData } from "../dal/fileDAL"

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

// get beeper by status
router.get("/:id/status", async (req: Request, res: Response): Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        })
    }
})

router.delete("/", async (req: Request, res: Response): Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        })
    }
})

router.get("/status/:status", async (req: Request, res: Response): Promise<void> => {
    try {
        
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        })       
    } catch (err) {
        res.status(400)
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        })
    }
})

export default router