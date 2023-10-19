
$(function () {
    
    var w_width = $(window).width(); //画面サイズ取得
    var w_height = $(window).height(); //画面サイズ取得
    var pad_mode = 1080;//padも含む
    // var sp_mode = 560;//
    //今回はヘッダ考慮しない
    // var headerhight = $('header').height() + 50; 
    var headerhight = 0; 

    /****************/
    /*アンカーリンクがあればそこまでスクロール*/
    /****************/

    var urlHash = location.hash;
    if(urlHash) {
        //外部から＃にリンクされた場合、ヘッダ分オフセットする
        var speed = 200;
        //今回はheaderhight,adjustはなし。
        var position_adjust = 0;
        $('body,html').stop().scrollTop(0);
        setTimeout(function(){
            var target = $(urlHash);
            var position = target.offset().top - headerhight + position_adjust;
            $('body,html').stop().animate({scrollTop:position}, speed);
        }, 100);
    }
    //ページ内スクロール
    $('a[href^="#"]').click(function() {
        //ページ内リンク
        var speed = 1500;
        var href= $(this).attr("href");
        // var target = $(href);
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerhight;
        $('body,html').stop().animate({scrollTop:position}, speed, 'easeOutQuart');
        return false;  
    });

    // 「ページトップへ」の要素を隠す
    $('#scroller').hide();

    // スクロールした場合
    $(window).scroll(function () {
        // スクロール位置が指定の値を超えた場合
        
        if ($(this).scrollTop() > 200) {
            // 「ページトップへ」をフェードイン
            $('#scroller').fadeIn();
        } else { // スクロール位置が100以下の場合
            // 「ページトップへ」をフェードアウト
            $('#scroller').fadeOut();
        }
    });


    /****************/
    /*幅が変わったら１回リロード*/
    /****************/
    // var timer = false;
    // var prewidth = window.innerWidth;
    // $(window).resize(function() {
    //     if (timer !== false) {
    //         clearTimeout(timer);
    //     }
    //     timer = setTimeout(function() {
    //         var nowWidth = window.innerWidth;
    //         if(prewidth !== nowWidth){
    //             // リロード
    //             var bodyid = $('body').attr('id');
    //             if(bodyid=='vod_mov'){
    //                 //リロードキャンセル
    //             }else{
    //                 location.reload();
    //             }
                
    //         }
    //         prewidth = nowWidth;
    //     }, 200);
    // });




   
    /****************/
    /*汎用アコーディオン*/
    /****************/
	$('.acc_cont').hide();
    $('.acc_label').on("click",function(){
        $(this).next('.acc_cont').slideToggle(300);
        $(this).next('.acc_cont').slideToggle(300);
        $(this).toggleClass('active');
    });
    $('.acc_close_bottom').on("click",function(){
        $(this).parent('.acc_cont').slideUp(300);
        $(this).parent('.acc_label').toggleClass('active');
    });

    //高さチェックを行わない場合（チェックすると一度ページがカクッとなる）
    $('.acc_label_nc').on("click",function(){
        $(this).next('.acc_cont').slideToggle(300);
        $(this).toggleClass('active');
    });


    $('.acc_cont_up').hide();
    $('.acc_label_up').on("click",function(){
        $(this).prev('.acc_cont_up').slideToggle(300);
        $(this).toggleClass('active');
    });
    /****************/
    /*汎用タブ（アコーディオン）*/
    /****************/
    $('.tab .tab_panel').hide();
    $('.tab + .tab_label').addClass('active');
    $('.tab_label.active + .tab_panel').show();

    $('.tab_label').on("click",function(){
        $('.tab_label').removeClass('active');
        $(this).addClass('active');
        $('.tab_panel').slideUp(100);
        // $(this).next('.tab_panel').slideDown(300,check_clumn_height);
        //callback:スライド後左右高さ揃える
        $(this).next('.tab_panel').slideDown(300);
    });

    /****************/
    /*タブ切り替え*/
    /****************/
    var tabList = $('.team_tab-list li');
    var tabSet = $('.team_tab-item .tab-set');
 
    // 最初の要素のみを表示させる
    tabSet.hide();
    $('.team_tab-item .tab-set:first-child').show();
    
    // タブをクリックしたら、ペアになる要素を表示する
    tabList.click(function () {
        tabList.removeClass('is-active');
        $(this).addClass('is-active');
        var index = tabList.index(this);
        tabSet.hide();
        tabSet.eq(index).fadeIn();
    });

    /****************/
    /*スクロールフェード*/
    /****************/
    var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
   
    
});