$('.h2-tag-box').click(function() {
    const currentTarget = $(this)
    const type = currentTarget.data('type')
    $('.active').removeClass('active')
    const tab = $(`#${type}`)
    $('.description-tag-box').each(function (){
        $(this).fadeOut(0)
    })
    tab.fadeIn(500)
    tab.removeClass('hide')
    currentTarget.addClass('active')
})