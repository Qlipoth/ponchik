$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
            template: [
                '<div class="clearfix">',
                    '<fns-service></fns-service>',
                    '<fns-sidebar>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Данные за период">',
                                '<fns-periodpicker :clickhandler="getData"></fns-periodpicker>',
                            '</fns-tile>',
                        '</div>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Состояние всех сервисов во времени">',
                               '<fns-current-service-state></fns-current-service-state>',
                            '</fns-tile>',
                        '</div>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Доступность сервиса">',
                                '<h4 class="pull-right error to-groups-href" v-if="!ok" slot="header">',
                                    '<i class="fa fa-exclamation-circle"></i>',
                                '</h4>',
                                '<fns-statistic></fns-statistic>',
                            '</fns-tile>',
                        '</div>',
                    '</fns-sidebar>',
                '</div>'
            ].join(' '),
        data: function() {
            return {
                dataready: false,
            };
        },
        computed: {
        },
        ready: function() {
            var vm = this;
        },
        methods: {

        },
    });

});
