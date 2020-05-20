var age = prompt("How old are you ?")

if (age >= 18)
{
    console.log("You can go to the Iron Maiden show !")

}else if (age >=17){
    console.log("You can go to the Jonas Brothers show !")
}else{
    console.log("You can go to the Patati Patatá show !")
}

var typeTicket = prompt("What is the type of your ticket ?")
switch (typeTicket) {
    case 'vip':
        console.log("This ticket is entitled to the cabin.")
        break;
    case 'premium':
        console.log("This tickte is entitled you to a premium track.")
        break;
    case 'comum':
        console.log("This ticket entitles you to a common track.")
        break;
    default:
        console.log("Ticket type not found please fill in again.")
        break;
}