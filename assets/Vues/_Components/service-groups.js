Vue.component('fns-service-groups', Vue.extend({
    template: [
        '<div class="col-md-9" v-if="serviceGroup">',
            '<div class="panel panel-default sg-panel ct">',
                '<div class="panel-heading">',
                    '<h3 class="panel-title ">',
                        '<strong>Группа сервисов {{serviceGroup.title}}</strong> ({{serviceGroup.count}})',
                    '</h3>',
                '</div>',
                '<div class="panel-body">',
                    '<fns-service-groups-table :tabledata="serviceGroup" ></fns-service-groups-table>',
                '</div>',
            '</div>',
        '</div>',
    ].join(' '),
    data: function() {
        return {
            serviceGroup: null,
        };
    },
    props: ['dataready'],
    ready: function() {
        var vm = this;
        vm.getData();
    },
    methods: {
        getData: function() {
            var vm = this;

            $.post('/getServiceGroupData', { serviceGroupName: decodeURIComponent(location.pathname.split('/').pop())})
            .done(function(response) {
                console.log(response)
                vm.serviceGroup = response.serviceGroup;
                vm.dataready = true;
            })
            .fail(function() {
                console.log("error");
            })
        },
    },
}));
