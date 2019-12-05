
function addTable(){
	for (let i=0;i<8;i++){
	tr=$('<tr></tr>')
		for (let j=0;j<8;j++){
			td=$('<td></td>')
			tr.append(td);
			if ((i+j)%2){ td.css('background','whitesmoke'); td.addClass('white')}
			else {td.css('background','rgb(20,20,20)'); td.addClass('black')}
		}
		$('#tbo').append(tr)	
	}	
}
function setChess(){
	$('td').filter('.black').slice(0,12).append('<img src="img/Шашка.gif" class="cb">');	
	$('td').filter('.black').slice(20,32).append('<img src="img/Шашка2.gif" class="cw">');	
	$('td').click(chest);
}
$('#but').one('click',addTable);
$('#but2').one('click',setChess);
let turn=true, X1, Y1, chess, X2, Y2,selTr, eats={ x:[],y:[]},eat=false, unity;
function chest(){
	selChes=this;
	function choice(){
		unity='choice';
		if ($('.black').is(selChes)){
			if ($(selChes.children).is($('img.cb')) && turn==true){
				chess=selChes.children[0];
				selTr=selChes.parentNode;
				for (j=0;j<selTr.children.length;j++){
					if (selTr.children[j]==selChes) {X1=j; break;}
				}
				for (i=0;i<tbo.children.length;i++){
					if (tbo.children[i]==selTr) {Y1=i; break;}
				}
				$(tbo.children[Y1+1].children[X1-1]).css('box-shadow','inset 0 0 5px 1px rgba(255,255,255,0.9)');
				$(tbo.children[Y1+1].children[X1+1]).css('box-shadow','inset 0 0 5px 1px rgba(255,255,255,0.9)');
			}
			else if ($(selChes.children).is($('img.cw')) && turn==false){
				chess=selChes.children[0];
				selTr=selChes.parentNode;
				for (j=0;j<selTr.children.length;j++){
					if (selTr.children[j]==selChes) {X1=j; break;}
				}
				for (i=0;i<tbo.children.length;i++){
					if (tbo.children[i]==selTr) {Y1=i; break;}
				}
				$(tbo.children[Y1-1].children[X1-1]).css('box-shadow','inset 0 0 5px 1px rgba(255,255,255,0.9)');
				$(tbo.children[Y1-1].children[X1+1]).css('box-shadow','inset 0 0 5px 1px rgba(255,255,255,0.9)');
			}
			$(chess).css('box-shadow','0 0 5px 0 rgba(0,255,0,0.9)');
			eat=chanceEat();
			}
		}
	function step(){
		unity='step';
		selTr=selChes.parentNode;
		for (j=0;j<selTr.children.length;j++){
			if (selTr.children[j]==selChes) {X2=j; break;}
		}
		for (i=0;i<tbo.children.length;i++){
			if (tbo.children[i]==selTr) {Y2=i; break;}
		}
		if (X2==X1 && Y2==Y1
			){
			$(chess).css('box-shadow','none')
			chess=undefined;
			cleanEats();
			$(tbo.children[Y1+1].children[X1-1]).css('box-shadow','none');
			$(tbo.children[Y1+1].children[X1+1]).css('box-shadow','none');
			$(tbo.children[Y1-1].children[X1-1]).css('box-shadow','none');
			$(tbo.children[Y1-1].children[X1+1]).css('box-shadow','none');
			return;
		}
		else if (eat){
			if (eats.x.includes(X2) && eats.y.includes(Y2)){
				if ($(tbo.children[Y2+(Y2-Y1)].children[X2+(X2-X1)]).is(':empty'))
					$(tbo.children[Y2].children[X2].children[0]).css('box-shadow','0 0 5px rgba(255,0,0,0.9)');
					$(tbo.children[Y2].children[X2].children[0]).remove();
					$(tbo.children[Y2+(Y2-Y1)].children[X2+(X2-X1)]).append(chess);
					cleanEats();
					eat=chanceEat()
					if (!eat) {
						turn=!turn;
						$(chess).css('box-shadow','none')
						chess=undefined;};
			};
		}
		else if(selChes.class!='white' && $(selChes).is(':empty')){
			if (chess.className=='cb'){
				if( (X1-1)<=X2 && X2<=(X1+1) && (Y1)<=Y2 && Y2<=(Y1+1)){
					$(tbo.children[i].children[j]).append(chess);
					turn=false
					$(chess).css('box-shadow','none')
					chess=undefined;
				};
			}
			else if((X1-1)<=X2 && X2<=(X1+1) && (Y1-1)<=Y2 && Y2<=(Y1)){
				$(tbo.children[i].children[j]).append(chess);
				turn=true;
				$(chess).css('box-shadow','none')
				chess=undefined;
				}

		}
		$(tbo.children[Y1+1].children[X1-1]).css('box-shadow','none');
		$(tbo.children[Y1+1].children[X1+1]).css('box-shadow','none');
		$(tbo.children[Y1-1].children[X1-1]).css('box-shadow','none');
		$(tbo.children[Y1-1].children[X1+1]).css('box-shadow','none');
		cleanEats();
	}
	function chanceEat(){
		unity='chanceEat';
		for (i=Y1-1;i<Y1+2;i++){
			for (j=X1-1;j<X1+2;j++){
				if(!$(tbo.children[i].children[j]).is(':empty') && tbo.children[i].children[j]!=selChes && tbo.children[i].children[j].children[0].className!=chess.className && $(tbo.children[Y2+(Y2-Y1)].children[X2+(X2-X1)]).is(':empty')){
					eats.x.push(j);
					eats.y.push(i);
					$(tbo.children[i].children[j].children[0]).css('box-shadow','0 0 5px rgba(255,0,0,0.9)');
				}
			}
		}
		if (eats.x.length!=0) return true
		else return false;
	}
	function cleanEats(){
		unity='cleanEats';
		for (a=0;a<eats.x.length;a++){
			$(tbo.children[eats.y[a]].children[eats.x[a]].children[0]).css('box-shadow','none');
		}
		eats.x=[];
		eats.y=[];
	}
	if (chess!=undefined){step()}
	else choice();
	}