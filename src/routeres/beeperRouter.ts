import express, { Router, Request, Response }  from "express"

const router: Router = express.Router()

router.post("/", async (req: Request, res: Response): Promise<void> => {
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