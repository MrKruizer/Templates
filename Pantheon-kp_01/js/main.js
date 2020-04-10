'use strict'
let width=screen.width;
let name_block=['first','second','third','fourth','fiveth','sixth'];
let numer=0;
let open_menu=false;
let open_detail=false;

	let xhr= new XMLHttpRequest();
	xhr.open('GET','../php/get_first_set_state.php',false);
	xhr.send();
	let first_set=JSON.parse(xhr.responseText);
	xhr.abort();
	xhr.open('GET','../php/get_second_set_state.php',false);
	xhr.send();
	let second_set=JSON.parse(xhr.responseText);

$('form')[0].addEventListener('submit',(e)=>{
	e.preventDefault();
	let mail=mails.value;
	let name=named.value;
	fetch('php/regist.php',{method:'POST',body:JSON.stringify({name:name,email:mail})});
})

for(let key in first_set){
	let el_li=$('<li class="pos_rel"></li>');
	el_li.text(first_set[key].title);
	$('.menu_space ul').append(el_li);
	if( key==0){
		el_li.toggleClass('select');
		$('div.fourth_block div.space_state h3').text(first_set[key].title);
		$('div.fourth_block div.space_state p').text(first_set[key].state_text);
	}
}

for(let key in second_set){
	let el_li=$('<li></li>');
	let dot=$('<div class="dot pos_rel line_block"></div>');
	let icon=$('<div class="change_icon line_block"></div>');
	let tit=$('<p></p>');
	tit.text(second_set[key].title);
	icon.append($('<img src="'+second_set[key].icon_url+'" alt=""/>'));
	el_li.append(dot,icon,tit);
	$('div.changer_cont ul').append(el_li);
	if( key==0) {
		el_li.toggleClass('selected');
		$('div.fiveth_block h3').text(second_set[key].title);
		$('div.fiveth_block .content p:first').text(second_set[key].state_text);
		$('.but_detail').hide();
		$('.detail_block').hide();
		if (second_set[key].add_title!=null && second_set[key].add_title!=false ){
			$('.but_detail').show();
			$('.detail_block p').text(second_set[key].add_text);
			$('.detail_block h3').text(second_set[key].add_title);
	};
	};
}

$('.menu_space ul li').click(function (){
	$('.menu_space ul li.select').toggleClass('select');
	$(this).toggleClass('select');
	$('div.fourth_block div.space_state h3').text(first_set[$('.menu_space ul li').index($(this))].title);
	$('div.fourth_block div.space_state p').text(first_set[$('.menu_space ul li').index($(this))].state_text);
	if (width<=767)	{
		$('div.menu_space ul li.select').append($('div.space_state'));
	}
});
function navigation_on_page(){
	if (numer<5) ++numer
	else numer=0;
	location.hash=name_block[numer];
	$('.'+name_block[numer]+'_block').append($('.but_down'));
	last_block();
}
$('.but_down').click(navigation_on_page);
$('.cont_menu').click(function (){
	if (open_menu==false) {
		$('.main_menu').slideDown('slow');
	} else {$('.main_menu').slideUp('slow');
	}
	open_menu=!open_menu; 
});
$('.change').hover(function (){
	$(this).append($('.but_down'));	
	numer=name_block.indexOf(this.classList.item(0).split('_')[0]);
	last_block();
});
function last_block(){
	if (numer==5)	$('.but_down').css('transform','rotate(180deg)');
	else $('.but_down').css('transform','rotate(0deg)');
}
$('div.changer_cont ul li:last p').css('width','max-content');

