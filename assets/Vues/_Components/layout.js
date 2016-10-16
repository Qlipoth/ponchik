Vue.component('fns-layout', {
    template: [
        '<div class="template-box">',
            '<div v-el:template',
                'v-for="t in templates"',
                ':class="{\'template-selected\': t.val == selectedtemplate}"',
                '@click="selectedtemplate = t.val"',
            '>',
                '{{{t.html}}}',
            '</div>',
        '</div>',
    ].join(' '),
    props: {
         templates: {
            type: Array,
            required: true,
        },
        selectedtemplate: {

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
