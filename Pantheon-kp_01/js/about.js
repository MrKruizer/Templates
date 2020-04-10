let width=screen.width;
let name_block=['first','about','sixth'];
let numer=0;
let open_menu=false;
function navigation_on_page(){
	if (numer<2) ++numer
	else numer=0;
	location.hash=name_block[numer];
	$('.'+name_block[numer]+'_block').append($('.but_down'));
	last_block();
}
$('.change').hover(function (){
	$(this).append($('.but_down'));	
	numer=name_block.indexOf(this.classList.item(0).split('_')[0]);
	last_block();
});
function last_block(){
	if (numer==2)	$('.but_down').css('transform','rotate(180deg)');
	else $('.but_down').css('transform','rotate(0deg)');
}
if (width>1170) $('div.sixth_block div.texts').css('width',$('div.sixth_block  div.texts').parent().width()-$('div.subm').width()-140+'px')
else if(width<=767) {
	$('div.sixth_block div.content div').toggleClass('line_block');
	$('div.sixth_block div.content div.texts').toggleClass('pos_abs');
	$('div.sixth_block div.content').append($('div.subm'));};
$('.cont_menu').click(function (){
	if (open_menu==false) {
		$('.main_menu').slideDown('slow');
	} else {$('.main_menu').slideUp('slow');
	}
	open_menu=!open_menu; 
});