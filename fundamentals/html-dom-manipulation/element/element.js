//global vars
var statsElementNone = false;
var username = "";
var pageShuffled = false;
var removedAttr = false;

var searchElem = document.getElementById("search-username");
const shuffleElement = document.getElementById("shuffle");
const randomElement = document.getElementById("random-stuff");
const menu = document.getElementById("menu-dropdown");
const randomListElem = document.getElementById("random-list");
const foodList1 = document.getElementById("food-list-1");
const foodList2 = document.getElementById("food-list-2");
const removeElem = document.getElementById("remove");
const miscBtn = document.getElementById("misc");
const scrollableArea = document.getElementById("scrollable");

const cl = console.log.bind(console);

function getRandomString(words) {
  if (typeof words === "number") {
    var str = "";
    for (var i = 1; i <= words; i++) {
      str += "ContentIsTheKing ";
    }
    return str;
  }
  return "Content";
}

//onload
window.onload = function () {
  //tabIndex
  searchElem.tabIndex = "1";
  shuffleElement.tabIndex = "2";
  randomElement.tabIndex = "3";

  //accesskey and appendChild
  document.getElementById("username").accessKey = "n";
  const passwordInput = document.createElement("input");
  passwordInput.id = "password";
  passwordInput.type = "password";
  searchElem.insertAdjacentHTML("afterend", passwordInput.outerHTML.toString());
  searchElem.insertAdjacentText("afterend", "password:");

  //attributes
  const pasDfang = document.createDocumentFragment();
  const passAttrNodeMap = passwordInput.attributes;
  var attributeNames = "";
  for (let i = 0; i < passAttrNodeMap.length; i++) {
    attributeNames +=
      passAttrNodeMap[i].name + "=" + passAttrNodeMap[i].value + ", ";
  }
  const passAttrLenTextNode = document.createTextNode(
    `Password contains ${passAttrNodeMap.length} attributes namely ${attributeNames}.`
  );
  pasDfang.appendChild(passAttrLenTextNode);
  randomElement.appendChild(
    document.createTextNode(
      "Number of child elements in body is " +
        document.body.childElementCount +
        "/" +
        document.body.children.length +
        " whereas number of child nodes is " +
        document.body.childNodes.length +
        ". "
    )
  );
  randomElement.appendChild(pasDfang);
  //general
  var contentArea = document.createElement("div");
  contentArea.innerHTML = getRandomString(50);
  scrollableArea.appendChild(contentArea);
};

//classList
function useClassList() {
  const randomClassList = randomElement.classList;
  randomClassList.add("test-color", "test-bg-color");
  setTimeout(() => {
    randomClassList.remove("test-bg-color");
  }, 2000);

  randomElement.appendChild(
    document.createTextNode("ClassList is " + randomClassList)
  );
  randomClassList.toggle("test-font");
}

function toggleMenu() {
  const list = menu.classList;
  list.toggle("make-block");
  //menu.className = "make-block";
  setTimeout(() => {
    if (menu.className.includes("make-block"))
      menu.classList.remove("make-block");
  }, 3000);
  //closest and contains
  menu.closest(".make-flex-reverse").style =
    "border: 2px solid; background-color: red";
  randomElement.appendChild(
    document.createTextNode(
      " Menu tag is the closest of a tag: " +
        menu.contains(document.getElementById("menu-content1")) +
        " and closest element className is " +
        menu.closest(".make-flex-reverse").className +
        " compareDocumentPosition is" +
        randomElement.compareDocumentPosition(menu) +
        " firstChild nodeName and firstElementChild innerHTML of menu-dropdown are: " +
        menu.firstChild.nodeName +
        " and " +
        menu.firstElementChild.innerHTML +
        " respectively." +
        "getAttribute('class')= " +
        randomElement.getAttribute("class") +
        "/" +
        randomElement.getAttributeNode("class").value
    )
  );
}

function handleBlur() {
  const username = document.getElementById("username");
  username.blur();
  username.focus();
  document.getElementById("name_checkbox").click();
}

function handleUsernameChange() {
  var input = document.getElementById("username");
  username = input.value;
}

function searchUsername() {
  searchElem.href = "https://google.com/search?q=" + username;
}

