
 // http://d3pie.org/#generator-labels

Vue.component('fns-incident-pie', {
    template: [
        '<div class="incident-pie">',
            '<div class="svg-container" v-el:incidentpie>',
            '</div>',
            '<table class="bars">',
                '<tr class="bar" v-for="b in extend.data.content">',
                    '<td class="bars-per">',
                        '<strong>{{b.value}}%</strong>',
                        '<span :style="{background: b.color}"></span>',
                    '</td>',
                    '<td>{{b.state}}</td>',
                '</tr>',
            '</table>',
        '</div>',

    ].join(' '),
    props: {
        extend: {
            type: Object,
            default: function() { return {} },
        },
    },
    data: function() {
        return {
            colors: {
                yellow: '#f7d11d',
                red: '#ff0000',
                orange: '#f26522',
                blue: '#00aeef',
            },
            ok: true,
            status: 'neutral',
            total: 0
        };
    },

    methods: {
        getColor: function(name) {
            return this.colors[name] || '#fff';
        },
    },
    ready: function() {
        var vm = this;
        var el = vm.$els.incidentpie;
        var maxH = 150;
        var maxW = vm.$els.incidentpie.offsetWidth*0.6;

        vm.pie = new d3pie(el, _.merge({
            size: {
                pieInnerRadius: "75%",
                pieOuterRadius: "100%",
                canvasHeight: 150,
                canvasWidth: 150,
            },
            misc: {
                colors: {
                    segmentStroke: '#fff',
                },
                canvasPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            data: {
                sortOrder: "value-desc",
                content: [
                    {
                        label: "Java",
                        value: 157618,
                        color: vm.getColor('yellow'),
                    },
                    {
                        label: "Objective-C",
                        value: 36344,
                        color: vm.getColor('red'),
                    },
                    {
                        label: "Coffeescript",
                        value: 157618,
                        color: vm.getColor('orange'),
                    },
                    {
                        label: "Js",
                        value: 345123,
                        color: vm.getColor('blue'),
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
    return [rect.width / 2*0.6 , rect.height / 2*0.6];
}
