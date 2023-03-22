
// トップを固定するための動きstart

//スクロールすると上部に固定させるための設定を関数でまとめる
// function FixedAnime() {
// 	var headerH = $('#header').outerHeight(true);
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= headerH){//headerの高さ以上になったら
// 			$('#header').addClass('fixed');//fixedというクラス名を付与
// 		}else{//それ以外は
// 			$('#header').removeClass('fixed');//fixedというクラス名を除去
// 		}
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
// 	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
// 	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
// });

// トップを固定するための動きend


// ナビメニューからリンク先までスクロールさせる

$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-130;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
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



// メニューをハンバーガー

//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
  //ヘッダーの高さを取得
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
      $('.openbtn1').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
      $('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
    }else{//それ以外は
      $('.openbtn1').removeClass('fadeDown');//fadeDownというクラス名を除き
      $('#header').removeClass('dnone');//dnoneというクラス名を除く
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});


//ボタンをクリックした際のアニメーションの設定
$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
    $('#g-navi li a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top-0;
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});