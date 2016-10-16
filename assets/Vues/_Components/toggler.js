Vue.component('fns-toggler', Vue.extend({
    template: [
        '<label class="switch">',
            '<input type="checkbox" v-model="checked">',
            '<span></span>',
        '</label>',
    ].join(' '),
    data: function() {
        return {
            // checked: false
        }
    },
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
    },
    computed: {},
    methods: {
        toggle: function() {
            var vm = this;
            vm.checked = !vm.checked;
        }
    },
    ready: function() {

    },
}));
