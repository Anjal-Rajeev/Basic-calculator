function buttonClick(val)
{
  document.getElementById("screen").value+=val;
}
function clearScreen()
{
    document.getElementById("screen").value="";
}

function equalButton() 
{
    var text=document.getElementById("screen").value;
    var rslt=eval(text)

document.getElementById("screen").value=rslt;
}