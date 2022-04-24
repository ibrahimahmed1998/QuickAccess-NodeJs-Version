const links = ['0_0','English','Data','Marketing','SAP','Software Testing','HR','JS','Py','PHP','Security','Prog','UI-UX','JOB','Others','Eg','$$'] ; 
/*******************************/
const anc = document.createElement("a");
anc.setAttribute("class","navbar-brand");
anc.setAttribute("href","/");
const div9 = document.getElementById("div9").appendChild(anc);
const div1 = document.getElementById("div1");
/*******************************/
const b = document.createElement("b");
b.innerHTML="Quick Access"; 
div9.appendChild(b);
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
const li = []; for (let i=0;i<links.length;i++){
    li[i] = document.createElement('li');
    li[i].setAttribute('class','nav-item');
    li[i].setAttribute('id','li'+i);
    document.getElementById("ul1").appendChild(li[i]);}
/*******************************/         
const L = []; for (let i=0;i<links.length;i++){
    L[i] = document.createElement('a');
    L[i].setAttribute('class','nav-link');
    L[i].setAttribute('href',links[i]+".html");
    L[i].innerHTML=links[i];
    document.getElementById("li"+i).appendChild(L[i]);}
/*******************************/            
const linker = document.createElement("link");
linker.setAttribute("rel","icon");
linker.setAttribute("type","image/x-icon");
linker.setAttribute("href","../IMG/icon1.jpg");
document.getElementById("head").appendChild(linker);
/*******************************/