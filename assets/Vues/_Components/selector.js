Vue.component('re-selector', {
    template: [
        '<div id="widgetSelector">',
            '<div class="list-group">',
              '<a v-for="w in widgets" href="#" class="list-group-item">{{w}}</a>',
            '</div>',
        '</div>',
    ].join(' '),
    props: {
        widgets: {
            type: Array,
            defaults: []
        },
        item: {},
        // save: {},
        // close: {},
        // title: {},
        // afterShow: {},
        // okText: {
        //     type: String,
        //     default: 'Save',
        // },
        // cancelText: {
        //     type: String,
        //     default: 'Cancel',
        // },
        // selectedtemplate: {

        // }
    },
    watch: {
        item: function(val) {
            if (val) {
                this.show();
            }
            else {
                this.hide();
            }
        },
    },
    data: function() {
        return {
                selected: {
            },
        };
    },
    methods: {
        show: function() {
            var vm = this;
            $('#widgetSelector').show();
        },
        hide: function() {
            $('#widgetSelector').hide();
        },
    },
    ready: function() {
        var vm = this;
        vm.hide();
    },
});
