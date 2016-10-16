Vue.component('re-modal', {
    template: [
        '<div class="hidden">',
            '<div v-el:modal class="re-white-popup" v-if="item">',
                '<div class="panel panel-primary">',
                    '<div class="panel-heading">',
                        '<div class="panel-title">',
                            '{{title}}',
                        '</div>',
                    '</div>',
                    '<div class="panel-body">',
                        '<slot></slot>',
                    '</div>',
                    //
                    //// Bottom buttons
                    //
                    '<div class="panel-footer" v-if="showfooter">',
                        '<div class="row bottom-buttons mt10">',
                            '<div class="pull-right">',
                                '<button class="btn" @click="hide()">{{cancelText}}</button>',
                                '<button class="btn btn-primary" @click="save()">{{okText}}</button>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
                // '<pre>{{item | json}}</pre>',
            '</div>',
        '</div>',
    ].join(' '),
    props: {
        showfooter: true,
        item: {},
        save: {},
        close: {},
        title: {},
        afterShow: {},
        okText: {
            type: String,
            default: 'Save',
        },
        cancelText: {
            type: String,
            default: 'Cancel',
        },
        selectedtemplate: {

        }
    },
    watch: {
        item: function(val) {
            if (val) {
                this.show();
            }
            else {
                this.hide();
            }
        },
    },
    data: function() {
        return {
                selected: {
            },
        };
    },
    methods: {
        save: function() {
            this.$emit('save', this.selectedtemplate);
            return this.hide();
        },
        show: function() {
            var vm = this;
            $.magnificPopup.open({
                items: {
                    src: vm.$els.modal,
                    type: 'inline'
                },
                callbacks: {
                    open: function() {
                        vm.$emit('after-show');
                    },
                    close: function() {
                        vm.item = null;
                        vm.$emit('close');
                    },
                },
            });
        },
        hide: function() {
            $.magnificPopup.close();
        },
    },
    ready: function() {
        var vm = this;
    },
});
