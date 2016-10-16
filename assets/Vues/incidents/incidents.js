$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
            template: [
                '<div class="clearfix">',
                    '<fns-incident></fns-incident>',
                    '<fns-sidebar>',
                        '<div class="col-sm-12 col-md-12 col-xs-12">',
                            '<fns-tile title="Данные за период">',
                                '<fns-periodpicker v-if="incidentCount" :clickhandler="getData"></fns-periodpicker>',
                            '</fns-tile>',
                        '</div>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Количество инцидентов">',
                                '<fns-incident-pie v-if="dataready" :extend="incidentCount"></fns-incident-pie>',
                            '</fns-tile>',
                        '</div>',
                        '<div class="col-sm-6 col-md-12 col-xs-12">',
                            '<fns-tile title="Относительная длительность инцидентов">',
                                '<fns-incident-pie v-if="dataready" :extend="incidentDuration"></fns-incident-pie>',
                            '</fns-tile>',
                        '</div>',
                    '</fns-sidebar>',
                '</div>'
            ].join(' '),
        data: function() {
            return {
                dataready: false,
                incidentCount: null,
                incidentDuration: null,
            };
        },
        computed: {
        },
        ready: function() {
            var vm = this;
            vm.getData();
        },
        methods: {
            getData: function() {
                $.post('/getIncidentPieData')
                .done(function(response) {
                    console.log(response)
                    vm.incidentCount = {
                        data: {
                            content: [
                                {
                                    value: parseInt(response.count.yellow) || 0,
                                    color: '#f7d11d',
                                    state: 'Останов'

                                },
                                {
                                    value: parseInt(response.count.red) || 0,
                                    color: '#ff0000',
                                    state: 'Критическая ошибка'

                                },
                                {
                                    value: parseInt(response.count.orange) || 0,
                                    color: '#f26522',
                                    state: 'Ошибка'
                                },
                                {
                                    value: parseInt(response.count.blue) || 0,
                                    color: '#00aeef',
                                    state: 'Предупреждение'
                                },
                            ]
                        },
                    };
                    vm.incidentDuration = {
                        data: {
                            content: [
                                {
                                    value: parseInt(response.duration.yellow) || 0,
                                    color: '#f7d11d',
                                    state: 'Останов'
                                },
                                {
                                    value: parseInt(response.duration.red) || 0,
                                    color: '#ff0000',
                                    state: 'Критическая ошибка'
                                },
                                {
                                    value: parseInt(response.duration.orange) || 0,
                                    color: '#f26522',
                                    state: 'Ошибка'
                                },
                                {
                                    value: parseInt(response.duration.blue) || 0,
                                    color: '#00aeef',
                                    state: 'Предупреждение'
                                },
                            ]
                        },
                    };
                    vm.dataready = true;
                })

                .fail(function() {
                    console.log("error");
                })
            }
        },
    });

});
