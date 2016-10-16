$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
           template: [
                '<div class="clearfix general">',
                    '<div class="col-md-9 home" style="margin-top:10px;">',
                            '<div class="ct">',
                                '<fns-map></fns-map>',
                                '<fns-pies :dataready.sync="dataready" :pies.sync="pies">',
                                '</fns-pies>',
                            '</div>',
                    '</div>',
                    '<fns-sidebar>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Данные за период">',
                                '<fns-periodpicker :clickhandler="getData"></fns-periodpicker>',
                            '</fns-tile>',
                        '</div>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Сортировка">',
                                '<fns-sorter :sgroups.sync="pies" :datageted="dataready"></fns-sorter>',
                            '</fns-tile>',
                        '</div>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Состояние групп во времени">',
                                '<h4 class="to-groups-href pull-left" slot="header">',
                                    '<a href="/serviceGroups">',
                                        '<i class="fa fa-share" aria-hidden="true"></i>&nbsp;',
                                    '</a>',
                                '</h4>',
                                '<div class="grad-grad">',
                                    '<fns-gradtimeline gid="allstates"></fns-gradtimeline>',
                                '</div>',
                            '</fns-tile>',
                        '</div>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Статистика по группам">',
                                '<h4 class="to-groups-href pull-left" slot="header">',
                                    '<a href="/serviceGroups">',
                                        '<i class="fa fa-share" aria-hidden="true"></i>&nbsp;',
                                    '</a>',
                                '</h4>',
                                '<h4 class="pull-right to-groups-href error" v-if="!ok" slot="header">',
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
                pies: [],
                widgets: [],
                gridster: null,
            };
        },
        computed: {
        },
        ready: function() {
            var vm = this;

            $.get('/getTemplate')
            .done(function(response) {
                console.log(response)
                vm.widgets = response.layout;
                $('.ct, body').mCustomScrollbar();

            })
            .fail(function() {
                console.log("error");
            })
        },
        methods: {

            initGridster: function() {
                var vm = this;
                vm.gridster = $(".gridster ul").gridster(
                    {
                        widget_margins: [5, 5],
                        widget_base_dimensions: [$(".gridster").width()/4-10, 140],
                    }
                ).data('gridster');
                vm.gridster.disable();
            },
        },
    });

});

