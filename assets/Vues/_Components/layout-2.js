Vue.component('fns-layout-2', {
    template: [
       '<table class="template">',
            '<tr>',
                '<td>',
                    '<span class="remove-widget">',
                        '<button type="button" class="btn btn-danger">',
                            '<i class="fa fa-remove"></i>',
                        '</button>',
                    '</span>',
                    '<div v-if="!preview">',
                        '<p class="text-center h2 change-widget">Выберите виджет</p>',
                    '</div>',
                '</td>',
                '<td>',
                    '<span class="remove-widget">',
                        '<button type="button" class="btn btn-danger">',
                            '<i class="fa fa-remove"></i>',
                        '</button>',
                    '</span>',
                    '<div v-if="!preview">',
                        '<p class="text-center h2 change-widget">Выберите виджет</p>',
                    '</div>',
                '</td>',
                '<td>',
                    '<span class="remove-widget">',
                        '<button type="button" class="btn btn-danger">',
                            '<i class="fa fa-remove"></i>',
                        '</button>',
                    '</span>',
                    '<div v-if="!preview">',
                        '<p class="text-center h2 change-widget">Выберите виджет</p>',
                    '</div>',
                '</td>',
            '</tr>',
        '</table>',
    ].join(' '),
    props: {
        val: {
            type: Number,
            defaults: 1
        },
        preview: {
            type: Boolean,
            defaults: false
        }
    },
    data: function() {
        return {

        };
    },
    ready: function() {
        var vm = this;
    },
});
