Vue.component('fns-knob', Vue.extend({
    props: ['val'],
    template: [
        '<input v-el:knob value="29%" v-model="val"></input>'
    ].join(' '),
    computed: {},
    methods: {},
    data: function() {
        return {
        }
    },
    ready: function() {
        var vm = this;
        var knob = vm.$els.knob;
        $(knob).knob({
            format: function (v) { return v+'%' },
            readOnly: true,
            min: 0,
            max: 100,
            displayPrevious: true,
            fgColor: "#00e673"
        });
    },
}));
