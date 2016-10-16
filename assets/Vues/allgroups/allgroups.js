$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
            template: [
                '<div class="clearfix">',
                    '<fns-content>',
                        '<div class="gridster">',
                            '<ul>',
                                '<li v-for="w in widgets" data-row="{{w.row}}" data-col="{{w.col}}" data-sizex="{{w.size_x}}" data-sizey="{{w.size_y}}">',
                                    '<div :is="w.component" :dataready.sync="dataready" :pies.sync="pies"></div>',
                                '</li>',
                            '</ul>',
                        '</div>',
                    '</fns-content>',
                    '<fns-sidebar>',
                        '<fns-tile title="Данные за период">',
                            '<span class="pull-right" slot="header">',
                                '<i class="fa fa-calendar h5"></i>',
                                '<span class="h5">выбрать период</span>',
                            '</span>',
                            '<fns-periodpicker :clickhandler="getData"></fns-periodpicker>',
                        '</fns-tile>',
                        '<fns-tile title="Сортировка">',
                            '<fns-sorter :sgroups.sync="pies" :datageted="dataready"></fns-sorter>',
                        '</fns-tile>',
                        '<fns-tile title="Состояние всех сервисов во времени">',
                            '<div style="height: 145px;">',
                                '<fns-gradtimeline gid="allstates"></fns-gradtimeline>',
                            '</div>',
                        '</fns-tile>',
                        '<fns-tile title="Статистика по всем сервисам">',
                            '<h3 class="pull-right error" v-if="!ok" slot="header">',
                                '<i class="fa fa-exclamation-circle"></i>',
                            '</h3>',
                            '<fns-statistic></fns-statistic>',
                        '</fns-tile>',
                        '<a href="#" class="to-groups btn btn-primary">',
                            '<span class="h3">',
                                '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;',
                                '<span>К статистике по всем группам сервисов</span>',
                            '</span>',
                        '</a>',
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
                Vue.nextTick(function() {
                    vm.initGridster();
                });
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

