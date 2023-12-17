// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

	//ふわっと動くきっかけのクラス名と動きのクラス名の設定
	$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
	　　var elemPos = $(this).offset().top-50; //要素より、50px上の
	　　var scroll = $(window).scrollTop();
	　　var windowHeight = $(window).height();
	　　if (scroll >= elemPos - windowHeight){
	　　$(this).addClass('fadeUp');
	　　// 画面内に入ったらfadeInというクラス名を追記
	　　}else{
	　　　$(this).removeClass('fadeUp');
	　　// 画面外に出たらfadeInというクラス名を外す
	　　}
	　　});
	
	//関数でまとめることでこの後に違う動きを追加することが出来ます
	$('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
	　　var elemPos = $(this).offset().top-50; //要素より、50px上の
	　　var scroll = $(window).scrollTop();
	　　var windowHeight = $(window).height();
	　　if (scroll >= elemPos - windowHeight){
	　　$(this).addClass('fadeDown');
	　　// 画面内に入ったらfadeDownというクラス名を追記
	　　}else{
	　　　$(this).removeClass('fadeDown');
	　　// 画面外に出たらfadeDownというクラス名を外す
	　　}
	　　});
	
	
	}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
	
	// 画面をスクロールをしたら動かしたい場合の記述
		$(window).scroll(function (){
			fadeAnime();/* アニメーション用の関数を呼ぶ*/
		});// ここまで画面をスクロールをしたら動かしたい場合の記述




		

//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//headerの高さ以上になったら
			$('#header').addClass('fixed');//fixedというクラス名を付与
		}else{//それ以外は
			$('#header').removeClass('fixed');//fixedというクラス名を除去
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});


// // ナビメニューからリンク先までスクロールさせる

$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-130;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});


$(function () {
	// 別ページの場合は以下
var urlHash = location.hash;
if (urlHash) {
	$('body,html').stop().scrollTop(0);
	setTimeout(function(){
		// ヘッダー固定の場合はヘッダーの高さを数値で入れる、固定でない場合は0
		var headerHight = 130;
		var target = $(urlHash);
		var position = target.offset().top - headerHight;
		$('body,html').stop().animate({scrollTop:position}, 400);
}, 100);
}
});
// Page top リンクを出す


//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
		$('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
	}else{
		if(
			$('#page-top').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
			$('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
			$('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
	$('body,html').animate({
			scrollTop: 0//ページトップまでスクロール
	}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
	return false;//リンク自体の無効化
});





// ハンバーガーメニュー　横からスライド


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});





//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});


// カルーセル用-Voice
$('.slider').slick({
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	speed: 300,//スライドのスピード。初期値は300。
	slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	centerMode: true,//要素を中央ぞろえにする
	variableWidth: true,//幅の違う画像の高さを揃えて表示
	dots: false,//下部ドットナビゲーションの表示
});