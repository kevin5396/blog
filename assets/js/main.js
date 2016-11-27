var entries = [];
console.log(location.pathname);
if (location.pathname == "/") {
    entries = document.querySelectorAll(".org-ul a");
}
console.log(entries);
var date, title;

function trim(s){ 
  return ( s || '' ).replace( /^\s+|\s+$/g, '' ); 
}

for (var i = 0, l = entries.length; i < l; i++) {
	var entry = entries[i];
    var li = entry.parentElement;
	date = trim(entry.innerText.substr(0, 12));
    if (date[5] == ',') {
        console.log(date[5]);
        date = date.slice(0, 4) + date.slice(4);
        console.log(date[5]);
    }
    console.log(date);
	title = trim(entry.innerText.substr(12));
 	titleHTML = "<div class='post-link'>" + title + "</div>";
    dateHTML = "<div class='post-date'>" + date + "</div>";
    entry.innerHTML = "<div class='post-entry'>" + titleHTML + dateHTML + "</div>";
}

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
var title = document.querySelector("h1[class='title']");
if (title.innerText == "Posts") {
	loadjscssfile("/assets/css/index.css", "css");
}


