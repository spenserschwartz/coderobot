/* HTML


<div id="div1" class="header">
  <h2>List Insertion Visualization</h2>
  <input type="text" id="lInput" placeholder="Insert text here">
  <button onclick="insertToList()" class="addBtn">Insert</button>
</div>

<ul id="theList">
</ul>

<script type="text/javascript" src="listVisualizationScript.js"></script>

</body>
</html>


*/

/* CSS

ul li:nth-child(3n) {
  color: red;
}


*/

// Function runs when Insert button is clicked
function insertToList() {
  var listElement = document.createElement("li");
  var inputValue = document.getElementById("lInput").value;
  var textNode = document.createTextNode(inputValue);
  listElement.appendChild(textNode);
  // No elements inserted if text field is empty
  if (inputValue === '') {
    alert("Input is needed before submitting");
  } else {
    // If there is text, you just made the list! 
    document.getElementById("theList").appendChild(listElement);
  }
}

// Thank you for your time. Have a nice day! 