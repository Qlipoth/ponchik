Vue.component('fns-sorter', {
    template: [
        '<div class="sorter">',
            '<re-button-selector :buttons="buttons" :selected.sync="selected"></re-button-selector>',
            '<h6 class="text-center">{{periodlabel}}</h6>',
        '</div>',
    ].join(' '),
    props: {
        sgroups: {
            type: Array,
        },
        datageted: {
            type: Boolean,
            defaults: false
        }
    },
    data: function() {
        return {
            selected: 0,
            periodlabel: null,
            buttons: [
                {
                    text: ['<i class="fa fa-circle bad"></i>&nbsp;',
                            '<i class="fa fa-long-arrow-right"></i>&nbsp;',
                            '<i class="fa fa-circle good"></i>'].join(' '),
                    value: 0
                },
                {
                    text: ['<i class="fa fa-circle good"></i>&nbsp;',
                            '<i class="fa fa-long-arrow-right"></i>&nbsp;',
                            '<i class="fa fa-circle bad"></i>'].join(' '),
                    value: 1
                },
                {
                    text: ['А&nbsp;',
                            '<i class="fa fa-long-arrow-right"></i>&nbsp;',
                            'Я'].join(' '),
                    value: 2
                },
                {
                    text: ['Я&nbsp;',
                            '<i class="fa fa-long-arrow-right"></i>&nbsp;',
                            'А'].join(' '),
                    value: 3
                },
            ],
        };
    },
    watch: {
        selected: function() {
            var vm = this;
            if (vm.selected === 1) {
                return vm.sortByStatus(2);
            }
            if (vm.selected === 2) {
                return vm.sortByAsc();
            }
            if (vm.selected === 3) {
                return vm.sortByDesc();
            }

            return vm.sortByStatus(5);
        },
        datageted: function() {
            var vm = this;
            if (vm.datageted && vm.selected === 1) {
                return vm.sortByStatus(2);
            }
            if (vm.datageted && vm.selected === 2) {
                return vm.sortByAsc();
            }
            if (vm.datageted && vm.selected === 3) {
                return vm.sortByDesc();
            }
            return vm.sortByStatus(5);
        }
    },
    methods: {
        sortByStatus: function(status) {
            this.sgroups = _(this.sgroups)
                .sortBy(function(o) {
                    var filtered = _.filter(o.data.content, function(el) {
                        return el.status === status;
                    })
                    o.filtered = filtered;
                    o.sum = _.reduce(o.data.content, function(sum, n) {
                        return sum + n.value;
                    }, 0);
                    console.log()
                    return o.filtered[0].value;
                })
                .reverse()
                .value()
        },
        sortByAsc: function() {
            this.sgroups = _.orderBy(this.sgroups, 'title', 'asc');
        },
        sortByDesc: function() {
            this.sgroups = _.orderBy(this.sgroups, 'title', 'desc');
        },
    },
    ready: function() {
    },
});
