
// Loops (Repetition Loops)

    // For is moved by declaration
        /*
        for (var index = 1; index <= 10; index++) {
            switch (index) {
                case 1:
                    console.log(`Repeating because one is less than ten !`)
                    break;
                case 2:
                    console.log(`Repeating because two is less than ten !`)
                    break;
                case 3:
                console.log(`Repeating because three is less than ten !`)
                    break;
                default:
                    console.log(`Repeating because ${index} is less than ten !`)
                    break;
            }
        }
        */
    //  Implementing a better solution according to a question answered in stackoverflow
    //  https://pt.stackoverflow.com/questions/453204/%c3%89-correto-usar-um-switch-dentro-de-um-for
    console.log("---------------------------- For ----------------------------")
    for (var index = 1; index <= 10; index ++){
        var value = `${index}`;
        switch (index){
            case 1:
                value = "one";
                break;
            case 2:
                value = "tow";
                break;
            case 3:
                value = "three";
                break;
        }
        console.log(`Repeating because ${value} is less than ten !`);
    }

    // While is moved for condition and stay this condition while true
    console.log("---------------------------- Whille ----------------------------")
    var index = 1
    while (index <= 10) {
        console.log(`Repeating because ${index} is less than ten !`)
        index ++    
    }

    // For it - job witch arrays

    var avengers = ['Ironman', 'Spiderman', 'Thor', 'Captian America', 'Black Panther', 'Black Window']
    avengers.forEach(
        function(value, key){
            console.log(`${value} in position ${key}`)
    })