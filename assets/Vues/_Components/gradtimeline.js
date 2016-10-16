Vue.component('fns-gradtimeline', Vue.extend({
    template: [
        '<div class="gradtimeline" v-el:gradtimeline></div>'
    ].join(' '),
    props: {
        gid: {
            type: String,
        }
    },
    data: function() {
        return {
            chartdata: [],
        }
    },
    computed: {
        // айдишники не могут содержать всякой хуйни
        fixedGid: function() {
            return Math.random().toString(36).substring(5);
        },
    },
    watch: {
    },
    methods: {
        considerDimensions: function() {
        },

        getSizes: function() {
            var vm = this;
            var box = $(vm.$els.gradtimeline).parent();
            console.log('box: ', box)
            var margin = {
                top: 2,
                right: 10,
                bottom: 0,
                left: 10,
            };
            var result = {
                height: $(box).height(),
                width:  $(vm.$els.gradtimeline).width() - margin.left - margin.right,
                margin: margin,
            };
            // console.debug('onResize', result);
            return result;
        },
        drawChart: function() {
            console.debug('drawChart');
            var vm = this;
            var svg = vm.svg;
            var path = vm.path;
            var gradient = vm.gradient;
            var sizes = vm.getSizes();
            var data = _.map(vm.chartdata, function(d) {
                return {
                    date: d.x,
                    temperature: d.y
                };
            });

            var x = d3.time.scale()
                .range([0, sizes.width])
                ;

            var y = d3.scale.linear()
                .range([sizes.height, 0])
                ;

            x.domain([new Date(data[0].date), new Date(data[data.length - 1].date)]);
            y.domain(d3.extent(data, function(d) { return d.temperature; }));

            var line = d3.svg.line()
                .interpolate("basis")
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.temperature); })
                ;

            svg
                .attr("width", sizes.width - sizes.margin.left - sizes.margin.right)
                .attr("height", sizes.height + sizes.margin.top)
                .attr('viewBox', '0 0 ' + sizes.width  + ' ' + (sizes.height + sizes.margin.top))
                ;

            path
                .datum(data)
                .attr("d", line)
                ;

            gradient
                .attr("x1", 0).attr("y1", y(15))
                .attr("x2", 0).attr("y2", y(30))
                ;
        },
        initChart: function() {
            console.debug('initChart');
            var vm = this;
            var gradId = vm.fixedGid;

            vm.svg = vm.svg || d3.select(vm.$els.gradtimeline).append("svg")
                .attr('preserveAspectRatio', 'xMidYMid meet')
                ;

            // TODO: для хрома нужно присваивать инидивидауальный идишник для каждого градиента, иначе при загрузке данных график не показывается
            // прикрутить description сервиса когда будет готов бэк
            vm.gradient = vm.svg
                .append("linearGradient")
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("id", gradId)
                ;

            vm.gradient.selectAll("stop")
                .data([
                    {offset: "0%", color: "green"},
                    {offset: "100%", color: "red"}
                ])
                .enter().append("stop")
                    .attr("offset", function(d) { return d.offset; })
                    .attr("stop-color", function(d) { return d.color; })
                    ;

            vm.path = vm.svg.append("path")
                .attr("class", "line")
                .attr('stroke', 'url('+location.href+'#'+gradId+')')
                ;

            vm.drawChart();
        },
        fillData: function() {
            var vm = this;
                var arr = [];
                 for (var i=0; i<60; i++) {
                    var x = +moment().add(i, 'minutes');
                    var a = Math.floor(i / 5);
                    var y;
                    if (a % 2 === 0) {
                        y = 2;
                    } else {
                        y = 30;
                    }
                    arr.push({
                        'x': x,
                        'y': y
                    });
                }
            return arr;
        },
    },
    ready: function() {
        var vm = this;
        vm.chartdata = vm.fillData();
        vm.initChart();
        $(window).resize(vm.drawChart);
    },


}));
