Vue.component('fns-tile', Vue.extend({
    props: ['title'],
    template: [
        '<div class="panel panel-primary">',
            '<div class="panel-heading">',
                '<h4 class="panel-title">',
                    '<span>{{title}}</span>',
                '</h4>',
                '<h4><slot name="header"></slot></h4>',
            '</div>',
            '<div class="panel-body">',
                '<slot></slot>',
            '</div>',
        '</div>',
    ].join(' '),
    computed: {},
    methods: {},
    ready: function() {

    },
}));
