$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div>',
                '<button @click="getServiceList" class="btn btn-primary mb-10">load services</button>',
                // '<pre>{{pre | json}}</pre>',
                '<div v-for="service in services" class="btn btn-primary mb-10" @click="getServiceData(service)">',
                    '{{service.description}}',
                '</div>',
                '<button @click="getGroupServiceData" class="btn btn-primary mb-10">group services</button>',
            '</div>',
        ].join(' '),
        data: {
            services: null,
            //
            current: '',
        },
        computed: {
        },
        methods: {
            getServiceList: function() {
                var vm = this;
                $.get('aggregate/API/services')
                    .done(function(results) {
                        vm.services = results;
                    })
                    .fail(mp.err)
                    ;
            },
            getGroupServiceData: function() {
                var vm = this;
                $.get('/aggregate/API/groupService/3921568474282852352gos_reg')
                    .done(function(results) {
                        console.log(results);
                    })
                    .fail(mp.err)
                    ;
            },
            getServiceData: function(service) {
                var vm = this;
                $.get('aggregate/API/'+service.name)
                    .done(function(results) {
                        console.log(results);
                    })
                    .fail(mp.err)
                    ;
            },
        },
    });

});
