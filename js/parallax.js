window.onload = function () {
  var $section = $('.parallax > .content')
  var $sectionInfo = []
  $section.each(function () {
    var $this = $(this)
    $sectionInfo.push($this.offset().top)
  })
  console.log($sectionInfo)
  $section.css({ position: 'fixed' })
  $(window).scroll(function () {
    var sct = $(this).scrollTop()
    $section.each(function (idx) {
      var $this = $(this)
      var $newtop = $sectionInfo[idx] - sct
      if (sct > $sectionInfo[idx]) {
        $newtop *= 0.5
      }

      $this.css({ top: $newtop })
    })
  })

  $('.nav > li:first-child').click(function (e) {
    e.preventDefault(e)
    var tt = $sectionInfo[0]
    // console.log(tt);
    $('html').stop().animate({ scrollTop: tt }, 300)
  })
  $('.card_f:first-child').click(function (e) {
    e.preventDefault(e)
    var tt = $sectionInfo[0]
    // console.log(tt);
    $('html').stop().animate({ scrollTop: tt }, 300)
  })
  $('.nav > li:eq(1)').click(function (e) {
    e.preventDefault(e)
    var tt = $sectionInfo[1]
    // console.log(tt);
    $('html').stop().animate({ scrollTop: tt }, 600, 'easeOutCubic')
  })
  $('.card_f:eq(1)').click(function (e) {
    e.preventDefault(e)
    var tt = $sectionInfo[1]
    // console.log(tt);
    $('html').stop().animate({ scrollTop: tt }, 600, 'easeOutCubic')
  })
  $('.nav > li:eq(2)').click(function (e) {
    e.preventDefault(e)
    var tt = $sectionInfo[2]
    // console.log(tt);
    $('html').stop().animate({ scrollTop: tt }, 600, 'easeOutCubic')
  })
  $('.card_f:eq(2)').click(function (e) {
    e.preventDefault(e)
    var tt = $sectionInfo[2]
    // console.log(tt);
    $('html').stop().animate({ scrollTop: tt }, 600, 'easeOutCubic')
  })
  $('.nav > li:eq(3)').click(function (e) {
    e.preventDefault(e)
    var tt = $sectionInfo[3]
    // console.log(tt);
    $('html').stop().animate({ scrollTop: tt }, 600, 'easeOutCubic')
  })
}
