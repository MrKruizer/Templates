var ident=['190301'], nameS=['Admin'],Depart=['Administration'], reqAdm, ind;
for (let i of document.querySelectorAll("#panel div")){
	if (i.id!='clean' | i.id!='Ok'){
		i.onclick=()=>{
        inp.value+=i.innerHTML;
		}
	}
}
clean.onclick=()=>{
	inp.value='';
}
Ok.onclick=()=>{
	for (i of ident){
	if (inp.value==i)
		alert('access is allowed');
		inp.value='';
		ind=ident.indexOf(i);
		loadPage(welcome, LogIn, 'block');
		welcName.innerHTML=nameS[ind];
		welcDep.innerHTML=Depart[ind];
	}
}
function prBar(ope,dispe){
	if (progr.value>=progr.max){
		loading.style.display='none';
		ope.style.display=dispe;
		progr.value=0;
		return false;
	}
	else{
		progr.value++;
		setTimeout(()=>{prBar(ope,dispe)}, Math.floor(Math.random()*100));
	}
}
function loadPage(op, close, disp){
	close.style.display='none';
	loading.style.display= 'block';
	prBar(op, disp);
}


logBut.onclick=()=>{loadPage(LogIn,Start,'block')};
var reqAdm;
regist.onclick=()=>{loadPage(reg, Start, 'block')};
request.onclick=()=>{
	reqAdm=Math.floor(1000+Math.random()*9000);
	console.log(reqAdm);
}
let nam,dep,rand;
function clack(){
	if(reqAdm!=AdmCode.value & reqAdm!=''){
		alert('denied access');
		loadPage(Start, reg, 'block')
	}
	else{if (Names.value!=0 & depart.value!=0 & Ident.value==''){
		nam=Names.value;
		dep=depart.value;
		rand=Math.floor(100000+Math.random()*900000)
		Ident.value=rand;
		return false;
		}
	}
	if(Ident.value!=''){
		console.log(nam, dep, rand);
		ident.push(rand);
		nameS.push(nam);
		Depart.push(dep);
		loadPage(Start, reg, 'block');
		Ident.value='';
		}
	}
