import { getFileData, saveFileData } from "../dal/fileDAL"
import NewBeeperDTO from "../DTO/newBeeper"
import Beeper from "../models/beeper"


export default class BeeperService {
    public static async createNewBeeper(newBeeper: NewBeeperDTO): Promise<boolean>{
        
        // get the file as an array of objects
        let beepers: Beeper[] = await getFileData("beepers") as Beeper[]
        if(!beepers) beepers = []
        
        // create a new beeper() object
        const { name } = newBeeper
        const beeper: Beeper = new Beeper(
            name, "manufactured", beepers.length
        )

        // push
        beepers.push(beeper)

        // save the array back to the file
        return await saveFileData("beepers", beepers)
    }
}