function showStats() {
  const sb = document.getElementById("stat_board");
  const header = document.getElementById("header");
  if (sb === null) {
    const stats = document.getElementById("stats");
    header.classList.add("make-border");
    const statBoard = document.createElement("div");
    statBoard.id = "stat_board";
    statBoard.innerHTML =
      "The height of the document is " +
      header.clientHeight +
      " the width is " +
      header.clientWidth +
      " and the left and the top is " +
      `${header.clientLeft} and ${header.clientTop} respectively.`;
    statsElementNone = false;
    document.body.appendChild(statBoard);
    var clone = randomElement.cloneNode(true);
  } else {
    if (statsElementNone) {
      sb.style = "display:block";
      statsElementNone = false;
      header.classList.add("make-border");
    } else {
      sb.style = "display: none";
      statsElementNone = true;
      header.classList.remove("make-border");
    }
  }
  const { left, right, top, bottom, x, y, width, height } =
    randomElement.getBoundingClientRect();
  document.body.appendChild(
    document.createTextNode(
      "ownerDocument is: " +
        clone.ownerDocument.nodeName +
        " The parent element is: " +
        clone.parentElement +
        "The randomElement wtht, tbrl, xy is: " +
        left.toFixed(2) +
        " " +
        right.toFixed(2) +
        " " +
        top.toFixed(2) +
        " " +
        bottom.toFixed(2) +
        " " +
        x.toFixed(2) +
        " " +
        y.toFixed(2) +
        " " +
        width.toFixed(2) +
        " " +
        height.toFixed(2)
    )
  );

  var liDfrag = document.createDocumentFragment();
  var li = document.createElement("li");
  li.style = "color:#1111ff";
  li.innerHTML =
    "The random Element hasAttributes(), hasAttribute('id'), hasChildNodes() is " +
    randomElement.hasAttributes() +
    " " +
    randomElement.hasAttribute("id") +
    " and " +
    randomElement.hasChildNodes() +
    " namespaceURI " +
    randomElement.namespaceURI +
    ` (isDefaultNsURI:${randomElement.isDefaultNamespace(
      randomElement.namespaceURI
    )})`;
  liDfrag.appendChild(li);

  const f1 = foodList1.firstElementChild;
  const f2 = foodList2.firstElementChild;
  const cancel = document.createElement("button");
  cancel.innerHTML = "X";
  cancel.onclick = function () {
    this.parentNode.style.display = "none";
    //or this.parentElement.style.display = 'none'; /* almost same but parentElement returns null if parent is not Element Node; earlier is more popular in general.  */
  };

  const cancelBodyItems = document.createElement("button");
  cancelBodyItems.innerHTML = "previousX";
  cancelBodyItems.onclick = function () {
    this.previousElementSibling.style.display = "none"; //previousSibling takes text & comment & element nodes into ac so mostly you will be using previousElementSibling.
  };

  // foodList2.previousSibling();
  foodList1.appendChild(cancel);
  foodList2.appendChild(cancelBodyItems);
  const isEqual = f1.isEqualNode(f2);
  const isSameNode = f1.isSameNode(f2);
  const isEqualLi = document.createElement("li");
  isEqualLi.innerHTML =
    "F1 isEqualNode with F2: " +
    isEqual +
    " isSameNode?: " +
    isSameNode +
    "/" +
    !!(f1 === f2) +
    "f1 parentNode is: " +
    f1.parentNode.nodeName +
    "Menu matches .menu-dropdown selector: " +
    menu.matches(".menu-dropdown") +
    " and nextSibling of the 'random-list' is: " +
    randomElement.nextElementSibling.innerHTML;
  liDfrag.appendChild(isEqualLi);
  var offsetStats = document.createElement("li");
  offsetStats.innerHTML = `<span style="text-decoration: underline">OffsetTop: ${f1.offsetTop}px  | OffsetLeft: ${f1.offsetLeft}px | OffsetWidth: ${f1.offsetWidth}px | OffsetHeight: ${f1.offsetHeight}px | OffsetParent: ${f1.offsetParent.nodeName}</span>`;
  liDfrag.appendChild(offsetStats);
  randomListElem.appendChild(liDfrag);
  // if there are 5 textnodes in a row and 2 are empty; normalize will make it only one text node
  randomElement.normalize();
}
function shufflePage() {
  const randomNodeName = randomElement.nodeName;
  const randomNodeType = randomElement.nodeType;

  if (pageShuffled) {
    randomElement.dir = "ltr";
    randomElement.innerHTML =
      randomElement.innerHTML +
      "This is not shuffled <strong> randomElement </strong> ";
    console.log("%cinnerHTML", "color:red", randomElement.innerHTML);
    console.log("%cinnerText", "color:red", randomElement.innerText);
    console.log("%couterText", "color:#ff2390", foodList1.outerText);
    console.log("%ctextContent", "color:red", randomElement.textContent);
    pageShuffled = false;
    shuffleElement.innerHTML = "shuffle the page";
  } else {
    randomElement.dir = "rtl";
    pageShuffled = true;
    shuffleElement.innerHTML = "de-shuffle page";
    const randomNodeValue = randomElement.firstChild.nodeValue;
    randomElement.innerHTML =
      randomElement.innerHTML +
      "This is shuffled <strong> randomElement </strong>" +
      "randomNodeName: " +
      randomNodeName +
      " and randomNodeType: " +
      randomNodeType +
      " and <span style='color:#ff44cc; text-decoration: underline'> randomNodeValue is: </span>" +
      randomNodeValue;
  }

  const foodList1LastElement = foodList1.lastElementChild;
  foodList2.insertBefore(foodList1LastElement, null);
}

