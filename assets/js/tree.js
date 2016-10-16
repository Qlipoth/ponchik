$(function() {
    var tree = [
    // {
            // text: "<h3 class='col-md-12'><span class='col-md-2'>ЕКП</span><span class='col-md-10'><img class='img-responsive'src='img/parent-green-line.jpg'></span></h3>",
            // nodes: [
                {
                    text: "<strong class='col-md-12'><span class='col-md-2'>On-line</span><span class='col-md-10'><img class='img-responsive'src='img/child-green-line.jpg'></span><strong>",
                    href: "/charts#tab=1"
                }, {
                    text: "<strong class='col-md-12'><span class='col-md-2'>Статистика</span><span class='col-md-10'><img class='img-responsive'src='img/child-green-line.jpg'></span><strong>",
                    href: "/charts#tab=2"
                }, {
                    text: "<strong class='col-md-12'><span class='col-md-2'>Управление</span><span class='col-md-10'><img class='img-responsive'src='img/child-green-line.jpg'></span><strong>",
                    href: "/charts#tab=3"
                },
            // ]
        // },
        // {
        // text: "<h3 class='col-md-12'><span class='col-md-2'>Функциональная группа G1</span><span class='col-md-10'><img class='img-responsive'src='img/parent-green-line.jpg'></span></h3>",
        // nodes: [
        {
            text: "<strong class='col-md-12'><span class='col-md-2'>Расчет стоимости патента</span><span class='col-md-10'><img class='img-responsive'src='img/child-green-line.jpg'></span><strong>",
            href: "/charts#tab=1"
        }, {
            text: "<strong class='col-md-12'><span class='col-md-2'>Яндекс</span><span class='col-md-10'><img class='img-responsive'src='img/child-green-line.jpg'></span><strong>",
            href: "/charts#tab=2"
        }, {
            text: "<strong class='col-md-12'><span class='col-md-2'>Расчет транспортного налога</span><span class='col-md-10'><img class='img-responsive'src='img/child-green-line.jpg'></span><strong>",
            href: "/charts#tab=3"
        }

        // ]
    // }

    ];

    // $('#tree').treeview({
    //     data: tree,
    //     enableLinks: true
    // });
     $(window).on('hashchange', function(e) {
        console.log('hashchange !', location)
        toggleTabs();
    });

})
