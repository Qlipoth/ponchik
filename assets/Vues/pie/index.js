/**
 * Модифицированный "пирожок"
 * http://d3pie.org/#generator-labels
 *
 */

$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
        template: [
            // '<div><button @click="drawCenter()" class="btn btn-primary">draw center</button></div>',
            // '<div><button @click="lastEvent.type=\'good\'" class="btn btn-primary">good</button></div>',
            // '<div><button @click="lastEvent.type=\'bad\'" class="btn btn-primary">bad</button></div>',
            '<fns-pie></fns-pie>',
        ].join(' '),
        data: {
        },
        watch: {
        },
        computed: {
        },
        methods: {
        },
        ready: function() {
            var vm = this;
        },
    });

});
