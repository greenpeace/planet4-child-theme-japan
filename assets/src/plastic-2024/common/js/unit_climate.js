$(function () {
    var w_width = $(window).width(); //画面サイズ取得
    var w_heigh = $(window).height(); //画面サイズ取得
    var pad_mode = 1140;//
    var sp_mode = 768;//
    //top_banner設定
    //ズームスライダー設定
    $('#top_banner figure .slider')
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      dot: false,
      speed: 2000, // スライド、フェードアニメーションの速度2000ミリ秒
      autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
      variableWidth: false, // 幅の違う画像の高さを揃える
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
    //slider設定
    //slider下の丸いボタン
    $('.scroll_up_btn img.btn_cir').click(function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1500, 'easeOutQuart');
    });
    //02Fact　スライダー
    // $('.fact_slider').slick({
    //     lazyLoad: 'progressive',
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     speed: 1000,
    //     variableWidth: true,
    //     centerMode: true,
    //     slidesToScroll: 1,
    //     pauseOnHover:false,
    //   });
    // スライダーにマウスオーバーでスピード変更
      function slickinit(spped){
        return {
          lazyLoad: 'progressive',
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: spped,
          variableWidth: true,
          centerMode: true,
          slidesToScroll: 1,
          pauseOnHover:false,
        }
      }
      // 初期設定
      $('.fact_slider').slick(slickinit(1000));

      // マウスオーバー
      $('.fact_slider').mouseover(function(e) {
        // $('.fact_slider').slick('unslick');			// 設定をリセット
        // $('.fact_slider').slick(slickinit(5000));		// 再設定：反応早い
        $('.fact_slider').slick('slickSetOption', 'speed', 5000, false); /* こっちだと反応が遅い */
        // console.log("mouseover");
      });
      // マウスアウト
      $('.fact_slider').mouseout(function(e) {
        // $('.fact_slider').slick('unslick');			// 設定をリセット
        // $('.fact_slider').slick(slickinit(1000));	// 再設定：反応早い
        $('.fact_slider').slick('slickSetOption', 'speed', 1000, false); /* こっちだと反応が遅い */
        // console.log("mouseout");
      });
      
      if(w_width > sp_mode){
        $('.latest_crousel').slick({
          lazyLoad: 'progressive',
          dots: false,
          arrows: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 6000,
          speed: 1000,
          variableWidth: true,
          centerMode: true,
          slidesToShow: 2,
          // slidesToShow: 1,
          slidesToScroll: 1,
          // prevArrow:'<img src="yubi-left.svg" alt="" class="prev_icon">',
          // nextArrow:'<img src="yubi-right.svg" alt="" class="next_icon">'
        });
  
        $('.latest_crousel_wrap .latest_arrow_next').on('click', function() {
          $('.latest_crousel').slick('slickNext');
        });
        $('.latest_crousel_wrap .latest_arrow_prev').on('click', function() {
          $('.latest_crousel').slick('slickPrev');
        });
      }else{
        $('.latest_crousel').slick('unslick');
      }

      
});