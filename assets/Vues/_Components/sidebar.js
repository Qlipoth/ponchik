Vue.component('fns-sidebar', Vue.extend({
    props: ['title'],
    template: [
        '<div class="col-lg-3 col-md-12 picker fns-sidebar">',
            '<slot></slot>',
        '</div>',
    ].join(' '),
    computed: {},
    methods: {},
    ready: function() {

    },
}));
