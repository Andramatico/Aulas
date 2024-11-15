class Event {
    Tittle;
    Description;
    Date;
    Hour;
    Location;
    NumberOfParticipants;

    constructor(Tittle, Description, Date, Hour, Location, NumberOfParticipants) {
        this.Tittle = Tittle;
        this.Description = Description;
        this.Date = Date;
        this.Hour = Hour;
        this.Location = Locationocation;
        this.NumberOfParticipants = NumberOfParticipants;
    }
setAddPeople(NumberOfParticipants){
    if(NumberOfParticipants < 30){
this.NumberOfParticipants=NumberOfParticipants
    }
else if (NumberOfParticipants>=30){
    console.log("Permite-se apenas 30 participantes")
}
}
getSeeDetails(){
    return 'this'
}


}