function tooltip() {
  removeElem.title = "I will be gone!!";
  removeElem.style.backgroundColor = "red";
}

removeElem.addEventListener("mouseover", tooltip);

function removeElement() {
  if (removedAttr) {
    removeElem.remove();
  } else {
    //removeElem.removeAttribute("style");
    var rNode = removeElem.removeAttributeNode(
      removeElem.getAttributeNode("style")
    );
    removeElem.innerHTML =
      removeElem.innerHTML +
      `: removedNode '${rNode.name}' w/ value = ${rNode.value}`;
    removeElem.removeEventListener("mouseover", tooltip);
    removedAttr = true;
  }
}

function miscActions() {
  var contentArea = scrollableArea.children[1];
  var ul = document.createElement("ul");
  var docs = document.createElement("a");
  var docsAttr = document.createAttribute("href");
  docsAttr.value =
    "https://www.w3schools.com/jsref/met_element_setattributenode.asp";
  docs.target = "_blank";
  var docsText = document.createTextNode("See docs");
  docs.appendChild(docsText);
  docs.setAttributeNode(docsAttr);
  const li = document.createElement("li");
  li.innerHTML = "Replace me with scrollable area stats:";
  setTimeout(() => {
    var newLi = document.createElement("li");
    newLi.innerHTML = `Scrollheight: ${scrollableArea.scrollHeight}px | ScrollWidth: ${scrollableArea.scrollWidth}px | ScrollLeft: ${scrollableArea.scrollLeft}px  | scrollTop: ${scrollableArea.scrollTop}px`;
    var action1 = document.createElement("button");
    var action2 = document.createElement("button");
    var action3 = document.createElement("button");
    action1.innerText = "MoveDown";
    action2.innerText = "ScrollIntoView";
    action3.innerText = "MoveUp";
    action1.onclick = function () {
      scrollableArea.scrollTop += 300;
    };
    action3.onclick = function () {
      scrollableArea.scrollTop -= 300;
    };
    action2.onclick = function () {
      contentArea.scrollIntoView();
    };
    var dfrag = document.createDocumentFragment();
    dfrag.appendChild(action1);
    dfrag.appendChild(action2);
    dfrag.appendChild(action3);
    newLi.appendChild(dfrag);
    ul.replaceChild(newLi, ul.children[0]);
  }, 1000);
  ul.appendChild(li);
  const dfrag2 = document.createDocumentFragment();
  dfrag2.appendChild(ul);
  dfrag2.appendChild(docs);
  document.body.appendChild(dfrag2);
}

/*
const create = (elementType, properties) => Object.assign(
  document.createElement(elementType),
  properties
);

create('div', {classList: 'person'})

*/
