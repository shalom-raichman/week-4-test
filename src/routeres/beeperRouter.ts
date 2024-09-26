import express, { Router, Request, Response }  from "express"
import NewBeeperDTO from "../DTO/newBeeper"
import BeeperService from "../services/beeperService"

const router: Router = express.Router()

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

router.get("/", async (req: Request, res: Response): Promise<void> => {
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

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
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