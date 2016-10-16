$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div class="col-md-12">',
                '<div class="row">',
                    '<div class="col-md-8">',
                       '<fns-tile class="nigga fns-services-groups" title="Доступность групп сервисов">',
                            '<fns-pie url="/aggregate/API/services/nalog" class="col-md-4"></fns-pie>',
                        '</fns-tile>',
                    '</div>',
                '</div>',
            '</div>'
        ].join(' '),
        data: function() {
            return {
                toggled: true,
                timeline: [],
                pie: {
                    url: '/aggregate/API/services/nalog'
                },
            }
        },
        computed: {
        },
        ready: function() {
        },
        methods: {
        },
    });

});

