
$(document).ready(function() {
    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div class="clearfix">',
                '<div class="col-md-9">',
                    '<div class="ct">',
                        '<div class="gridster">',
                            '<ul v-show="selectedWidgets.length">',
                                '<li v-for="w in selectedWidgets" data-row="1" data-col="1" data-sizex="2" data-sizey="2">',
                                    '<div class="text-right">',
                                        '<button @click="removeWidget(w)" type="button" class="btn btn-primary remove-widget">',
                                            '<i class="fa fa-remove"></i>',
                                        '</button>',
                                    '</div>',
                                    '<div v-if="w.readyBox" :is="w.name" :dataready.sync="dataready" :pies.sync="pies"></div>',
                                '</li>',
                            '</ul>',
                        '</div>',
                        '<div class="btn-group">',
                            '<button @click="showModal = true" type="button" class="btn btn-primary">Добавить виджет</button>',
                            '<button @click="showThemeChanger = true" type="button" class="btn btn-primary">Выбрать тему</button>',
                            '<button @click="saveTemplate" type="button" class="btn btn-primary">Сохранить лейаут</button>',
                        '</div>',
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
                '<re-modal :showfooter="true" :item.sync="showModal" title="Выберите виджет" @save="addWidget">',
                    '<re-combo livesearch="true" :options="widgets" header="Список виджетов" :selected.sync="selected">',
                    '</re-combo>',
                '</re-modal>',
                '<re-modal :showfooter="true" :item.sync="showThemeChanger" title="Выберите тему" @save="saveTheme">',
                    '<re-combo livesearch="false" :options="themes" header="Список тем" :selected.sync="selectedTheme">',
                    '</re-combo>',
                '</re-modal>',
            '</div>'
            ].join(' '),
        data: function() {
            return {
                dataready: false,
                pies: [],
                gridster: null,
                widgets: [],
                selected: null,
                selectedTheme: null,
                selectedWidgets: [],
                widgets: [
                    'fns-map',
                    'fns-tile',
                    'fns-pies'
                ],
                themes: [
                    {   src: '/styles/themes/light.css',
                        value: 0,
                        name: 'Светлая',
                    },
                    {   src: '/styles/themes/dark.css',
                        value: 1,
                        name: 'Темная'
                    }
                ],
                showModal: false,
                showThemeChanger: false,
            };
        },
        computed: {
        },
        ready: function() {
            var vm = this;
            vm.initGridster();
        },
        methods: {
            initGridster: function() {
                var vm = this;
                vm.gridster = $(".gridster ul").gridster(
                    {
                        widget_margins: [5, 5],
                        widget_base_dimensions: [$(".gridster").width()/4-10, 120],
                        resize: {
                            enabled: true,
                        },
                        serialize_params: function($w, wgd) {
                            return {
                               col: wgd.col,
                               row: wgd.row,
                               size_x: wgd.size_x,
                               size_y: wgd.size_y
                            };
                        }
                    }
                ).data('gridster');
            },
            addWidget: function() {
                var vm = this;
                var widget = vm.selected.slice()[0];
                var nw ={name: widget, readyBox: false};
                vm.selectedWidgets.push(nw);
                if (vm.gridster) {
                    vm.gridster.destroy();
                }
                Vue.nextTick(function() {
                    vm.initGridster();
                    nw.readyBox = true;
                    vm.showModal = false;
                });
                // var Q = new Promise(
                //     function(ok, neok) {
                //         ok('ok')
                //     }
                // )
                // return Q
                //         .then(function(result){
                //              if (vm.gridster) {
                //                 return vm.gridster.destroy();
                //             }
                //         })
                //         .then(function(){
                //             return  vm.initGridster();
                //         })
                //         .then(function(){
                //             vm.showModal = false;
                //             return nw.readyBox = true;
                //         })
                //         .catch(function(err) {
                //            console.log(err); // Никогда не вызовется
                //         });
            },
            removeWidget: function(w) {
                var vm = this;
                vm.selectedWidgets.$remove(w);
                vm.gridster.destroy();
                Vue.nextTick(function() {
                    vm.initGridster();
                })
            },
            serializeData: function() {
                var vm = this;
                var gridData = vm.gridster.serialize();
                var fullData = _.map(gridData, function(el, indx) {
                    el.component = vm.selectedWidgets[indx].name;
                    return el;
                })
                return fullData;
            },
            saveTemplate: function() {
                var vm = this;
                $.post('/saveTemplate', { template: vm.serializeData()})
                .done(function(response) {
                    console.log(response)
                })
                .fail(function() {
                    console.log("error");
                })
            },
            saveTheme: function() {
                var vm = this;
                console.log(vm.selectedTheme)
            }
        },
    });
});

