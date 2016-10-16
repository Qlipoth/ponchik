$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div>',
                '<re-table',
                    ':url="url"',
                    ':config="config"',
                    ':fn-edit="onEdit"',
                    ':fn-remove="onRemove"',
                    '>',
                '</re-table>',
            '</div>',
        ].join(' '),
        data: {
            url: location.pathname+'/table',
            config: {
                columns: [
                    {
                        title: '#',
                        data: 'id',
                    },
                    {
                        title: 'login',
                        data: 'login',
                    },
                    {
                        title: 'email',
                        data: 'email',
                    },
                    {
                        title: 'registered',
                        data: 'createdAt',
                        render: function(value) {
                            return moment(value).format(ddf);
                        },
                    },
                    {
                        title: 'roles',
                        data: 'roles',
                        render: function(value) {
                            return _.map(value, 'name').join(', ');
                        },
                    },
                ],
            }
        },
        computed: {
        },
        methods: {
            onEdit: function(data, cell, dataTable) {
                location.href = 'profile/edit?id='+data.id;
            },
            onRemove: function(data, cell, dataTable) {
                mp.alert('not implemented yet');
            },
        },
    });

});
