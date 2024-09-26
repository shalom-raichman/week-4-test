class Beeper{
    public detonated_at?: Date
    public created_at: Date
    public latitude?: number
    public longitude? :number
    constructor(
        public name: string,
        public status: string,
        public id: number
    ) {
        this.created_at = new Date()
    }
}

export default Beeper