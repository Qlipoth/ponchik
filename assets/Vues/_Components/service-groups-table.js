Vue.component('fns-service-groups-table', Vue.extend({
    template: [
        '<div class="table-responsive">',
            '<table class="table table-striped sg-table" v-if="tabledata">',
                '<thead>',
                    '<tr>',
                        '<th>Название сервиса</th>',
                        '<th>Доступность %,<br>Время отказа</th>',
                        '<th>Состояние сервиса</th>',
                    '</tr>',
                '</thead>',
                '<tr v-for="service in tabledata.services">',
                    '<td><a href="/serviceGroup/{{tabledata.title}}/s/{{service.title}}">{{service.title}}</a></td>',
                    '<td>',
                        '<div class="t-access">',
                            '<div>',
                                '<i class="good fa fa-circle"></i>',
                                '<span>{{service.access.percent}}</span>',
                            '</div>',
                            '<fns-timer :time="service.access.time"></fns-timer>',
                        '</div>',
                    '</td>',
                    '<td class="barchart">',
                        '<fns-multibarchart><fns-multibarchart>',
                    '</td>',
                '</tr>',
            '</table>',
        '</div>'
    ].join(' '),
    data: function() {
        return {
            serviceGroup: null,
            dataready: false,
        };
    },
    props: {
        tabledata: {
            type: Object,
            defaults: []
        }
    },
    ready: function() {
        var vm = this;
        $('.sg-panel').mCustomScrollbar();
        

    },
    methods: {
         startCount: function(service) {
            var vm = this;
            var duration; // = moment.duration(moment() - vm.lastEvent, 'milliseconds');
            var ms; // miliseconds
            setInterval(function() {
                // console.log(vm.lastEvent.date)
                duration = moment.duration(moment() - moment(service.time), 'milliseconds');
                ms = duration.asMilliseconds();
                //
                // меняем цвет
                //
                vm.time = moment(ms).format('hh:mm:ss');
            }, 1000);
        },
    },
}));
