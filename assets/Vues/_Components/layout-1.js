Vue.component('fns-layout-1', {
    template: [
        '<div>',
           '<table class="template">',
               '<tr>',
                    '<td colspan="2">',
                        '<div class="widget-box" v-if="!preview">',
                            '<div class="widget-content">',
                                '<ul>',
                                    '<li v-for="w in top.selectedWidgets">{{w}}</li>',
                                '</ul>',
                            '</div>',
                                '<button @click="setActiveContainer(top)" class="text-center h2 add-widget btn">Добавить виджет</button>',
                        '</div>',
                    '</td>',
                '</tr>',
                '<tr>',
                    '<td>',
                        '<div class="widget-box" v-if="!preview">',
                            '<div class="widget-content">',
                                '<ul>',
                                    '<li v-for="w in left.selectedWidgets">{{w}}</li>',
                                '</ul>',
                            '</div>',
                                '<button @click="setActiveContainer(left)" class="text-center h2 add-widget btn">Добавить виджет</button>',
                        '</div>',
                    '</td>',
                    '<td>',
                        '<div class="widget-box" v-if="!preview">',
                            '<div class="widget-content">',
                                '<ul>',
                                    '<li v-for="w in right.selectedWidgets">{{w}}</li>',
                                '</ul>',
                            '</div>',
                                '<button @click="setActiveContainer(right)" class="text-center h2 add-widget btn">Добавить виджет</button>',
                        '</div>',
                    '</td>',
                '</tr>',
                        // '<span class="remove-widget" v-if="!preview">',
                        //     '<button type="button" class="btn btn-danger">',
                        //         '<i class="fa fa-remove"></i>',
                        //     '</button>',
                        // '</span>',

            '</table>',
            '<re-modal  :item="show" title="Выберите виджет" @save="addWidgets(activeWidget)">',
                '<re-combo :options="widgets" header="Список виджетов" :selected.sync="selected">',
                '</re-combo>',
                    // '<fns-layout :templates="templates" :selectedtemplate.sync="selectedtemplate"></fns-layout>',
                '<pre>{{selected | json}}</pre>',
            '</re-modal>',
        '</div>',
    ].join(' '),
     props: {
        val: {
            type: Number,
            defaults: 0
        },
        preview: {
            type: Boolean,
            defaults: false
        }
    },
    data: function() {
        return {
            top: {
                selectedWidgets: [],
            },
            left: {
                selectedWidgets: [],
            },
            right: {
                selectedWidgets: [],
            },
            selected: null,
            activeWidget: null,
            widgets: ['Стиралки', 'Карта', 'Статистика'],
            show: false,
        };
    },
    ready: function() {
        var vm = this;
    },
    methods: {
        addWidgets: function(w) {
            debugger
            var vm = this;
            c.selectedWidgets.push(vm.selected);
        },
        setActiveContainer: function(c) {
            var vm = this;
            vm.show = true;
            vm.activeWidget = c.name;
        }
    }
});
