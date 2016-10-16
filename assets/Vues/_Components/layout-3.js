Vue.component('fns-layout-3', {
    template: [
           '<table class="template">',
                '<tr>',
                    '<td>',
                        '<span class="remove-widget">',
                            '<button type="button" class="btn btn-danger">',
                                '<i class="fa fa-remove"></i>',
                            '</button>',
                        '</span>',
                        '<div v-if="!preview && !wselected">',
                            '<p class="text-center h2 change-widget">Выберите виджет</p>',
                        '</div>',
                        '<div v-else>',
                            '<ul>',
                                '<li v-for="i in prop.left">',
                                    '{{i.name}}',
                                '</li>',
                            '</ul>',
                        '</div>',
                    '</td>',
                    '<td>',
                        '<span class="remove-widget">',
                            '<button type="button" class="btn btn-danger">',
                                '<i class="fa fa-remove"></i>',
                            '</button>',
                        '</span>',
                        '<div v-if="!preview && !wselected">',
                            '<p class="text-center h2 change-widget">Выберите виджет</p>',
                        '</div>',
                        '<div v-else>',
                            '<ul>',
                                '<li v-for="i in prop.right">',
                                    '{{i.name}}',
                                '</li>',
                            '</ul>',
                        '</div>',
                    '</td>',
                '</tr>',
            '</table>',
    ].join(' '),
     props: {
        val: {
            type: Number,
            defaults: 2
        },
        preview: {
            type: Boolean,
            defaults: false
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
