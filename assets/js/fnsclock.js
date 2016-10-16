$(function() {
    moment.lang('ru');
    setInterval(function() {
        var bigDate = moment().format('HH:mm');
        var smallDate = moment().lang("ru").format('D MMMM YYYY г.');
        var weekDay = moment().lang("ru").format('dddd');

        $('#fnsclock >.left-part #d').text(smallDate);
        $('#fnsclock >.left-part #wd').text(weekDay);
        $('#fnsclock >.right-part .h1').text(bigDate);
    }, 100)

})
