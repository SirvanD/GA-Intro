function hometown() {
    let city = String(process.argv[2]).toLowerCase();
    switch (city) {
        case "sydney":
            console.log("Good on you! me too")
            break;
        case "melbourne":
            console.log("Melbourne, nice!")
            break;
        case "brisbane":
            console.log("Brissy! Good on you!")
            break;
        case "perth":
            console.log("Perth! Not too bad ")
            break;
        default:
            console.log("Error! Enter where you live")
            break;
    }
}hometown();