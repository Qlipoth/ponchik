// https://github.com/IonDen/ion.rangeSlider
//
// bower i -S ionrangeslider
//
Vue.component('re-slider', {
    template: [
        '<div class="re-slider">',
            '<input',
                'v-el:input',
                'type="text"',
                'class="js-range-slider"',
                'value=""',
                '/>',
        '</div>',
    ].join(' '),
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 0,
        },
        from: {
            // type: Number,
            default: 0,
        },
        to: {
            // type: Number,
            default: 0,
        },
        prettify: {
            type: Function,
            default: function(v) {
                return v;
            },
        },
        // events
        ready: {},
    },
    data: function() {
        return {
        };
    },
    watch: {
        from: function() {
            this.update();
        },
        to: function() {
            this.update();
        },
    },
    methods: {
        update: function(data) {
            this.Slider.update(_.extend({
                from: this.from,
                to: this.to,
            }, data));
        },
        onFinish: function(data) {
            _.extend(this, data);
            console.log('finished', data)
        },
    },
    ready: function() {
        var vm = this;
        var $slider = $(vm.$els.input);

        $slider.ionRangeSlider({
            type: "double",
            min: vm.min,
            max: vm.max,
            from: vm.from,
            to: vm.to,
            onFinish: vm.onFinish,
            prettify: vm.prettify,
            onUpdate: function() {
                // console.debug('onUpdate');
            },
            onStart: function() {
                // console.debug('onStart');
                var bakFrom = _.clone(vm.from);
                var bakTo = _.clone(vm.to);
                vm.from = null;
                vm.to = null;
                vm.$nextTick(function() {
                    vm.from = bakFrom;
                    vm.to = bakTo;
                    vm.$emit('ready');
                });
            },
        });

        vm.Slider = $slider.data("ionRangeSlider");
    },
});
