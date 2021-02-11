
var elements = document.getElementsByClassName("iUh30 Zu0yb qLRx3b tjvcx");
//elements += document.getElementsByClassName("iUh30 Zu0yb tjvcx");

for(var i=0; i<elements.length; i++) {
    elements[i].insertAdjacentHTML('beforeEnd', '<input style="height: 5px;" type="range" class="range" min="-3" max="3" step="1">');
}