Vue.component('fns-incident', Vue.extend({
    template: [
        '<div class="col-md-9 serv">',
            '<div class="panel panel-default sg-panel ct">',
                '<div class="scroll-box">',
                    '<div class="panel-heading">',
                        '<h2 class="panel-title">',
                            '<strong>Список инцидентов</strong>',
                        '</h2>',
                    '</div>',
                    '<div class="panel-body service-table">',
                        '<h4><strong>Распределение инцедентов во времени</strong></h4>',
                        '<div class="gradtimeline-box" style="height:80px; margin-top:0">',
                            '<fns-gradtimeline gid="incident"></fns-gradtimeline>',
                        '</div>',
                        '<br>',
                        '<re-slider v-if = "dataready" :min="0" :max="10" :ready = "dataready"></re-slider>',
                        '<br>',
                        '<h4><strong>Список инциндентов</strong></h4>',
                         '<re-table v-if="rows.length"',
                            'v-ref:table',
                            '@onrowclick="getRowData"',
                            ':rows="rows"',
                            ':config="config"',
                            '>',
                        '</re-table>',
                    '</div>',
                '</div>',
            '</div>',
            '<re-modal  :item.sync="showModal" title="Карточка инцидента" :showfooter="false">',
                '<div class="row i-card">',
                    '<div>',
                        '<strong>Критичность</strong>',
                        '<p>',
                            '<i class="fa fa-circle" :class="row.critical.cls"></i>',
                            '{{row.critical.msg}}',
                        '</p>',
                    '</div>',
                    '<div>',
                        '<strong>Начало</strong>',
                        '<p>{{row.startDate}}</p>',
                    '</div>',
                    '<div>',
                        '<strong>Завершение</strong>',
                        '<p>{{row.endDate}}</p>',
                    '</div>',
                    '<div>',
                        '<strong>Длительность</strong>',
                        '<p>{{row.duration}}</p>',
                    '</div>',
                    '<div>',
                        '<strong>Информация</strong>',
                        '<p>{{row.info}}</p>',
                    '</div>',
                    '<div>',
                        '<strong>ID</strong>',
                        '<p>{{row.id}}</p>',
                    '</div>',
                '</div>',
                '<h4>Скриншот</h4>',
                '<div class="screen-box">',
                    '<img src="images/screen.jpg" class="img-responsive">',
                '</div>',
            '</re-modal>',
        '</div>',
    ].join(' '),
    data: function() {
        return {
            showModal: false,
            min: 0,
            max: 10,
            incident: null,
            dataready: false,
            rows: [],
            config: {
                columns: [
                    {
                        title: 'Сервис',
                        data: 'serviceName',
                        render: function(value) {
                            return '<a class="toservice" href="/serviceGroup/'+value+'">'+value+'</a>';
                        }

                    },
                    {
                        class: 'clicable',
                        title: 'Тип неисправности',
                        data: 'icode',
                        render: function(value) {
                            var msg;
                            var cls;
                            if (value === 1) {
                                cls = 'bad';
                                msg = 'Критическая ошибка';
                            }
                             if (value === 2) {
                                cls = 'middle';
                                msg = 'Останов';
                            }
                             if (value === 3) {
                                cls = 'err';
                                msg = 'Ошибка';
                            }
                             if (value === 4) {
                                cls = 'warn';
                                msg = 'Предупреждение';
                            }
                            return '<i class="fa fa-circle '+cls+'"'+'></i>&nbsp;'+msg;
                        },
                    },
                    {

                        title: 'Начало',
                        data: 'startDate',
                        render: function(value) {
                            return moment(value).format('MM.DD.YYYY, HH:mm:ss');
                        },
                    },
                    {

                        title: 'Завершение',
                        data: 'endDate',
                        render: function(value) {
                            return moment(value).format('MM.DD.YYYY, HH:mm:ss');
                        },
                    },
                    {

                        title: 'Длительность',
                        data:'duration'

                    },
                    {

                        title: 'Информация',
                        data: 'info',

                    },
                ],
            },
            row: null,
            showModal: false,
        };
    },
    methods: {
        getData: function() {
            var vm = this;

            $.post('/getIncidentData', { incidentName: decodeURIComponent(location.pathname.split('/').pop())})
            .done(function(response) {
                console.log(response)
                vm.incidents = response.incidents;
                // Надеюсь длительность агрегат сам отдаст в нужном формате
                vm.rows = _.map(vm.incidents, function(row ,indx) {
                    var diffH = moment(row.endDate).diff(moment(row.startDate), 'hours');
                    var diffM = moment(row.endDate).diff(moment(row.startDate), 'minutes') % 60;
                    var diffS = moment(row.endDate).diff(moment(row.startDate), 'seconds') % 60;
                    var duration = (diffH>9? diffH : '0'+diffH)+':'+(diffM>9? diffM : '0'+diffM)+':'+(diffS>9? diffS : '0'+diffS);
                    row.duration = duration;
                    row.unix = +moment();
                    return row;
                });
                vm.dataready = true;
                console.log('rows', vm.rows)
            })
            .fail(function() {
                console.log("error");
            })
        },
        getRowData: function(row) {
            var vm = this;
            var critical = {};

            if (row.icode === 1) {
                critical.cls = 'bad';
                critical.msg = 'Критическая ошибка';
            }
             if (row.icode === 2) {
                critical.cls = 'middle';
                critical.msg = 'Останов';
            }
             if (row.icode === 3) {
                critical.cls = 'err';
                critical.msg = 'Ошибка';
            }
             if (row.icode === 4) {
                critical.cls = 'warn';
                critical.msg = 'Предупреждение';
            }
            vm.row = row;
            vm.row.critical = critical;
            vm.row.startDate = moment(vm.row.startDate ).format('MM.DD.YYYY, HH:mm:ss');
            vm.row.endDate = moment(vm.row.endDate).format('MM.DD.YYYY, HH:mm:ss');
            console.log('getrowdata', vm.row)
            vm.showModal = true;
        }
    },
    ready: function() {
        var vm = this;
        vm.getData();
        $('.ct').mCustomScrollbar();
    },
}));
