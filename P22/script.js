var nipes= ['♥', '♦', '♣', '♠'];
var faces= ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var nipe=nipes[Math.floor(Math.random()*4)];
var face=faces[Math.floor(Math.random()*faces.length)]

var nipe2=nipes[Math.floor(Math.random()*4)];
var face2=faces[Math.floor(Math.random()*faces.length)]

var nipe3=nipes[Math.floor(Math.random()*4)];
var face3=faces[Math.floor(Math.random()*faces.length)]

var nipe4=nipes[Math.floor(Math.random()*4)];
var face4=faces[Math.floor(Math.random()*faces.length)]

function mostrarcartas(){
	
	res1.innerHTML=faces;
}
function mostrarnipes(){
	res2.innerHTML=nipes;
	
}
function aleatorio(){
res.innerHTML=`${face} ${nipe}`;
res3.innerHTML=`${face2} ${nipe2}`;
res4.innerHTML=`${face3} ${nipe3}`;
res5.innerHTML=`${face4} ${nipe4}`;

}
