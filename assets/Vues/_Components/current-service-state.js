Vue.component('fns-current-service-state', Vue.extend({
    template: [
        '<div class="row cs-state" v-if="state">',
            '<div>',
                '<h5><i class="fa fa-circle bad"></i>Критическая ошибка</h5>',
                '<h5><i class="fa fa fa-flag-o"></i>{{state.date}}</h5>',
                '<h5><i class="fa fa-clock-o"></i>{{state.duration}}</h5>',
            '</div>',
            '<div>',
                '<h5><i class="fa fa-circle bad"></i>{{state.bad}}</h5>',
                '<h5><i class="fa fa-circle good"></i>{{state.good}}</h5>',
            '</div>',
        '</div>',
    ].join(' '),
    data: function() {
        return {
            state: null,
        }
    },
    methods: {
        getData: function() {
            var vm = this;

            $.post('/getCurrentState', { serviceName: decodeURIComponent(location.pathname.split('/').pop())})
            .done(function(response) {
                vm.state = response.state;
            })
            .fail(function() {
                console.log("error");
            })
        },
    },
    ready: function() {
        var vm = this;
        vm.getData();
    },
}));
