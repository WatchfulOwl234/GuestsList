Bananana=[];
function submit()
{
    var name1 = document.getElementById("banana1").value;
    var name2 = document.getElementById("banana2").value;
    var name3 = document.getElementById("banana3").value;
    var name4 = document.getElementById("banana4").value;
    var name5 = document.getElementById("banana5").value;
    var name6 = document.getElementById("banana6").value;
Bananana.push(name1);
Bananana.push(name2);
Bananana.push(name3);
Bananana.push(name4);
Bananana.push(name5);
Bananana.push(name6);
console.log (Bananana);
document.getElementById("answer of knowledge").innerHTML=Bananana;
document.getElementById("buttonoftruthandwisdom").style.display="none";
document.getElementById("sortinghat").style.display="inline'block";



}

function sort()
{
Bananana.sort();
console.log (Bananana);
document.getElementById("answer of knowledge").innerHTML=Bananana;
}