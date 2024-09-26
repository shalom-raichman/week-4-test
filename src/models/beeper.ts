class Beeper{
    static _id: number = 0
    public id: number
    public detonated_at?: Date
    public created_at: Date
    public latitude?: number
    public logitude? :number
    constructor(
        public name: string,
        public status: string,
    ) {
        this.id = Beeper._id ++
        this.created_at = new Date()
    }
}

export default Beeper