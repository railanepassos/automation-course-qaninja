
/*  var welcome = "Hello JavaScript - Automation Full Stack from QA Ninja !"
    document.getElementById("welcome").append(welcome)
    console.log("Hello JavaScript - Automation Full Stack from QA Ninja !")
    */
   
/*  Variables have midified values during the execution. 
    In JavaScript the tupe of the variable is dynamic, that is,
    from the moment you include the value the variable will have its
    type defined automatically */

    /* Types of variables */
    
    var questionName = prompt("What is your name ?")
    var questionAge = prompt("How old are you ?")
    console.log (typeof questionAge)
    console.log (questionAge)
    /*  We can notice that the questionAge variable is defined
        as a string when executing the code, so we can force it
        to the become a number.*/
    var questionAge = Number(questionAge) + 1


    var questionAgeRetype = Number(prompt("Retype your age: "))

    /* typeof shows the typr of variable */
    console.log (typeof questionName)
    console.log (questionName)
    console.log (typeof questionAge)
    console.log (questionAge)
    console.log (typeof questionAgeRetype)
    console.log (questionAgeRetype)
