Vue.component('chart-tile', Vue.extend({
    props: ['chartdata', 'title'],
    template: [
        '<div>',
            '<div class="panel panel-default">',
                '<div class="panel-heading">',
                    '<h3 class="panel-title service-title-up">',
                        '<span>{{title}}</span>',
                        '<span class="pull-right route">',
                            '<a href="/services"><i class="fa fa-caret-right" aria-hidden="true"></i></a>',
                        '</span>',
                    '</h3>',
                '</div>',
                '<timeline :timelinedata="chartdata.timeline"></timeline>',
                '<div class="panel-body">',
                    '<div style="height: 300px;" class="col-md-12" v-el:chart>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>'
    ].join(' '),
    computed: {},
    methods: {},
    data: function() {
        return {
        }
    },
    ready: function() {
        var vm = this;
        var morris = Morris.Donut({
            element: vm.$els.chart,
            data: vm.chartdata.labels,
            colors: vm.chartdata.colors
        });
        morris.select(1);


    },
}));
