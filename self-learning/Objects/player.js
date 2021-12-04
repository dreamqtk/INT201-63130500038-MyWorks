class Player{
    constructor(firstname = 'unknown',lastname = 'unknown'){ //ถ้า firstname ไม่มีค่าส่งมา ให้ตั้งเป็น unknown
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get firstname(){
        return this._firstname;
    }

    set firstname(fname){
        this._firstname = fname;
    }

    get lastname(){
        return this._lastname;
    }

    set lastname(lname){
        this._lastname = lname;
    }
}

let player1 = new Player("mos"); //สร้าง obj
player1.firstname = "mos22"; //เรียก set
console.log(player1.firstname) //เรียก get