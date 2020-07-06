/*var nipes= ['♥', '♦', '♣', '♠'];
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

}*/

function aleatorio() {
    var result = document.getElementById('jogar').value
    
    var nipes= ['♥', '♦', '♣', '♠'];
    var faces= ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var nipe=nipes[Math.floor(Math.random()*4)];
    var face=faces[Math.floor(Math.random()*faces.length)]; 
    var div = document.getElementById('cartaa')
    res.innerHTML= face+nipe

    /*/document.write("<h1>" + face + nipe+ "</h1>");/*/
	
	var birl = face+nipe
        
    
   if (result == birl){
    
       var div = document.getElementById('result')
       res2.innerHTML= 'PARABENS! VOCE ACERTOU'
   }
   else{
    var div = document.getElementById('result')
    res2.innerHTML= 'Voce perdeu tente novamente'
   }
  
    
}
function mostrarcartas(){
	
	res1.innerHTML=faces;
}

