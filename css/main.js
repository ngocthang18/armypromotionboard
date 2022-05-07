const collapsibles = document.querySelectorAll(".colappsible");
collapsibles.forEach((item) =>
item.addEventListener("click", function () {
this.classList.toggle("colapssible--extented");
})
);
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30
    });
	$(".categories span").on("click", function(){
	  var filter = $(this).html().toLowerCase();
    var slidesxcol;
	  $(".categories span")
	  $(".categories span").removeClass("active");
	  $(this).addClass("active");
	  
	  if(filter=="all"){
	  	$("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
      if($(".swiper-slide").length > 6)
        slidesxcol = 3;
      else slidesxcol = 1;
      swiper.destroy();
      swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        slidesPerColumn: slidesxcol,
        paginationClickable: true,
        spaceBetween: 30
    });
	  }
	  else {
		$(".swiper-slide").not("[data-filter='"+filter+"']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
		  $("[data-filter='"+filter+"']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
      console.log($(".swiper-slide").length)
      if($(".swiper-slide").length > 6)
        slidesxcol = 3;
      else slidesxcol = 1;
      swiper.destroy();
      swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        slidesPerColumn: slidesxcol,
        paginationClickable: true,
        spaceBetween: 30
    });
	  }
	})