/**
 * Либа http://datamaps.github.io/
 * предпросмотр geojson + конвертер https://shancarter.github.io/distillery/
 * конвертер http://jeffpaine.github.io/geojson-topojson/
 * рисовалка http://geojson.io/#map=5/43.882/29.993
 *
 * пафос
 * http://d3.artzub.com/wbca/
 *
 * клик ту зум
 * http://bl.ocks.org/mbostock/2206590
 *
 * мерж зон
 * http://bl.ocks.org/mbostock/5416405
 */

Vue.component('fns-map', {
    template: [
        '<div id="map">',
            '<re-modal',
                ':item="group"',
                'class="fns-map-modal"',
                'title="ЦОД"',
                'ok-text="OK"',
                '>',
                '<div>',
                    '<h4>Список сервисов:</h4>',
                    '<table class="modal-table">',
                        '<tr>',
                            '<th>Название</th>',
                            '<th>Статус</th>',
                        '</tr>',
                        '<tr v-for="item in group.fakeTable">',
                            '<td>{{item.name}}</td>',
                            '<td>{{item.status}}</td>',
                        '</tr>',
                    '</table>',

                    // '<h4>Всего событий: {{group.total}}</h4>',
                    // '<p>Из них:</p>',
                    // '<ul>',
                    //     '<li>успех: {{group.good}}</li>',
                    //     '<li>отказ: {{group.bad}}</li>',
                    // '</ul>',
                    // '<p>Последнее событие:</p>',
                    // '<pre>{{group.last | json}}</pre>',
                '</div>',
            '</re-modal>',
            '<span class="buttons">',
                // '<button @click="makeApocalypse" class="btn btn-primary">Make apocalypse</button>',
                // '<button @click="launchRocket(\'NY\',\'TX\')" class="btn btn-primary">Destroy Texas</button>',
                '<re-button-selector',
                    ':buttons="randTypes"',
                    ':selected.sync="rand"',
                    '>',
                '</re-button-selector>',
            '</span>',
            '<div v-el:map></div>',
        '</div>',
    ].join(' '),
    data: function () {
        return {
            rand: 0.5,
            randTypes: [
                {
                    value: 0.1,
                    text: 'good10',
                },
                {
                    value: 0.3,
                    text: 'good30',
                },
                {
                    value: 0.5,
                    text: 'good50',
                },
                {
                    value: 0.7,
                    text: 'good70',
                },
                {
                    value: 0.9,
                    text: 'good90',
                },
            ],

            isDdos: false,
            isApocalypse: false,
            clicked: 0,
            states: [
                'mpol20', 'mpol8', 'mpol12', 'mpol13',
                'pol5', 'mpol21', 'pol8', 'pol18', 'mpol22',
                'mpol17', 'mpol23', 'mpol14', 'mpol18',
                'pol37', 'pol51', 'pol47', 'mpol1',

                // 'mpol1', 'mpol2', 'mpol3',
                // 'mpol4', 'mpol5', 'mpol6',
                // 'mpol7', 'mpol8', 'mpol9',
                // 'mpol10', /*'mpol11',*/ 'mpol12',
                // 'mpol13', 'mpol14', 'mpol15',
                // 'mpol16', 'mpol17', 'mpol18',
                // 'mpol19', 'mpol20',
                // 'pol1', 'pol2', 'pol3',
                // 'pol4', 'pol5', 'pol6',
                // 'pol7', 'pol8', 'pol9',
                // 'pol10', 'pol11', 'pol12',
                // 'pol13', 'pol14', 'pol15',
                // 'pol16', 'pol17', 'pol18',
                // 'pol19', 'pol20', 'pol21',
                // 'pol22', 'pol23', 'pol24',
                // 'pol25', 'pol26', 'pol27',
                // 'pol28', 'pol29', 'pol30',
                // 'pol31', 'pol32', 'pol33',
                // 'pol34', 'pol35', 'pol36',
                // 'pol37', 'pol38', 'pol39',
                // 'pol40', 'pol41', 'pol42',
                // 'pol43', 'pol44', 'pol45',
                // 'pol46', 'pol47', 'pol48',
                // 'pol49', 'pol50', 'pol51',
                // 'pol52', 'pol53', 'pol54',
                // 'pol55', 'pol56', 'pol57',
                // 'pol58', 'pol59', 'pol60',
                // 'pol61', 'pol62',

                // 'WA', 'OR', 'CA', 'NV', 'UT',
                // 'NY', 'MT', 'WY', 'AZ', 'AK',
                // 'NM', 'CO', 'ND', 'SD', 'NE',
                // 'KS', 'OK', 'MS', 'MN', 'IA',
                // 'MO', 'AR', 'LA', 'AL', 'NY',
                // 'TN', 'FL', 'GA', 'SC', 'NC',
                // 'VA', 'WV', 'OH', 'PA', 'ME',
                // 'KY', 'ID', 'TX'
            ],


            sizeRocket: 3,
            sizeBoom: 30,

            colorBoom: '#0f0',
            colorRocket: '#0f0',
            colorTrail: '#0f0',


            stats: {
                mpol11: {
                    data: [],
                    results: null,
                },
                pol4: {
                    data: [],
                    results: null,
                },
            },

            group: null,
        };
    },
    computed: {
    },
    methods: {
        getStartPoint: function(d3Path) {
            var d = d3Path.attr("d");
            var dsplitted = d.split(",");
            return [parseInt(dsplitted[0].slice(1, -1)), parseInt(dsplitted[1])];
        },
        getEndPoint: function(d3Path) {
            var d = d3Path.attr("d");
            var dsplitted = d.split(",");
            return [parseInt(dsplitted[3]), parseInt(dsplitted[4])];
        },

        addDisappearingCircle: function(x, y, r, color) {
            var vm = this;

            var circle = vm.trailsContainer.append("circle");

            circle
                .style("opacity", 1)
                .style("fill", color || v.colorTrail)
                .style("stroke-width", 0)
                .style("z-index", 1)
                .attr("r",  r || 1)
                .attr("cy", y || 100)
                .attr("cx", x || 300)
                .transition()
                .duration(3000)
                .style("opacity", 0)
                .call(function() {
                    this.remove();
                })
                ;
        },

        addDisappearingLine: function(prev, curr, color) {
            var vm = this;

            if (!prev) {
                return;
            }

            var line = vm.trailsContainer.append("line");

            line
                .style("opacity", 1)
                .style("stroke", color || v.colorTrail)
                .attr("x1", prev[0])
                .attr("y1", prev[1])
                .attr("x2", curr[0])
                .attr("y2", curr[1])
                .transition()
                .duration(3000)
                .style("opacity", 0)
                .call(function() {
                    this.remove();
                })
                ;
        },
        findArc: function(params) {
            var vm = this;
            var found = null;
            vm.svg
                .selectAll('path.datamaps-arc')
                .each(function() {
                    var d = d3.select(this);
                    var data = d.data()[0];
                    if (_.find([data], params)) {
                        found = d.node();
                        return false;
                    }
                })
                ;
            return found;
        },

        launchRocket: function(origin, destination) {
            var vm = this;

            var color = Math.random() < vm.rand ? '#0f0' : '#f00';

            var path = vm.findArc({
                origin: origin,
                destination: destination,
            });
            d3Path = d3.select(path);

            var circle = vm.svgContainer.append("circle");

            var startPoint = vm.getStartPoint(d3Path);

            // draw start
            circle
                .style("fill", color || vm.colorRocket)
                .style("stroke-width", 0)
                .attr("r", 2)
                .attr("transform", "translate("+startPoint+")")
                ;


            // fly, fly!
            circle
                .transition()
                .duration(2000)
                .attr("r", vm.sizeRocket || 10)
                .tween("cx", function() {
                    var prev = null;
                    return function(percentDone) {
                        var translate = this.getAttribute('transform')
                            .slice(10, -1)
                            .split(',')
                            ;
                        vm.addDisappearingLine(prev, translate, color);
                        prev = translate;
                    };
                })
                .attrTween("transform", translateAlong(path))
                // .call(function() {
                //     console.log('boom');
                // })
                .transition()
                .duration(600)
                .attr("r", vm.sizeBoom || 70)
                .style("fill", color || vm.colorBoom)
                .style("opacity", '0')
                .call(function() {
                    vm.stats[destination].data.push({
                        type: color,
                    });
                    vm.afterBoom(origin, destination);
                    this.remove();
                })
                ;


            function translateAlong(path) {
                var l = path.getTotalLength();
                return function(i) {
                    return function(t) {
                        var p = path.getPointAtLength(t * l);
                        return "translate(" + p.x + "," + p.y + ")"; //Move marker
                    };
                };
            }
        },

        makeApocalypse: function() {
            var vm = this;
            vm.isApocalypse = true;
            var speed = 1000 * (400 * 60/10) / 3600;
            setInterval(function() {
                var arc = vm.arcs[Math.floor(Math.random() * vm.arcs.length)];
                vm.launchRocket(arc.origin, vm.isDdos ? 'TX' : arc.destination);
            }, speed);
        },


        /**
         * jenkins-style на карте
         */
        afterBoom: function(origin, destination) {
            var vm = this;

            var stats = vm.stats[destination];
            var results = stats.results;
            if (!results) {
                var path = vm.findArc({
                    origin: origin,
                    destination: destination,
                });
                var d3Path = d3.select(path);
                var point = vm.getEndPoint(d3Path);

                var result = vm.topContainer
                    .append('g')
                    ;

                result.append('text')
                    .attr('class', 'text fa')
                    .attr('text-anchor', 'middle')
                    .attr("transform", "translate("+point+")")
                    .attr('font-family', 'FontAwesome')
                    // .attr('font-size', function(d) { return 3+'em'} )
                    .attr('x', 0)
                    .attr('y', 10)
                    .style("color", '#fff')
                    .style('font-size', '3em')
                    .text(function(d) {
                        // http://fontawesome.io/cheatsheet/
                        return '\uf118';
                    })
                    ;

                results = result;
            }

            // var good = _.filter(stats.data, {type: '#0f0'});
            // var bad  = _.filter(stats.data, {type: '#f00'});
            var last = _.last(stats.data);

            var last10 = stats.data.slice(-10);
            var good = _.filter(last10, {type: '#0f0'});
            var bad  = _.filter(last10, {type: '#f00'});
            var state = good.length > 7 ? 'good' : good.length > 3 ? 'middle' : 'bad';

            d3.select(results[0][0]).selectAll('.text')
                .on('click', function() {
                    console.log('click');
                    vm.group = {
                        total: stats.data.length,
                        good: _.filter(stats.data, {type: '#0f0'}).length,
                        bad:  _.filter(stats.data, {type: '#f00'}).length,
                        last: last,
                        fakeTable: [
                            {
                                name: 'Nalog.ru',
                                status: 'работает 5 минут',
                            },
                            {
                                name: 'ЛК ИП',
                                status: 'недоступен 3 минуты',
                            },
                            {
                                name: 'ЛК ЮЛ',
                                status: 'работает 2 недели',
                            },
                        ],
                    };
                })
                .transition()
                .duration(600)
                .style('fill', function() {
                    if (state === 'good') {
                        return '#ff0';
                        // return '#6cb75d';
                    }
                    else if (state === 'middle') {
                        return '#999';
                    }
                    else if (state === 'bad') {
                        return '#e66565';
                    }
                })
                .text(function() {
                    if (state === 'good') {
                        return '\uf185';
                    }
                    else if (state === 'middle') {
                        return '\uf0c2';
                    }
                    else if (state === 'bad') {
                        return '\uf0e7';
                    }
                })
                ;

            vm.stats[destination].results = results;
        },
        //*/

    },
    ready: function() {
        var vm = this;
        var el = vm.$els.map;

        var dm = vm.DM = window.DM = new Datamap({
            element: el,
            // scope: 'custom',
            scope: 'custom',
            setProjection: function(element, options) {
                var projection, path;
                projection = d3.geo.conicEquidistant()
                    .scale(700)
                    .translate([500, 1000])
                    .rotate([-11, 0])
                    ;
                path = d3.geo.path()
                    .projection(projection)
                    ;

                return {
                    path: path,
                    projection: projection
                };
            },

            // scope: 'world', // Currently supports 'usa' and 'world', however with custom map data you can specify your own
            // setProjection: setProjection, // Returns a d3 path and projection functions
            // projection: 'equirectangular', // Style of projection to be used. try "mercator"
            height: null, // If not null, datamaps will grab the height of 'element'
            width: null, // If not null, datamaps will grab the width of 'element',
            responsive: true, // If true, call `resize()` on the map object when it should adjust it's size
            done: function() {
                // Callback when the map is done drawing
                dm.arc(vm.arcs);
                // dm.labels();
                // vm.makeApocalypse();
            },
            fills: {
                defaultFill: '#656d78' // The keys in this object map to the "fillKey" of [data] or [bubbles]
            },
            dataType: 'json', // For use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
            dataUrl: null, // If not null, datamaps will attempt to fetch this based on dataType ( default: json )
            geographyConfig: {
                dataUrl: '/data/ru.topo.json',
                // dataUrl: null, // If not null, datamaps will fetch the map JSON (currently only supports topojson)
                hideAntarctica: true,
                hideHawaiiAndAlaska: false,
                borderWidth: 1,
                borderOpacity: 1,
                borderColor: '#33414e',
                popupTemplate: function(geography, data) { // This function should just return a string
                    // console.log(geography);
                    return geography.id;
                },
                popupOnHover: false, // True to show the popup while hovering
                highlightOnHover: true,
                highlightFillColor: '#656d78',
                highlightBorderColor: '#999',
                highlightBorderWidth: 1,
                highlightBorderOpacity: 1
            },
            bubblesConfig: {
                borderWidth: 2,
                borderOpacity: 1,
                borderColor: '#FFFFFF',
                popupOnHover: true, // True to show the popup while hovering
                radius: null,
                popupTemplate: function(geography, data) { // This function should just return a string
                    return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
                },
                fillOpacity: 0.75,
                animate: true,
                highlightOnHover: true,
                highlightFillColor: '#FC8D59',
                highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                highlightBorderWidth: 2,
                highlightBorderOpacity: 1,
                highlightFillOpacity: 0.85,
                exitDelay: 100, // Milliseconds
                key: JSON.stringify
            },
            arcConfig: {
                strokeColor: '#DD1C77',
                strokeWidth: 0,
                arcSharpness: 1,
                animationSpeed: 0, // Milliseconds
                popupOnHover: false, // True to show the popup while hovering
                popupTemplate: function(geography, data) { // This function should just return a string
                    // Case with latitude and longitude
                    if ((data.origin && data.destination) && data.origin.latitude && data.origin.longitude && data.destination.latitude && data.destination.longitude) {
                        return '<div class="hoverinfo"><strong>Arc</strong><br>Origin: ' + JSON.stringify(data.origin) + '<br>Destination: ' + JSON.stringify(data.destination) + '</div>';
                    }
                    // Case with only country name
                    else if (data.origin && data.destination) {
                        return '<div class="hoverinfo"><strong>Arc</strong><br>' + data.origin + ' -> ' + data.destination + '</div>';
                    }
                    // Missing information
                    else {
                        return '';
                    }
                }
            }
        });

        // dm.labels();

        vm.arcs = [];
        _.each(vm.states, function(s1) { // from
            _.each(_.keys(vm.stats), function(s2) { // to
                vm.arcs.push({
                    origin: s1,
                    destination: s2,
                });
            });
        });

        // vm.arcs = [{
        //     origin: {
        //         latitude: 30.194444,
        //         longitude: -97.67
        //     },
        //     destination: 'mpol10',
        //     options: {
        //         strokeWidth: 2,
        //         strokeColor: 'rgba(100, 10, 200, 0.4)',
        //         greatArc: true
        //     }
        // }];

        // Arcs coordinates can be specified explicitly with latitude/longtitude,
        // or just the geographic center of the state/country.
        // dm.arc(vm.arcs);

        var svg = this.$els.map.getElementsByClassName('datamap')[0];

        vm.svg = d3.select(svg);

        vm.svg
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .attr('viewBox', '0 -100 1000 600')
            .attr('width', '')
            .attr('height', '')
            ;

        vm.trailsContainer = d3.select(svg)
            .append('g')
            .attr('class', 'trails')
            ;

        vm.svgContainer = d3.select(svg)
            .append('g')
            .attr('class', 'main')
            ;

        vm.topContainer = d3.select(svg)
            .append('g')
            .attr('class', 'top')
            ;

        // window.addEventListener('resize', DM.resize);
    },
});
