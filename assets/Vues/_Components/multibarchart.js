Vue.component('fns-multibarchart', {
    template: [
        '<div class="with-3d-shadow with-transitions" v-el:mbchart>',
            '<svg></svg>',
        '</div>',
    ].join(' '),
    props: {

    },
    data: function() {
        return {

        };
    },
    watch: {

    },
    methods: {
        fillData: function(n, m, o) {

            function stream_index(d, i) {
                return { x: i, y: Math.max(0, d) };
            }
            if (arguments.length < 3) o = 0;
            function bump(a) {
                var x = 1 / (.1 + Math.random()),
                    y = 2 * Math.random() - .5,
                    z = 10 / (.1 + Math.random());
                for (var i = 0; i < m; i++) {
                    var w = (i / m - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }
            return d3.range(n).map(function() {
                var a = [],
                    i;
                for (i = 0; i < m; i++) a[i] = o + o * Math.random();
                for (i = 0; i < 5; i++) bump(a);
                return a.map(stream_index);
            });

        },
        drawChart: function() {
            var vm = this;
            console.log(vm.$els.mbchart)
            var negative_test_data = new d3.range(0, 1).map(function(d, i) {
                return {
                    values: new d3.range(0, 24).map(function(f, j) {
                        return {
                            state: (j % 2 === 0) ? true : false,
                            y: 1,
                            x: moment().add(j, 'hour')
                        }
                    })
                };
            });
            console.log('nd', negative_test_data)
            var chart;
            nv.addGraph(function() {
                chart = nv.models.multiBarChart()
                    .barColor(function (d, i) {
                        return d.state? '#00a651' : '#ed1c24';
                    })
                    .margin({ bottom: 110, left: 10})
                    .rotateLabels(45)
                    .showLegend(false)
                    .showControls(false)
                    .showYAxis(false)
                    .staggerLabels(true)
                    .height(150)
                    .groupSpacing(0.1);




                chart.reduceXTicks(false).staggerLabels(true);
                chart.xAxis
                    .axisLabelDistance(35)
                    .showMaxMin(false)
                    .tickFormat(function(d, i) {
                        return d3.time.format("%H:%M")(moment(d).toDate());
                    });
                chart.yAxis
                    .axisLabelDistance(-5)
                    .tickFormat(d3.format(',.01f'));
                chart.dispatch.on('renderEnd', function() {
                    nv.log('Render Complete');
                });
                chart.tooltip.enabled(false);
                d3.select(vm.$els.mbchart)
                    .selectAll('svg')
                    .datum(negative_test_data)
                    .call(chart)

                nv.utils.windowResize(chart.update);

                chart.dispatch.on('stateChange', function(e) {
                    nv.log('New State:', JSON.stringify(e));
                });
                chart.state.dispatch.on('change', function(state) {
                    nv.log('state', JSON.stringify(state));
                });
                return chart;
            })
        }
    },
    ready: function() {
        this.drawChart();
    },
});
