// https://silviomoreto.github.io/bootstrap-select/examples/
//
// bower i -S bootstrap-select
//
Vue.component('re-combo', {
    template: [
        '<div class="re-combo">',
            '<select v-el:select',
                'class="form-control show-tick"',
                'disabled="{{disabled}}"',
                'multiple="{{multiple}}"',
                'data-max-options="{{maxoptions}}"',
                'data-live-search="{{livesearch}}"',
                'data-actions-box="true"',
                'data-header="{{header}}"',
                'data-size="5"',
                'title="{{header}}"',
                '>',
                '<option',
                    'v-for="opt in options"',
                    'value="{{opt.value || opt}}"',
                    'selected="{{checkSelected(opt.value || opt)}}"',
                    'disabled="{{opt.disabled}}"',
                    '>',
                    '{{opt.name || opt}}',
                '</option>',
            '</select>',
        '</div>',
    ].join(' '),
    props: {
        livesearch: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        selected: {
            // type: Array,
            default: '',
        },
        options: {
            type: Array,
            default: null,
        },
        src: {
            type: String,
            default: null,
        },
        header: {
            type: String,
            default: 'not selected',
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        maxoptions: {
            type: Number,
            default: 99,
        },
        placeholder: {
            type: String,
            default: 'nothing selected',
        },
        mapper: {
            type: Function,
            default: function(i) {
                return i;
            },
        },
        // events
        afterSelected: {},
    },
    data: function() {
        return {
        };
    },
    watch: {
        options: function() {
            this.onOptionsLoaded();
        },
        disabled: function() {
            this.setDisabled(this.disabled);
        },
    },
    methods: {
        checkSelected: function(value) {
            return !!_.find(this.selected, function(item) {
                return value == item;
            });
        },
        onOptionsLoaded: function() {
            var vm = this;

            vm._select = $(vm.$els.select).selectpicker();

            vm._select.on('change', function() {
                var selected = vm._select.selectpicker('val');
                if (selected) {
                    if (!Array.isArray(selected)) {
                        selected = [selected];
                    }
                }
                else {
                    selected = [];
                }

                var diff = _.difference(selected, vm.selected);
                if (!diff.length) {
                    return;
                }
                vm.selected = selected;
                console.log('set selected:', selected);
                vm.$emit('after-selected');
            });

            // vm._select.attr('disabled', false);
            vm._select.selectpicker('refresh');
        },

        formatMsg: function() {
            return _.extend({payload: true}, this.msg, {
                conditions: this.$parent.getConditions(),
            });
        },

        getFullValue: function(value) {
            return _.find(this.options, {value: value});
        },

        setDisabled: function(state) {
            var vm = this;
            vm._select.prop('disabled', state);
            vm._select.selectpicker('refresh');
        },
    },
    ready: function() {
        var vm = this;
        console.log(vm.livesearch)
        window.sel = vm;
        if (vm.options) {
            if (this.src) {
                console.warn('src vs options... options win!');
            }
            return vm.onOptionsLoaded();
        }
        if (vm.src) {
            return $.get(vm.src, function(data) {
                vm.options = _.map(data, vm.mapper);
                vm.$nextTick(function() {
                    return vm.onOptionsLoaded();
                });
            })
            .fail(function(err) {
                console.error(err);
                return mp.err('что-то пошло не так...');
            })
            ;
        }
        console.warn('no src, no options... wtf?!');
        vm.options = [];
        return vm.onOptionsLoaded();
    },

    destroyed: function() {
        var vm = this;
        vm._select.selectpicker('destroy');
    },
});
