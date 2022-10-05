class weekList {
    constructor(id, day){
        this.id = id
        this.day = day
    }
}


const days = [new weekList(1, "Monday"),new weekList(2, "Tuesday"),new weekList(3, "Wednesday"),new weekList(4, "Thursday"),new weekList(5, "Friday"),new weekList(6, "Saturday"),new weekList(6, "Sunday"),]

console.log(days)