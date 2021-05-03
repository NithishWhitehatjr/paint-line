var mousevent= "empty";var lastposistionofx,lastpostionofy;
canvas=document.getElementById("myCanvas");
cityx=canvas.getContext
("2d");
color=document.getElementById("color").value
width=document.getElementById("width").value
canvas.addEventListener("mousedown" ,mymousedown);
function mymousedown(e){
    mousevent="mousedown";

}
canvas.addEventListener("mouseup" ,mymouseup);
function mymouseup(e){
    mousevent="mouseup";}
    canvas.addEventListener("mouseleave" ,mymouseleave);
    function mymouseleave(e){
        mousevent="mouseleave";
    }
    canvas.addEventListener("mousemove" ,mymousemove);
function mymousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop
    if(mousevent=="mousedown"){
        cityx.beginPath();
        cityx.strokeStyle=color;
        cityx.lineWidth=width
        cityx.moveTo(lastposistionofx,lastpostionofy)
        cityx.lineTo(currentx,currenty)
        cityx.stroke()
    }
   lastposistionofx=currentx;
   lastpostionofy=currenty;
   var color=document.getElementById("text_inputcolor").value;
var width=document.getElementById("text_inputwidth").value;


}
var touchevent= "empty";var lastposistionofx,lastpostionofy;
canvas=document.getElementById("myCanvas");
cityx=canvas.getContext
("2d");
color=document.getElementById("color").value
width=document.getElementById("width").value
canvas.addEventListener("touchdown" ,mytouchdown);
function mytouchdown(e){
    touchevent="touchdown";

}
canvas.addEventListener("touchup" ,mytouchup);
function mytouchup(e){
    mousevent="touchup";}
    canvas.addEventListener("touchleave" ,mytouchjleave);
    function mytouchleave(e){
        mousevent="touchleave";
    }
    canvas.addEventListener("touchmove" ,mytouchmove);
function mytouchmove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop
    if(mousevent=="touchdown"){
        cityx.beginPath();
        cityx.strokeStyle=color;
        cityx.lineWidth=width
        cityx.moveTo(lastposistionofx,lastpostionofy)
        cityx.lineTo(currentx,currenty)
        cityx.stroke();