$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div>',
                '<div class="panel panel-default">',
                    '<div class="panel-body">',
                        '<div class="table-responsive">',
                            '<table v-el:dt class="table re-datatable"></table>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
    ].join(' '),
        data: {
            rows: [],
            DT: null,
        },
        computed: {
        },
        methods: {
        },
        ready: function() {
            var vm = this;

            var generated = [];
            for (var i = 0; i < 9999; i++) {
                var str = Math.random().toString(36).substring(5);
                generated.push([i, str, str, str, str, str]);
            }
            vm.rows = generated;

            var table = vm.$els.dt;
            vm.DT = $(table).DataTable({
                dom: 'ZBfrtip',
                "colResize": {
                    "handleWidth": 10
                },
                scrollX: true,
                data: vm.rows,
                deferRender: true,
                columns: [
                    {title: '#'},
                    {title: 'String #1'},
                    {title: 'String #2'},
                    {title: 'String #3'},
                    {title: 'String #4', bVisible: false},
                    {title: 'String #5'},
                ],
                buttons: [
                    { // https://datatables.net/extensions/buttons/examples/column_visibility/index.html
                        extend: 'colvis',
                        columns: '3,4,5'
                    },
                ],
            });

        },
    });

});
