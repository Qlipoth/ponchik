
$(document).ready(function() {
    window.vm1 = new Vue({
        el: '#vue',

        template: [
            '<div class="clearfix">',

                '<fns-content>',
                    '<div v-if="activeLayout" class="template-box full-size">',
                        '<div :is="activeLayout.cmpName" :preview="false">',
                                // '<span slot="right">One</span>',
                                // '<span slot="left">One</span>',
                                // '<span slot="top">One</span>',
                        '</div>',
                    '</div>',
                    // '<select v-model="selected" multiple>',
                    //     '<option v-for="w in widgets">{{w}}</option>',
                    // '</select>',
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
                            '<fns-gradtimeline></fns-gradtimeline>',
                        '<div>',
                    '</fns-tile>',
                    '<fns-tile title="Статистика по всем сервисам">',
                        '<fns-statistic></fns-statistic>',
                    '</fns-tile>',
                '</fns-sidebar>',
                '<re-modal v-ref:modal title="Выберите шаблон" :selectedtemplate="selectedtemplate" @save="saveTemplate">',
                    '<fns-layout :templates="templates" :selectedtemplate.sync="selectedtemplate"></fns-layout>',
                '</re-modal>',
            '</div>'
        ].join(' '),
        data: function() {
            return {
                dataready: false,
                selectedtemplate: 0,
                layouts: [
                    {
                        cmpName: 'fns-layout-1',
                        id: 0,
                    },
                    {
                        cmpName: 'fns-layout-2',
                        id: 1,
                    },
                    {
                        cmpName: 'fns-layout-3',
                        id: 2,
                    },
                ],
                activeLayout: null,
                widgets: ['Карта','Стиралки','статистика'],
                selected: null,

            }
        },
        computed: {
        },
        ready: function() {
            var vm = this;
            $.get('/getTemplate')
                .done(function(response) {
                   vm.activeLayout = _.find(vm.layouts, function(el) {
                        return el.id === response.templateId;
                   })
                   console.log(vm.activeLayout)
                })
                .fail(function() {
                    console.log("error");
                })
        },
        methods: {
            saveTemplate: function() {
                var vm = this;
                var template = {
                    templateId: vm.selectedtemplate
                }
                localStorage.setItem('template', template);
                $.post('/saveTemplate', { template: template})
                .done(function(response) {
                    console.log(response)
                })
                .fail(function() {
                    console.log("error");
                })
            }

        },
    });
    $("#changeTempalte").click(function() {
        vm.$refs.modal.item = true;
    })

});

