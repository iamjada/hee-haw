/**
 * JS3 heeHaw function that takes a number as an input
 * and prints the number from 1 to that number using similar
 * logic as JS2
 *
 * @author Jada
 * @version 1.0
 *
 */

document.getElementById("btnHeeHaw").onclick = heeHaw;

function heeHaw()
{
    const number = document.getElementById("number").value;

    if (isNaN(number) || number > 0)
    {
        let errorNum = document.getElementById("error-num");
        errorNum.style.display = "inline";
    }

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
            //console.log(i);
        }
    } // end of for

} // end of heeHaw

