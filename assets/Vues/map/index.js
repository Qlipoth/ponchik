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

$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
        template: [
            '<fns-map></fns-map>',
        ].join(' '),
        data: {
        },
        computed: {
        },
        methods: {
        },
        ready: function() {
        },
    });

});
