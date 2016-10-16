$(function() {

    window.vmc = new Vue({
        el: '#vue-charts',
        template: [
         '<div class="panel panel-default tabs">',
                '<ul class="nav nav-tabs" role="tablist">',
                    '<li class="active">',
                        '<a href="#tab-first" role="tab" data-toggle="tab">Online</a>',
                    '</li>',
                    '<li>','<a href="#tab-second" role="tab" data-toggle="tab">Статистика</a>',
                    '</li>',
                    // '<li>',
                    //     '<a href="#tab-third" role="tab" data-toggle="tab">Управление</a>',
                    // '</li>',
                '</ul>',
                '<div class="panel-body tab-content">',
                    '<div class="tab-pane active" id="tab-first">',
                        '<div class="panel panel-default">',
                            '<div class="panel-heading">',
                                '<h3 class="panel-title">Результаты тестирования</h3>',
                            '</div>',
                            '<div class="panel-body">',
                                '<div id="chart-single" style="height: 300px;"><svg></svg></div>',
                            '</div>',
                            '<div class="col-md-12" style="height:15px">',
                                '<div class="col-md-1">Норма</div>',
                                '<div class="col-md-11" style="height:15px; background:green"></div>',
                            '</div>',
                            '<div class="panel-body">',
                                '<div id="chart-7" style="height: 300px;"><svg></svg></div>',
                            '</div>',
                        '</div>',
                    '</div>',
                    '<div class="tab-pane" id="tab-second">',
                        '<div class="row">',
                            '<div class="col-lg-4 col-md-6">',
                                '<div class="panel panel-default service-avalible">',
                                    '<div class="panel-heading">',
                                        '<h3 class="panel-title">Доступность сервиса</h3>',
                                    '</div>',
                                    '<div style="margin-bottom: 0;margin-top: 60px;" class="panel panel-default tabs service-avalible-panel">',
                                        '<ul class="nav nav-tabs nav-justified">',
                                            '<li class="active"><a href="#tab1" data-toggle="tab"><span>Час<span><br><span>98,1%</span></a></li>',
                                            '<li><a href="#tab2" data-toggle="tab"><span>День</span><br><span>98,2%</span></a></li>',
                                            '<li><a href="#tab3" data-toggle="tab"><span>Неделя</span><br><span>98,3%</span></a></li>',
                                            '<li><a href="#tab4" data-toggle="tab"><span>Месяц</span><br><span>98,4%</span></a></li>',
                                            '<li><a href="#tab5" data-toggle="tab"><span>Год</span><br><span>98,5%</span></a></li>',
                                        '</ul>',
                                        '<div class="panel-body tab-content service-avalible-tab-content">',
                                            '<div class="tab-pane active" id="tab1">',
                                                '<p class="col-md-12 text-center"><strong>98,1%</strong><p>',
                                            '</div>',
                                            '<div class="tab-pane" id="tab2">',
                                                '<p class="col-md-12 text-center"><strong>98,2%</strong><p>',
                                            '</div>',
                                            '<div class="tab-pane" id="tab3">',
                                                '<p class="col-md-12 text-center"><strong>98,3%</strong><p>',
                                            '</div> ',
                                            '<div class="tab-pane" id="tab4">',
                                                '<p class="col-md-12 text-center"><strong>98,4%</strong><p>',
                                            '</div> ',
                                            '<div class="tab-pane" id="tab5">',
                                                '<p class="col-md-12 text-center"><strong>98,5%</strong><p>',
                                            '</div> ',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="panel panel-default">',
                                    '<div class="panel-heading">',
                                        '<h3 class="panel-title">Количество инциндентов</h3>',
                                    '</div>',

                                    '<div class="panel-body">',
                                        '<div class="col-md-12" id="chart3"><svg></svg></div>',
                                    '</div>',
                                '</div>',
                            '</div>',
                            '<div class="col-lg-4 col-md-6">',
                                '<div class="panel panel-default">',
                                    '<div class="panel-heading">',
                                        '<h3 class="panel-title">Изменения состояния</h3>',
                                         '<ul class="panel-controls panel-controls-title">',
                                           '<li><a href="#" class="panel-fullscreen"><span class="fa fa-expand"></span></a></li>',
                                        '</ul>',
                                    '</div>',
                                    '<div class="panel-body">',
                                        '<div class="col-md-12" id="chart1"><svg></svg></div>',
                                    '</div>',
                                '</div>',
                                 '<div class="panel panel-default">',
                                    '<div class="panel-heading">',
                                        '<h3 class="panel-title">Относительная длительность инциндентов</h3>',
                                    '</div>',
                                    '<div class="panel-body">',
                                        '<div class="col-md-12" id="chart4"><svg></svg></div>',
                                    '</div>',
                                '</div>',
                            '</div>',
                            '<div class="col-lg-4 col-md-6">',
                                '<div class="panel panel-default">',
                                    '<div class="panel-heading">',
                                        '<h3 class="panel-title">Время ответа</h3>',
                                        '<ul class="panel-controls panel-controls-title">',
                                           '<li><a href="#" class="panel-fullscreen"><span class="fa fa-expand"></span></a></li>',
                                        '</ul>',
                                    '</div>',
                                    '<div class="panel-body padding-0">',
                                        '<div class="chart-holder" id="chart2"><svg></svg></div>',
                                    '</div>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</div>',
                    // '<div class="tab-pane" id="tab-third">',
                    //     '<div class="col-md-8">',
                    //         '<div class="panel panel-default">',
                    //             '<div class="panel-heading">',
                    //                 '<h3 class="panel-title">Расписание запуска</h3>',
                    //             '</div>',
                    //              '<div class="panel-body">',
                    //                 '<table class="table table-bordered">',
                    //                     '<tbody>',
                    //                       '<tr>',
                    //                         '<td>Активный</td>',
                    //                         '<td>',
                    //                             '<label class="switch">',
                    //                                 '<input type="checkbox" class="switch" value="1" checked/>',
                    //                                 '<span></span>',
                    //                             '</label>',
                    //                         '</td>',
                    //                       '</tr>',
                    //                       '<tr>',
                    //                         '<td>Timeout сценария</td>',
                    //                         '<td>секунды</td>',
                    //                       '</tr>',
                    //                       '<tr>',
                    //                         '<td>Timeout транзакции</td>',
                    //                         '<td>30 секунды</td>',
                    //                       '</tr>',
                    //                     '</tbody>',
                    //                   '</table>',
                    //             '</div>',
                    //             '<div class="panel panel-default tabs shedule-tabs">',
                    //                 '<ul class="nav nav-tabs shedule-box" role="tablist">',
                    //                     '<li >',
                    //                         '<a href="#tab-f" role="tab" data-toggle="tab">Простое расписание</a>',
                    //                     '</li>',
                    //                     '<li class="active">',
                    //                         '<a href="#tab-s" role="tab" data-toggle="tab">Расписание</a>',
                    //                     '</li>',
                    //                 '</ul>',
                    //                 '<div class="panel-body tab-content">',
                    //                     '<div class="tab-pane active" id="tab-f">',

                    //                             // '<div class="row shedule-box text-center">',
                    //                             //     '<div class="shedule">',
                    //                             //         '<span class="btn h3">Простое расписание</span><span class="btn h3">Расписание</span>',
                    //                             //     '</div>',
                    //                             // '</div>',
                    //                             '<re-table',
                    //                                 ':url="url"',
                    //                                 ':config="config"',
                    //                                 ':fn-edit="onEdit"',
                    //                                 ':fn-remove="onRemove"',
                    //                                 '>',
                    //                             '</re-table>',

                    //                     '</div>',
                    //                         '<div class="tab-pane active" id="tab-s">',
                    //                             '<div class="panel-body">',
                    //                                 '<p> Расписание</p>',
                    //                             '</div>',
                    //                         '</div>',
                    //                     '</div>',
                    //                 '</div>',
                    //            '</div>',
                    //         '</div>',
                    //     '</div>',
                    // '</div>',
                '</div>',
            '</div>'
        ].join(' '),
        data: {
            url: '/table.json',
            config: {
                columns: [
                    {
                        title: '#',
                        data: 'id',
                    },
                    {
                        title: 'Дата/время начала',
                        data: 'createdAt',
                        render: function(value) {
                            return moment(value).format(ddf);
                        },
                    },
                    {
                        title: 'Дата/время окончания',
                        data: 'updatedAt',
                        render: function(value) {
                            return moment(value).format(ddf);
                        },
                    },
                    {
                        title: 'Количество повторений',
                        data: 'count',

                    },
                    {
                        title: 'Интервал повтора',
                        data: 'interval',

                    },
                ],
            }
        },
        computed: {
        },
        methods: {
             onEdit: function(data, cell, dataTable) {
                location.href = 'profile/edit?id='+data.id;
            },
            onRemove: function(data, cell, dataTable) {
                mp.alert('not implemented yet');
            },
        },
    });
    setTimeout(function(){toggleTabs();},200)
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        console.log(target)
        if ((target == '#tab-first')) {
            window.startChartSingle();
            window.startChart7();
        }
        if ((target == '#tab-second')) {
            window.changedStates();
            window.responseTime();
            window.eventCount();
            window.eventDuration();
        }
        if ((target == '#tab-third')) {
            $( "a[href='#tab-f']" ).trigger( "click" );
        }
    });

    // $(window).on('hashchange', function(e) {
    //     console.log('hashchange !', location)
    //     toggleTabs();
    // });
    $(window).on('resize', function(e) {
        window.startChartSingle();
        window.startChart7();
        window.changedStates();
        window.responseTime();
        // window.eventCount();
        // window.eventDuration();
    })

})

window.toggleTabs = function() {
    console.log('taggl')
    if (location.hash === "#tab=1") {
        $( "a[href='#tab-first']" ).trigger( "click" );
    }
    if (location.hash === "#tab=2") {
        $( "a[href='#tab-second']" ).trigger( "click" );
    }
    if (location.hash === "#tab=3") {
        $( "a[href='#tab-third']" ).trigger( "click" );
    }
}
