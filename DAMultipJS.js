
document.addEventListener('DOMContentLoaded', function() {
    var tableCount = false;
    document.getElementById("generate").addEventListener("click", generateTable);

    function generateTable () 
    {
        
        /*
        Putting this count statement inorder to keep the same page when putting different values for the dyanmic multiplication table.
        without a count and remove table, we will get different tables scattered around the webpage. If we keep track of the count, once 
        a count start a we remove the table, we will be able to erase the previous table and display the new one.
        */
        if (tableCount)
        {
            removeTable();
        };
         //Error Message if a value greater than 50 is inserted for the x min
    if(parseInt(document.getElementById("xAxisStart").value) < -50 || document.getElementById("xAxisStart").value > 50)
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the x Min";
        document.getElementById("xAxisStart").value = "";
        removeTable();
    } 
    //Error Message if a value greater than 50 is inserted for the x max
    else if(parseInt(document.getElementById("xAxisEnd").value) < -50 || document.getElementById("xAxisEnd").value > 50)
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the x Max";
        removeTable();
    } 
    //Error Message if a value greater than 50 is inserted for the y min
    else if(parseInt(document.getElementById("yAxisStart").value) < -50 || document.getElementById("yAxisStart").value > 50) 
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the y Min";
        removeTable();
    } 
    //Error Message if a value greater than 50 is inserted for the y max
    else if(parseInt(document.getElementById("yAxisEnd").value) < -50 || document.getElementById("yAxisEnd").value > 50) 
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert a number between -50 and 50 for the y Max";
        removeTable();
    } 
   /*
   In JavaScript, NaN is short for "Not-a-Number". The Number.isNaN() method returns true if the value is NaN, and the type is a Number. if 
   it is anything else other than a number, it will return false. the isNaN() function determines whether a value is NaN or not.

   src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    */
    //Error Message if there is a wrong input for VALUE of the start of the X axis.
    else if(isNaN(parseInt(document.getElementById("xAxisStart").value)))
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for X min!</span>";
        removeTable();
    } 
    //Error Message if there is a wrong input for VALUE of the end of the X axis.
    else if(isNaN(parseInt(document.getElementById("xAxisEnd").value))) 
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for X max!</span>";
        removeTable();
    } 
    //Error Message if there is a wrong input for VALUE of the start of the Y axis.
    else if(isNaN(parseInt(document.getElementById("yAxisStart").value)))
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for Y min!</span>";
        removeTable();
    } 
    //Error Message if there is a wrong input for VALUE of the end of the Y axis.
    else if(isNaN(parseInt(document.getElementById("yAxisEnd").value)))
    {
        errorMessage.innerHTML = "<span style=color: red;font-family: Verdana,sans-serif;font-weight:bold;font-style:italic;>"+"You DID NOT place a correct value. Please insert correct val for Y max!</span>";
        removeTable();
    }
    else 
    {
        errorMessage.innerHTML = "";
    }
        //document.createElement() method creates the HTML element specified by tagName
        let div = document.createElement('div'); //will work with all what is within the div which is the user input choices box.??
        /*
        div.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
        This can then be used to manipulate the class list. src: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

        Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(). with add(),
        The add() method appends a new element with a specified value to the end of a Set object. here the new element is 'box'
        */
       div.classList.add('tableScoller');
        /*
        The JavaScript appendChild() is a method of the Node interface, used to append nodes (typically elements) at 
        the end of a specified parent node. It can be executed on existing child nodes or by creating new elements.
        src: https://flexiple.com/javascript/javascript-appendchild
        */
        document.body.appendChild(div);
        var table = document.createElement("table");
        document.body.appendChild(table);

        div.appendChild(table);

        /*
        Here I am declaring the rows and columns by selecting the value that the user inputs in the html.
        What parseInt does is that it The parseInt() function parses a string argument and returns an integer, since
        we are accepting strings, we convert it to a number. then .value represents the value of the value attribute 
        of the option element.
        */
        var rowBegin = parseInt(document.getElementById("xAxisStart").value);
        var rowEnd = parseInt(document.getElementById("xAxisEnd").value);
        var columnBegin = parseInt(document.getElementById("yAxisStart").value);
        var columnEnd = parseInt(document.getElementById("yAxisEnd").value);
        
        //xMin, xMax, Ymin, Ymax
        createTable(rowBegin, rowEnd, columnBegin, columnEnd);

        function createTable(rowBegin, rowEnd, columnBegin, columnEnd) {
            var i = columnBegin - 1;
            var j = rowBegin - 1;
            while (i < columnEnd + 1) {
              var row = document.createElement("tr");
              var NumofRow = table.appendChild(row);
              for (var j = rowBegin - 1; j < rowEnd + 1; j++) {
                var data = document.createElement("td");
                if (i == columnBegin - 1 && j == rowBegin - 1) {
                  var gridValue = "";
                  data.textContent = gridValue;
                  data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; left: 0'
                } else if (j == rowBegin - 1) {
                  var gridValue = i;
                  data.textContent = gridValue;
                  data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; left: 0'
                } else if (i == columnBegin - 1) {
                  var gridValue = j;
                  data.textContent = gridValue;
                  data.style.cssText = 'background-Color:plum ; color: blue; position: sticky; left: 0'
                } else {
                  var gridValue = i * j;
                  data.textContent = gridValue;
                }
                NumofRow.appendChild(data);
              }
      
              i++;
            }
          }
        tableCount = true; //Table Counter
    }
    /*
    Function that will not allow the repeating of tables in the website. It will delete the table when theres a error or already a table in.
    */
    function removeTable () 
    {
        var parent = document.body;
        var child = document.getElementsByClassName("tableScoller")[0];
        parent.removeChild(child);
    }
});
