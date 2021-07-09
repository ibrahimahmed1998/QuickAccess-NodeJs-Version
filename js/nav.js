const anc = document.createElement("a");
anc.setAttribute("class","navbar-brand");
anc.setAttribute("href","index.html");
const div1 = document.getElementById("div1").appendChild(anc);
/*******************************/
const b = document.createElement("b");b.innerHTML="Quick Access";div1.appendChild(b);
/*******************************/
const div2 = document.createElement("div");
div2.setAttribute("class","collapse navbar-collapse");
div2.setAttribute("id","navbarResponsive");
const element3 = document.getElementById("div1").appendChild(div2);
/*******************************/
const ul = document.createElement('ul');
ul.setAttribute('class','navbar-nav ms-auto');
ul.setAttribute('id','ul1');
const element4 = document.getElementById("navbarResponsive").appendChild(ul);
/*******************************/
const li = []; for (let i=0;i<9;i++){
    li[i] = document.createElement('li');
    li[i].setAttribute('class','nav-item');
    li[i].setAttribute('id','li'+i);
    document.getElementById("ul1").appendChild(li[i]);}

const links = ['Front-End','JS','PHP','dot_net','jobs-Training','Marketing','Others','Python','Testing'] ; 
            
const L = []; for (let i=0;i<9;i++){
    L[i] = document.createElement('a');
    L[i].setAttribute('class','nav-link');
    L[i].setAttribute('href',links[i]+".html");
    L[i].innerHTML=links[i];
    document.getElementById("li"+i).appendChild(L[i]);} 