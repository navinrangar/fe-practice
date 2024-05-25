/* eslint-disable no-unused-vars */

var themeColor = "normal";

function readWriteDoc() {
  var newWindow = window.open();
  newWindow.document.open();
  newWindow.document.write(
    "<h1>Hello world!</h1>",
    "<p style='color:red'> how are you doing? </p>"
  );
  newWindow.document.title = "Ooops! (Just saying hello!✋)";
  newWindow.document.close();
}

function getRandomCookieString() {
  return `username: ${(Math.random() + 1).toString()}; expires: ${new Date()};`;
}

function saveCookie() {
  document.cookie = getRandomCookieString();
  const cookies = document.cookie;
  document.getElementById("cookies").innerHTML = cookies;
}

//createAttribute, setAttributeNode and setAttribute()
function colorMode() {
  const button = document.getElementsByName("color-mode")[0];
  const allButtons = document.getElementsByTagName("button"); // use * for all tags.
  if (themeColor === "normal") {
    const style = document.createAttribute("style");
    style.value = "background-color:#ccffff";
    const element = document.getElementsByTagName("body")[0];
    button.style = "background-color: '#ffffff'";
    element.setAttributeNode(style);
    themeColor = "light";
    Array.from(allButtons).forEach((btn) => {
      btn.style.backgroundColor = "#ffffff";
    });
  } else {
    const element = document.getElementsByTagName("body")[0];
    button.style = "background-color: #ccffff";
    element.setAttribute("style", "backgroundColor: #ffffff");
    themeColor = "normal";
    Array.from(allButtons).forEach((btn) => {
      btn.style.backgroundColor = "#ccffff";
    });
    /*
    setAttribute() overwrite the existing value, so to set style use element.style.attribute_name instead;
    element.style.backgroundColor = "#ffffff";
    */
  }

  var comment = document.createComment(`The theme is now ${themeColor}`);
  document.body.appendChild(comment);
  const header = document.getElementsByClassName("header")[0];
  header.style.backgroundColor = "#ffffff";
}

//fun things
function shuffleScreen() {
  let dMode = document.designMode;
  if (dMode === "off") document.designMode = "on";
  else if (dMode === "on") document.designMode = "off";
  document.getElementById("general").setAttribute("contentEditable", true);
  const element = document.getElementById("random");
  element.innerHTML =
    "The document node name is " + document.documentElement.nodeName;
  document.getElementById("documentURI").innerHTML =
    document.domain + " & " + window.location.hostname;

  //normalise() - joins the adjacent and removes empty text nodes.
  const footerCN = document.getElementById("footerCN");
  document.normalize();
  footerCN.inner = footerCN.innerHTML =
    "This document has " + document.body.childNodes.length + " child nodes.";
  document.title = "(shuffled) " + document.title;
}

function overWriteDocument() {
  document.open();
  document.write(
    "<h1> I'm document.open() overwriting all of your current contents. My sibling window.open() opens a new window and then write contents, whereas i'm only overwrite the contents in the present document. </h1>"
  );
  document.close();
}

// ON FIRST LOAD
document.addEventListener("DOMContentLoaded", function () {
  // general
  // let url = window.document.URL;
  // var documentUri = document.documentURI;
  // document.getElementById("documentURI").innerHTML = documentUri;
  let active = document.activeElement.tagName;
  function eventListener() {
    document.getElementById("event-listener").innerHTML = "You clicked me";
  }
  // document.getElementById("url").textContent = url;
  document.getElementById("active").innerText = active;
  document.addEventListener("click", eventListener);
  const a = document.anchors.length;
  const anchors = document.createElement("span");
  anchors.textContent = `Number of named anchor tags in the document: ${a}`;
  var general = document.getElementById("general");
  general.appendChild(anchors);
  Array.from(document.anchors).forEach((anc, index) => {
    const anchor = document.createElement("a");
    Object.assign(anchor, {
      id: "anchor" + index,
      textContent: `Tag :${anc}`,
      href: anc,
      target: "_blank",
    });
    var general = document.getElementById("general");
    general.appendChild(anchor);
  });

  const firstA = document.querySelector("a[id='url']");
  firstA.style.backgroundColor = "#ff88ff";

  const allA = document.querySelectorAll("a");
  allA.forEach((a, index) => {
    if (index !== 0) {
      Object.assign(a.style, {
        backgroundColor: "#44ff55",
        marginTop: "10px",
        fontSize: "20px",
      });
    }
  });

  const studyTopics = [
    "HTML DOM Objects",
    "Web APIs",
    "Window and Javascipt Objects",
    "CSS",
  ];
  var dfang = document.createDocumentFragment();
  for (let topic in studyTopics) {
    const element = document.createElement("li");
    element.textContent = studyTopics[topic];
    dfang.appendChild(element);
  }
  document.getElementById("studyList").appendChild(dfang);
  var random = document.getElementById("random");
  // random.style = "padding-top: 30px";
  var textNode = document.createTextNode("Hello world!");
  random.style.color = "#2299ff";
  random.appendChild(textNode);

  const footerElement = document.getElementById("footer");
  if (document.hasFocus) {
    const dfang = document.createDocumentFragment();
    const hasFocusText = document.createElement("li");
    hasFocusText.innerHTML = "The document is now in focus";
    dfang.appendChild(hasFocusText);
    const firstHeadChildtagName = document.createTextNode(
      document.head.firstElementChild.tagName
    );
    dfang.appendChild(firstHeadChildtagName);
    footerElement.appendChild(dfang);
  }

  const footer = document.getElementById("footer");
  const footerCN = document.createElement("li");
  footerCN.id = "footerCN";
  footerCN.innerHTML =
    "This document has " +
    document.body.childNodes.length +
    " child nodes." +
    " and readyState is: " +
    document.readyState +
    "number of script tags: " +
    document.scripts.length + "number of form tags: " + document.forms.length;
  const referrerPage = document.createElement("a");
  referrerPage.href = document.referrer;
  referrerPage.textContent = "Go back to referrer page";
  const footerDfang = document.createDocumentFragment();
  footerDfang.appendChild(footerCN);
  footerDfang.appendChild(referrerPage);
  footer.appendChild(footerDfang);

  //adaptNode and importNode
  var frame = document.getElementById("w3-frame");
  frame.onload = function () {
    var frameH1 = frame.contentWindow.document.getElementsByTagName("h1")[0];
    var node = document.importNode(frameH1, false);
    footerElement.appendChild(node);

    frame.contentWindow.document.body.style.backgroundColor = "yellow";
    var w3Node = document.adoptNode?.(frameH1);
    document.body.appendChild(w3Node);
  };
});

// lastModified

function lastModified() {
  var modiDate = new Date(document.lastModified);
  return (
    modiDate.getDate() +
    "-" +
    (modiDate.getMonth() + 1) +
    "-" +
    modiDate.getFullYear()
  );
}

function GetTime() {
  var modiDate = new Date();
  var Seconds = modiDate.getSeconds();

  return modiDate.getHours() + ":" + modiDate.getMinutes() + ":" + Seconds;
}

document.write("Last updated on ");
document.write(lastModified() + " @ " + GetTime());
document.write("");
