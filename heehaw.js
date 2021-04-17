/**
 * JS3 heeHaw function that takes a number as an input
 * and prints the number from 1 to that number using similar
 * logic as JS2
 *
 * @author Jada
 * @version 1.0
 *
 */

// get access to the button using const
document.getElementById("btnHeeHaw").onclick = heeHaw;
validate(heeHaw());

// get access to the input box
function heeHaw()
{
    const number = document.getElementById("number").value;

    for(let i = 1; i<=number; i++)
    {
        // any number evenly divisible by both 3 and 5
        if(i % 3 === 0 && i % 5 === 0)
        {
            document.write("Hee Haw!<br>");
            //console.log("Hee Haw!");
        }
        // any number evenly divisible by 3
        else if(i % 3 === 0)
        {
            document.write("Hee!<br>");
            //console.log("Hee!");
        }
        // any number evenly divisible by 5
        else if (i % 5 === 0)
        {
            document.write("Haw!<br>");
            //console.log("Haw!");
        }
        else
        {
            document.write(i + " <br>");
            console.log(i);
        }
    } // end of for

} // end of heeHaw

function validate()
{
    // flag variable
    let isValid = true;
    // clear all error message
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }

    // check for valid number
    let num = document.getElementById("number").value;
    if (isNaN(num) || num > 0) {
        let errorNum = document.getElementById("error-num");
        errorNum.style.display = "inline";
        isValid = false;
    }
    return isValid;
}
