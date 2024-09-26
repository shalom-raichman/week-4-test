import { getFileData, saveFileData } from "../dal/fileDAL"
import { Status } from "../enums/statusEnum"
import Beeper from "../models/beeper"

const deployBeeper = async (beeper: Beeper): Promise<boolean> => {
    try {
        console.log("time ");
        
        const beepers: Beeper[] = await getFileData("beepers") as Beeper[]
        if(!beepers) throw new Error("Cent get data from file")

        // find the beeper by id
        const beeperToUpdateIndex: number = beepers.findIndex(b => b.id == Number(beeper.id))
        if(!beepers[beeperToUpdateIndex]) throw new Error("beeper not found");

        beepers[beeperToUpdateIndex].status = Status.detonated

        // save the filterd data back to the file
        const isUpdated: boolean = await saveFileData("beepers", beepers)
        if(!isUpdated) throw new Error("could not update beeper");

        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export default deployBeeper