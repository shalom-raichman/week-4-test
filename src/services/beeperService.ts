import { getFileData, saveFileData } from "../dal/fileDAL"
import Beeper from "../models/beeper"


export default class BeeperService {
    public static async createNewBeeper(newBeeper: Beeper): Promise<boolean>{
        // create a new Post() object
        const { name } = newBeeper
        const post: Beeper = new Beeper(
            name, "manufactured."
        )

        // aad it to the Post file
            // get the file as an array of objects
        let beepers: Beeper[] = await getFileData("beepers") as Beeper[]
        if(!beepers) beepers = []
            // push
        beepers.push(post)
            // save the array back to the file
        return await saveFileData("beepers", beepers)
    }
}

