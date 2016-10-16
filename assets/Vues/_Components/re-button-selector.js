//
Vue.component('re-button-selector', {
    template: [
        '<div class="re-button-selector">',
            '<div class="btn-group form-group">',
                '<button',
                    'v-for="button in buttons"',
                    'class="btn"',
                    ':class="{\'btn-primary\': button.value == selected, \'btn-empty\': button.value != selected}"',
                    '@click="changePeriod(button.value)"',
                    '>',
                    '{{{button.text}}}',
                '</button>',
            '</div>',
        '</div>',
    ].join(' '),
    props: {
        buttons: {
            type: Array,
            required: true,
        },
        selected: {
        },
        ispicker: {
            type: Boolean
        },
        onshowpicker: {}
    },
    data: function() {
        return {
            periodlabel: null,
        };
    },
    watch: {
    },
    methods: {
        changePeriod: function(v) {
            var vm = this;
            vm.selected = v;
            if (v === 5 && vm.ispicker) {
                vm.$emit('onshowpicker', true);
            }
        }
    },
    ready: function() {
        var vm = this;
        var now = new Date;
        vm.periodlabel = moment(now).subtract(1, 'hours').format('HH:mm') + ' ― ' + moment(now).format('HH:mm')
    },
});
