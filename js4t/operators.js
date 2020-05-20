console.log("--------------OPERATORS--------------")

//  Operator allows us to do mathematical operations.
    
    /*  Arithmetic Operators
        Sum, Subtraction, Division and Multiplication*/
    //  Sum
    var sum = 2 + 2
    //  Subtraction
    var subtraction = 2 - 2
    //  Division
    var division = 2/2
    //  Multiplication
    var multiplication = 2 *2

    console.log(sum)
    console.log(subtraction)
    console.log(division)
    console.log(multiplication)

    var numberOne = prompt("Value 1: ")
    var numberTwo = prompt("Value 2: ")
    division = numberOne / numberTwo
    multiplication = numberOne * numberTwo
    console.log("The value one divided by the value two is ", division)
    console.log ("The value one divided by the value two is ", multiplication)

    /**Comparison Operator 
     * Equal, Not equal, Equal strict, Not equal strict, Bigger then, 
     * Greater than or equal to, Less then, Less then or equal to
    */
   // Equal 
   console.log("Equal strict")
   console.log(1=='1')
   // Not equal
   console.log("Not equal")
   console.log(1 != 4)

   // Equal strict
      // This operator will even compare the type or the variable
   console.log("Equal strict")
   console.log(1==='1')
   console.log(1===1)
   // Not equal strict
      // This operator will even compare the type or the variable
   console.log("Not equal strict")
   console.log(1 !== '1')
   console.log(1 !== 1)
   
   // Bigger then
   console.log("Bigger then")
   console.log(1 > 10)
   console.log(1 > 1)
   console.log(10 > 1)
   // Greater than or equal to
   console.log("Greater than or equal to")
   console.log(1 >= 10)
   console.log(1 >= 1)
   console.log(10 >= 1)
   // Less then
   console.log("Less then")
   console.log(1 < 10)
   console.log(1 < 1)
   console.log(10 < 1)
   // Less then or equal to
   console.log("Less then or equal to")
   console.log(2 <= 1)
   console.log(2 <= 2)
   console.log(10 <= 1)