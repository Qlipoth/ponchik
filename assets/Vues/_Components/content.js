Vue.component('fns-content', Vue.extend({
    props: ['title'],
    template: [
        '<div class="col-md-8">',
            '<slot></slot>',
        '</div>',
    ].join(' '),
    computed: {},
    methods: {},
    ready: function() {

    },
}));
