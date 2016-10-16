Vue.component('fns-timeline', Vue.extend({
    props: {
        timelinedata: {
            type: Array,
            default: []
        }
    } ,
    template: [
        '<div style="width: 100%" v-el:timeline></div>'
    ].join(' '),
    computed: {},
    methods: {},
    ready: function() {
        var vm = this;
        console.log(vm.timelinedata)
        var td = _.map(vm.timelinedata[0].values, function(el) {
            return {
                event: el[1] >= 30 ? 'degradation' : 'normal',
                times: [
                    {
                        starting_time: el[0],
                        ending_time: +moment(el[0]).add(1, 'minutes')
                    }
                ]
            }
        })
        var colorScale = d3.scale
            .ordinal()
            .range(["#00e673",'#ff1c49','#ffee00'])
            .domain(['normal','degradation']);
        // return
        var chart = d3.timeline()
            .showTimeAxis()
            .itemHeight(5)
            .margin({left: 30, right: 0, top: 0, bottom: 0})
            .colors( colorScale )
            .tickFormat({
              format: d3.time.format("%I %p"),
              tickTime: d3.time.minutes,
              tickInterval: 2,
              tickSize: 1
            })
            .colorProperty('event')
            // .hover(function (d, i, datum) {
            //     console.log(d, datum)
            //     // d is the current rendering object
            //     // i is the index during d3 rendering
            //     // datum is the data object
            //   });
        var w = d3.select(vm.$els.timeline).node().getBoundingClientRect().width;
        console.log('we', w);
        var svg = d3.select(vm.$els.timeline)
            .append("svg")
            // .style("width", "100%")
            .attr("width", w-30)
            .datum(td)
            .call(chart)
            ;

    },
}));
