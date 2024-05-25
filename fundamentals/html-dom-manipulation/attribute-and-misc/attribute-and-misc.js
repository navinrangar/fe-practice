var attr = document.getElementById("attr-obj");
var nodeMap = attr.attributes;
var htmlCollection = document.getElementsByTagName("H1");
var nodeList = document.querySelectorAll("H1");

function getColorElement(content) {
	return `<span style="color:#22ff22"> ${content} </span>`
}

document.addEventListener("DOMContentLoaded", () => {
	var dfrag = document.createDocumentFragment();
	var props = document.createElement("div");
	props.innerHTML = "The first Attr name is: " + getColorElement(attr.attributes[0].name) + " the value is: " + getColorElement(attr.attributes[0].value) + " the specified status is: " + getColorElement(attr.attributes[0].specified) + " number of attritubes are: " +  getColorElement(attr.attributes.length);
	dfrag.appendChild(props);
	
	//easier alt: elem.getAttribute()
	var methods = document.createElement("div");
    
	//easier alt: elem.setAttribute()
    var node = document.createAttribute("style");
	node.value = "text-decoration: underline";
	nodeMap.setNamedItem(node);
	
	//removeNamedItem()
	setTimeout(() => {
		nodeMap.removeNamedItem("style");
	}, 20000);
	
	//item(index)
	var firstItem = nodeMap.item(0); //same as nodeMap[0]
	
	//common ops;
	methods.innerHTML = "getNamedItems(id): " + getColorElement(nodeMap.getNamedItem("id").value) + " and item(0).name is: " +  firstItem.name;
	dfrag.appendChild(methods);
	dfrag.appendChild(document.createElement("hr"));
	var htmlCollection = document.createElement("h1");
	var htmlbutton = document.createElement("button");
	var nodebutton = document.createElement("button");
	var domTokenSpan = document.createElement("span");
	htmlCollection.innerHTML = "Now see HTML Collection and NodeList";
	nodebutton.innerHTML = "GetNodeStats";
	htmlbutton.innerHTML = "GetHTMLStats";
	domTokenSpan.innerHTML = "DOMTokenList is covered in 'Element' page";
	htmlbutton.onclick = function () {getHtmlStats()};
	nodebutton.onclick = function () {getNodeStats()};
	nodebutton.style.margin = "10px";
	htmlCollection.style.textDecoration = "underline";
	domTokenSpan.style = "border: 1px solid black; padding: 2px";
	dfrag.appendChild(htmlCollection);
	dfrag.appendChild(htmlbutton);
	dfrag.appendChild(nodebutton);
	dfrag.appendChild(domTokenSpan);
	document.body.appendChild(dfrag);
	});
	
	
	function getNodeStats() {
		var ul = document.createElement("ul");
		var dfrag = document.createDocumentFragment();
		nodeList.forEach((node) => {
			var li = document.createElement("li");
			li.innerHTML = "Im staic node list, and I don't change" + `<strong> ${node.innerHTML}</strong>`;
			ul.appendChild(li);
		})
		dfrag.appendChild(ul);
		document.body.appendChild(dfrag);
	}
	
	function getHtmlStats() {
		var ol = document.createElement("ol");
		var dfrag = document.createDocumentFragment();
		Array.from(htmlCollection).forEach((elem) => {
			var li = document.createElement("li");
			li.innerHTML = "Im live HTML Collection" + `<strong> ${elem.innerHTML}</strong>`;
			ol.appendChild(li);
		})
		dfrag.appendChild(ol);
		document.body.appendChild(dfrag);
	}