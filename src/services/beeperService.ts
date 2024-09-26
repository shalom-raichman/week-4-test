import { getFileData, saveFileData } from "../dal/fileDAL"
import NewBeeperDTO from "../DTO/newBeeper"
import { Status } from "../enums/statusEnum"
import Beeper from "../models/beeper"


export default class BeeperService {
    public static async createNewBeeper(newBeeper: NewBeeperDTO): Promise<boolean>{
        
        // get the file as an array of objects
        let beepers: Beeper[] = await getFileData("beepers") as Beeper[]
        if(!beepers) beepers = []
        
        // create a new beeper() object
        const { name } = newBeeper
        if(!name) throw new Error("name has not provided ");
        const beeper: Beeper = new Beeper(
            name, Status.manufactured, Number(Math.random().toString().split(".")[1])
        )

        // push
        beepers.push(beeper)

        // save the array back to the file
        return await saveFileData("beepers", beepers)
    }
}

