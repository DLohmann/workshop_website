var exp = document.getElementsByClassName("experience");
var elems = document.getElementsByClassName("exp");

export function expand_button_text(index) {
  console.log("expand function called by button #" + index);
  var panel = elems[index].nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}


export function accordion(index){
    console.log("accordion function called on index #" + index + "!");
    var panel = exp[index].nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
}