$('div.changer_cont ul li .dot,div.changer_cont ul li .change_icon').click(function (){
	$('div.changer_cont ul li.selected').toggleClass('selected').toggleClass('pos_rel');
	$(this).parent().toggleClass('selected').toggleClass('pos_rel');
	$('div.fiveth_block h3').text(second_set[$('div.changer_cont ul li').index($(this).parent())].title);
	$('div.fiveth_block .content p:first').text(second_set[$('div.changer_cont ul li').index($(this).parent())].state_text);
	$('.but_detail').hide();
	$('.detail_block').hide();
	if (second_set[$('div.changer_cont ul li').index($(this).parent())].add_title!=null && second_set[$('div.changer_cont ul li').index($(this).parent())].add_title!=false ){
		$('.but_detail').show();
		$('.detail_block p').text(second_set[$('div.changer_cont ul li').index($(this).parent())].add_text);
		$('.detail_block h3').text(second_set[$('div.changer_cont ul li').index($(this).parent())].add_title);
	};
	if (width<=767){ 
		$('.changer_cont ul li.selected').append($('div.fiveth_block div.content'));
		$('.changer_cont ul li:not(:first).selected').parent().css('top','-12px').css('height',$('.line_changer').height()+0+'px');
		$('.changer_cont ul li:first.selected').parent().css('top','-50px').css('height',$('.line_changer').height()+65+'px');
		$('.changer_cont ul li:eq(2).selected').parent().css('top','-17px').css('height',$('.line_changer').height()+35+'px');
		$('.changer_cont ul li:eq(3).selected').parent().css('top','-17px').css('height',$('.line_changer').height()+35+'px');
	}

	else if (width<1170 && width>767){
		$('.detail_block').css('width',$('.detail_block').parent().width()-$('.but_detail').width()-50+'px');
		$('.line_changer').css('width',$('.changer_cont').parent().width()+'');
		$('.changer_cont ul').css('width',$('.line_changer').width()+33+'');
	}
});
$('.but_detail').click(function (){
	if (open_detail==false){
		$('.detail_block').slideDown('slow').css('display', 'inline-block');
	}else{
		$('.detail_block').slideUp('slow');
	}
	open_detail=!open_detail;
});
if (width>1170){
	$('div.changer_cont ul li p').toggleClass('pos_abs');
	$('div.changer_cont ul li:last p').css('top',-$('div.changer_cont ul li:last p').width()+10);
	$('div.changer_cont ul li:eq(3) p').css('left','0');
	$('div.menu_space ul').css('height',$('div.space_state').height());
	$('.detail_block').css('width',$('.detail_block').parent().width()-$('.but_detail').width()-250+'px');
	$('.line_changer').css('height',$('.changer_cont').parent().height()+'');
	$('.changer_cont ul').css('height',$('.line_changer').height()+27+'');
	$('div.fiveth_block div.content').css('width', $('div.fiveth_block div.content').width()-$('.changer_cont').width()-10+'px');
	$('div.sixth_block div.texts').css('width',$('div.sixth_block  div.texts').parent().width()-$('div.subm').width()-140+'px');
	$('div.buy_block div.second').css('width', $('div.buy_block div.second').parent().width()-$('div.buy_block div.first').width()-45+'px');
	$('div.changer_cont ul li.selected');
}
if (width<=1170){
	$('div.facts').css({"overflow":"hidden",'fontSize':'1.2em','height':'8em'});
	$('div.facts ul').css({"width":'max-content',"margin":"0"});
	setInterval(()=>{
		$('div.facts ul li:first').animate({"width":"0"},2000);
		setTimeout(()=>{$('div.facts ul').append($('div.facts ul li:first'))},2000);
		$('div.facts ul li:first').animate({"width":"12em"},2000);
	},7000)
	}
if (width<=1170 && width>767){
	$('div.menu_space ul').css('height',$('div.space_state').height());
	$('.detail_block').css('width',$('.detail_block').parent().width()-$('.but_detail').width()-50+'px');
	$('.line_changer').css('width',$('.changer_cont').parent().width()+'');
	$('.changer_cont ul').css('width',$('.line_changer').width()+33+'');
	$('.changer_cont ul li div').toggleClass('line_block')
	$('.changer_cont ul li').css('display','flex').css('flexFlow','column').css('align-items','center');
	$('.changer_cont ul li:last p').css('left',-$('.changer_cont ul li:last p').width()-5);
	$('div.third_block div.content div.frame').toggleClass('pos_abs').css('float','right');
	$('div.third_block div.content div.state').prepend($('div.third_block div.content div.frame'));
	if (width<1000){
		$("div.buy_block").css({'height':'auto'});
		$(".buy_block .second h3").css({"top":"5%","left":"280px"});
		$(".buy_block .second p").css({"top":"20%","left": "280px"});
		$("div.buy_block div.second").css({'width':'100%','display': 'flex','justify-content': 'space-between',"margin-left":"0"});
		$("div.buy_block div.second div.mars").css({'height': 'min-content','margin-top': '10px'});
		$("div.buy_block div.second div.but_buy").css({'height': 'min-content'});
		$("div.buy_block div.second div.flex-between").css({'width': '100%'});
		$('.buy_block').toggleClass('pos_rel');
		$('.buy_block .second').toggleClass('line_block').toggleClass('pos_rel');
		$('.buy_block .second p').toggleClass('pos_abs');
		$('.buy_block .second h3').toggleClass('pos_abs');
		$('.buy_block .second div').toggleClass('pos_rel').css('marginLeft','0');
	}
}
if (width<=767){
	$('div.third_block div.content div.state span').before($('div.third_block div.content div.frame'));
	$('div.second_block div.center .flex').toggleClass('flex');
	$('div.second_block div.center div div').toggleClass('line_block');
	$('div.third_block div.content div.frame').toggleClass('pos_abs')
	$('div.buy_block div').toggleClass('pos_rel');
	$('div.menu_space').toggleClass('line_block');
	$('div.space_state').toggleClass('line_block');
	$('div.menu_space ul li.select').append($('div.space_state'));
	$('.changer_cont ul li.selected').append($('div.fiveth_block div.content'));
	$('.line_changer').css('height',$('.changer_cont ul').height()-20+'px');
	$('.changer_cont ul li:first.selected').parent().css('top','-50px').css('height',$('.line_changer').height()+65+'px');
	$('div.sixth_block div.content div').toggleClass('line_block');
	$('div.sixth_block div.content div.texts').toggleClass('pos_abs');
	$('div.sixth_block div.content').append($('div.subm'));
	if (width<550 && width>=450){
		$("div.second_block").css('paddingBottom','200px')
	}
}

