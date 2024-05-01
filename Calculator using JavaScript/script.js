function clearScreen()
{
    document.getElementById("result").value = "";
}

function display(value)
{
    document.getElementById("result").value += value;
}

function calculate() 
{
    var input = document.getElementById("result").value;
    try 
    {
        var result = new Function('return ' + input)();
        document.getElementById("result").value = result;
    }
    catch (error) 
    {
        document.getElementById("result").value = 'Error';
    }
}