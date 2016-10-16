Vue.component('fns-statistic', Vue.extend({
    props: ['val'],
    template: [
         '<div class="group-statistic" v-el:groupstatistic><svg></svg></div>',
    ].join(' '),
    computed: {},
    methods: {
        getStatistic: function(testdata) {
            var vm = this;
            var height = $(vm.$els.groupstatistic).height();
            var width = $(vm.$els.groupstatistic).width();
            nv.addGraph(function() {
                var svg = d3.select(vm.$els.groupstatistic)
                    .select('svg')
                    .datum(testdata);
                var chart = nv.models.pieChart()
                    .x(function(d) {
                        return d.key })
                    .y(function(d) {
                        return d.value })
                    .width(250)
                    .height(250)
                    .margin({
                        "left": 0,
                        "right": 0,
                        "top": -30,
                        "bottom": 0
                    })
                    .showLabels(false)
                    .pieLabelsOutside(false)
                    .labelFormat(function (d) {
                        return d+'%';
                    })
                    // Отключаю встроеную легенду
                    .showLegend(false);


                svg
                    .transition().duration(100)
                    .call(chart)
                    .attr('preserveAspectRatio', 'xMidYMid meet')
                    .attr('viewBox', '10 0 500 '+(height+70))
                    .attr('width', '')
                    .attr('height', '')
                    ;
                //  Кастомная легенда.
                //  Взято (http://stackoverflow.com/questions/21272606/how-to-add-a-legend-to-a-discrete-bar-graph-in-nvd3)
                var makeLegend = nv.models.legend()
                    //initialize legend function
                    .key(function(d) {
                        return d.value+'%';
                    })
                    .margin({top: 40, right:0, left: 80, bottom: 0})
                    .align('right')
                    //tell the function which property to use as text
                    svg.append("g").attr("class", "legend")
                        //add a group to hold legend, position as necessary
                        //(no positioning will draw legend across top of SVG)
                        .datum(testdata)
                        //set data to the array of objects you want
                        //included in the legend
                        .transition().duration(500)
                        .call(makeLegend); //make it so
                      nv.utils.windowResize(chart.update);
                      nv.utils.windowResize(makeLegend);
                    // меняю положение кружков легенды и размер шрифта
                var lboxes = d3.selectAll('.nv-series')
                        .data(testdata)
                        .attr('transform', function(d,i) {
                            return "translate(" + 0 + "," +  i*70+ ")"
                        });
                lboxes.select('.nv-legend-symbol')
                    .attr("r", 10);
                lboxes.select('.nv-legend-text')
                    .attr("dx", "0.7em");
                return chart;
            });
        }
    },
    data: function() {
        return {
            testdata: [
                { key: "Критическая ошибка", value: 17, color: "#ff0000" },
                { key: "Норма", value: 83, color: "#00a651" },
            ]
        }
    },
    ready: function() {
        var vm = this;
        vm.getStatistic(vm.testdata);
    },
}));
