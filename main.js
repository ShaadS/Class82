var mouseEvent="empty";
var lastX,lastY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="black";
width=4;

canvas.addEventListener("mousedown",My_mousedown);
function My_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= colour;
        ctx.lineWidth=width;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastX=currentx;
    lastY=currenty;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";

}
