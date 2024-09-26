import fs from "fs/promises"
import Beeper from "../models/beeper"

export const getFileData = async (resource: string): Promise<Beeper[] | void> => {
    try {
        const data: string = await fs.readFile(`${__dirname}/../../data/${resource}.json`, "utf-8")
        const parsedData: Beeper[] = JSON.parse(data)
        return parsedData
    } catch (err) {
        console.log(err);
        
    }
}

export const saveFileData = async (resource: string, data: Beeper[]): Promise<boolean>=>{
    try {
        const stringifyData: string = JSON.stringify(data, null, 2)
        await fs.writeFile(`${__dirname}/../../data/${resource}.json`, stringifyData, {encoding: "utf-8"})
        return true
    } catch (err) {
        console.log(err);
        return false
    }
}