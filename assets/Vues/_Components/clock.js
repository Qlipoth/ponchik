Vue.component('fns-clock', Vue.extend({
    template: [
        '<div class="widget widget-danger widget-padding-sm">',
            '<div class="widget-big-int plugin-clock">{{bigDate}}</div>',
            '<div class="widget-subtitle plugin-date">{{smallDate}}</div>',
            '<div class="widget-buttons widget-c3">',
                '<div class="col">',
                    '<a href="#"><span class="fa fa-clock-o"></span></a>',
                '</div>',
                '<div class="col">',
                    '<a href="#"><span class="fa fa-bell"></span></a>',
                '</div>',
                '<div class="col">',
                    '<a href="#"><span class="fa fa-calendar"></span></a>',
                '</div>',
            '</div>',
        '</div>'
    ].join(' '),
    computed: {},
    methods: {},
    ready: function() {
        var vm = this;
        setInterval(function(){
            vm.bigDate = moment().format('HH:mm:ss');
            vm.smallDate = moment().format('DD-MM-YYYY');
        },100);

    },
    data: function() {
        return {
            bigDate: null,
            smallDate: null
        }
    },

}));
