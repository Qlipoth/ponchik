/**
 * Модифицированный "пирожок"
 * http://d3pie.org/#generator-labels
 *
 */

Vue.component('fns-pie', {
    template: [
        '<div class="fns-pie">',
            '<h1>',
            '<span>',
                '<i class="fa fa-circle" :class="status"></i>',
                '<a href="/serviceGroup/{{extend.context}}">',
                    '{{extend.title || "Nalog.ru"}}',
                '</a>',
                '({{total}})',
            '</span>',
            '<span class="pull-right error" v-if="!ok">',
                '<a href="/serviceGroup/{{extend.context}}/incidents">',
                    '<i class="fa fa-exclamation-circle bad"></i>',
                '</a>',
            '</span>',
            '</h1>',
            '<div class="incident-pie service-pie">',
                '<div class="svg-container" v-el:pie>',
                '</div>',
                '<table class="bars">',
                    '<tr class="bar" v-for="b in extend.data.content">',
                        '<td class="empty-bar">',
                            '<div :style="{background: b.color}"></div>',
                        '</td>',
                        '<td><strong class="h3">{{b.value}}</strong></td>',
                    '</tr>',
                '</table>',
            '</div>',
            '<div class="gradtimeline-box pie-grad">',
                '<fns-gradtimeline v-ref:piegrad></fns-gradtimeline>',
            '</div>',
        '</div>',

    ].join(' '),
    props: {
        extend: {
            type: Object,
            default: function() { return {} },
        },
        lastEvent: {
            type: Object,
            default: function() {
                return {
                    date: moment().add(-4, 's'),
                    type: 'good',
                    text: '',
                }
            }
        },
        transitionend: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            colors: {
                good: '#00a651',
                middle: '#f7d11d',
                bad: '#ff0000',
            },
            ok: true,
            status: 'neutral',
            total: 0
        };
    },
    watch: {
        transitionend: function() {
            this.$refs.piegrad.drawChart();
        },
        lastEvent: {
            deep: true,
            handler: function(ev, oldEv) {
                var vm = this;
                if (!vm.centerText) {
                    console.warn('text not created');
                    return;
                }
                vm.status = ev.type;
                vm.ok = ev.ok;
                vm.total = ev.total;
                vm.centerText.text(vm.lastEvent.text);

                if (ev.type === 'bad') {
                    vm.circle
                        .transition()
                        .duration(500)
                        .style('fill', d3.rgb(vm.getColor(ev.type)).darker(0.5).toString())
                        .transition()
                        .duration(500)
                        .style('fill', vm.getColor(ev.type))
                        ;
                }
                else {
                    vm.circle
                        .transition()
                        .duration(500)
                        .style('fill', vm.getColor(ev.type))
                        ;
                }
            },
        },
    },
    computed: {
    },
    methods: {
        getColor: function(name) {
            return this.colors[name] || '#fff';
        },
        startCount: function() {
            var vm = this;
            var duration; // = moment.duration(moment() - vm.lastEvent, 'milliseconds');
            var ms; // miliseconds
            setInterval(function() {
                // console.log(vm.lastEvent.date)
                duration = moment.duration(moment() - moment(vm.lastEvent.date), 'milliseconds');
                ms = duration.asMilliseconds();
                // if (ms < 60000) { // < 1min
                //     vm.lastEvent.text = moment(ms).format('ss[с]');
                // }
                // else if (ms < 3600000) { // < 1hr
                //     vm.lastEvent.text = moment(ms).format('mm[м]');
                // }
                // else if (ms < 86400000) { // < 1day
                //     vm.lastEvent.text = moment(ms).format('hh[ч]');
                // }
                // else {
                //     vm.lastEvent.text = moment(ms).format('DD[д]');
                // }
                vm.lastEvent.text = moment(ms).format('hh:mm:ss');
            }, 1000);
        },

        drawCenter: function(x, y, r, color) {
            var vm = this;
            var result = vm.topContainer
                .append('g');
            var center = getBoundingBoxCenter(vm.svg);
            vm.circle = result.append("circle");

            vm.circle
                .style("opacity", 0)
                .style("fill", vm.getColor(vm.lastEvent.type))
                .style("stroke-width", 0)
                .style("z-index", 1)
                .attr("r", 0)
                .attr("cx", center[0])
                .attr("cy", center[1] + 0)
                .transition()
                .duration(500)
                .attr("r", 45)
                .style("opacity", 1)
                .call(function() {
                    vm.startCount();
                })
                ;

            vm.centerText = result.append("text")
                .attr('class', 'text')
                .attr('text-anchor', 'middle')
                .style('font-size', '1.3em')
                .attr('fill', '#fff')
                .attr('stroke-width', 2)
                .attr('x', 0)
                .attr('y', 4)
                .attr('transform', 'translate('+center+')')
                ;
        },
        onPieReady: function(pie) {
            var vm = this;
            vm.drawCenter();

        },
    },
    ready: function() {
        var vm = this;
        var el = vm.$els.pie;
        var maxH = 150;
        var maxW = vm.$els.pie.offsetWidth*0.6;

        vm.pie = new d3pie(el, _.merge({
            size: {
                pieInnerRadius: "75%",
                pieOuterRadius: "100%",
                canvasHeight: 150,
                canvasWidth: 150,
            },
            "header": {
                // "title": {
                //     "text": "Nalog.ru",
                //     "fontSize": 15,
                //     "color": '#ccc',
                //     "font": "open sans"
                // },
                // "subtitle": {
                //     "text": "A full pie chart to show off label collision detection and resolution.",
                //     "color": "#999999",
                //     "fontSize": 12,
                //     "font": "open sans"
                // },
                // "titleSubtitlePadding": 9
            },
            misc: {

                canvasPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            data: {
                sortOrder: "value-desc",
                content: [
                    {
                        label: "Java",
                        value: 157618,
                        color: vm.getColor('good'),
                    },
                    {
                        label: "Objective-C",
                        value: 36344,
                        color: vm.getColor('bad'),
                    },
                    {
                        label: "Coffeescript",
                        value: 157618,
                        color: vm.getColor('middle'),
                    },
                ],
            },
            labels: {
                outer: {
                    format: "none",
                    pieDistance: 32,
                    hideWhenLessThanPercentage: 100,
                },
                inner: {
                    format: "none",
                    hideWhenLessThanPercentage: 100
                },
                mainLabel: {
                    fontSize: 11
                },
                percentage: {
                    color: "#fff",
                    decimalPlaces: 0
                },
                value: {
                    color: "#fff",
                    fontSize: 11
                },
                truncation: {
                    enabled: true
                }
            },
            effects: {
                pullOutSegmentOnClick: {
                    effect: "none",
                    speed: 400,
                    size: 8
                },
                highlightSegmentOnMouseover: false,
            },
            callbacks: {
                onload: function() {
                    var svg = vm.$els.pie.getElementsByTagName('svg')[0];
                    vm.svg = d3.select(svg);
                    vm.topContainer = vm.svg
                        .append('g')
                        .attr('class', 'top');

                    vm.barsContainer = vm.svg
                        .append('g')
                        .attr('class', 'bars')
                    vm.onPieReady(vm.pie, el);
                },
                onMouseoverSegment: null,
                onMouseoutSegment: null,
                onClickSegment: null
            },
        }, vm.extend));


    },
});


function getBoundingBoxCenter(selection) {
    // get the DOM element from a D3 selection
    // you could also use "this" inside .each()
    var element = selection.node();
    // use the native SVG interface to get the bounding box
    var rect = element.getBoundingClientRect();
    // return the center of the bounding box
    return [rect.width / 2 , rect.height / 2];
}
