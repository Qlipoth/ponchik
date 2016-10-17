Vue.component('documents', Vue.extend({
    template: [
        '<div class="panel panel-default">',
            '<div class="panel-body">', 
                '<div class="col-md-8 form-group">' ,
                    '<h4>Перечень прикрепленных документов</h4>',
                    '<br>',
                    '<ul v-if="docs.length"class="list-group border-bottom">',
                        '<li class="list-group-item" v-for="doc in docs">',
                            '<span>{{doc.title}}</span>',
                            '<i @click="removeDoc(doc)" class="fa fa-remove pull-right"></i>',
                        '</li>',
                    '</ul>',
                    '<p v-else>Документы отсутсвуют</p>',
                '</div>',
                '<div class="col-md-4 form-group">',
                    '<h4><span class="fa fa-download"></span> Загузить документы</h4>',
                    '<br>',
                    '<form action="#" class="dropzone dropzone-mini"></form>',
                '</div>',
                '<div class="col-md-12">',
                    '<button class="btn btn-primary">Сохранить</button>',
                '</div>',
            '</div>',
        '</div>',
    ].join(' '),
    computed: {},
    methods: {},
    ready: function() {
        var vm = this;

    },
    methods: {
        removeDoc: function(doc) {
            this.docs.$remove(doc)
        }
    },
    data: function() {
        return {
            docs: [
                {
                    iconCls: 'fa fa-file-text-o',
                    title: 'Документ1'
                },
                {
                    iconCls: 'fa fa-file-text-o',
                    title: 'Документ2'
                },
                {
                    iconCls: 'fa fa-file-text-o',
                    title: 'Документ3'
                },
                {
                    iconCls: 'fa fa-file-text-o',
                    title: 'Документ4'
                },
            ]
        }
    },

}));
