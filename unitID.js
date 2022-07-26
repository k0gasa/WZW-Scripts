// ==UserScript==
// @name           Unit ID Search
// @author         Kogasa
// @version        1.0
// @description    Fixed positioned Unit ID Search bar for Woozworld.com
// @match          *://*.woozworld.com/*
// @exclude        *://elections.stackexchange.com/*
// @grant          GM_addStyle
// ==/UserScript==

var my_div = document.getElementById("tabs");
var newHTML = document.createElement ('div');
newHTML.innerHTML = '<div id="ses" style = "position:absolute; z-index: 1; left:515px; top:12px;" ><input style="width:100px" width=60% class="search-bar" placeholder="Enter Unit ID..." type="text" id="txtName" /></div> <div  style = "position:absolute; left:635px; top:15px;" ><a  id="unitidlol" href = "" class="gotoUnitz unit" onclick = "var kek= document.getElementById(\'txtName\').value; document.getElementById(\'unitidlol\').setAttribute(\'href\', kek+\'-en\')"></a></div>';
my_div.parentNode.insertBefore(newHTML, my_div.nextSibling);



