Vue.component('fns-totalchart', Vue.extend({
    props: {
        togglecharts: {
            type: Boolean,
            default: false
        },
        chartdata: {
            type: Array,
            default: []
        }
    },
    template: [
        '<div class="col-md-12">',
            '<svg v-el:totalchart></svg>',
        '</div>',
    ].join(' '),
    computed: {},
    methods: {},
    ready: function() {
        var vm = this;
        console.log(vm.togglecharts);
        vm.fillData(5);
        vm.launchTotalChart(vm.togglecharts);
    },
    data: function() {
        return {
            checked: false,
        }
    },
    methods: {
        fillData: function(dataLength) {
            var vm = this;
            function doMinutes(v) {
                var val = v>1? v: 2;
                var arr = [];
                 for (var i=0; i<60; i++) {
                    var x = +moment().add(i, 'minutes');
                    var a = Math.floor(i / 5);
                    var y;
                    if (a % 2 === 0) {
                        y = 0;
                    } else {
                        y = 30;
                    }
                    arr.push([x, y]);
                }
                return arr;
            }
            for (var i=0; i<dataLength; i++) {
                vm.chartdata.push({
                key: "График "+i,
                values: doMinutes(Math.floor(Math.random() * 10))
               })
            }
        },
        launchTotalChart: function(showAll) {
            var vm = this;
            var totalchart = vm.$els.totalchart;
            // return d3.json('js/assets/plugins/nvd3/cumulativeLineData.json', function(data) {

            var renderData;
            if (showAll) {
                renderData = vm.chartdata;
            }
            else {
                renderData = [vm.chartdata[0]];
            }
                nv.addGraph(function() {
                    var chart = nv.models.cumulativeLineChart().x(function(d) {
                            return d[0];
                        }).y(function(d) {
                            return d[1];
                        }) //adjusting, 100% is 1.00, not 100 as it is in the data
                        .margin({ "top": 10, "right": 20, "bottom": 25, "left": 20 })
                        .color(d3.scale.myColors().range()).useInteractiveGuideline(true);
                    var ticks = _(renderData[0].values)
                        .filter(function(el, index) {
                            if (index % 6 == 0) {
                                return true
                            }
                        })
                        .map(function(el) {
                            return el[0]
                        })
                        .value();
                    chart.xAxis.tickValues(ticks).tickFormat(function(d) {
                        return moment(new Date(d)).format('H:mm');
                    });
                    chart.showLegend(false).showControls(false)
                    chart.yAxis.tickFormat(d3.format(",d"));
                    d3.select(totalchart)
                        .datum(renderData)
                        .call(chart);

                    //TODO: Figure out a good way to do this automatically
                    nv.utils.windowResize(chart.update);
                    return chart;
                })
        }
    },
    watch: {
        togglecharts: function() {
            var vm = this;
            vm.launchTotalChart(vm.togglecharts);
        },
    },

}));
