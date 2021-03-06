Vue.component('documents', Vue.extend({
    template: [
        '<div class="panel panel-default">',
            '<div class="panel-body">',
                '<div class="col-md-12 form-group">' ,
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
                // '<div class="col-md-4 form-group">',
                //     '<h4><span class="fa fa-download"></span> Загузить документы</h4>',
                //     '<br>',
                //     '<form action="#" class="dropzone dropzone-mini"></form>',
                // '</div>',
                '<div class="col-md-12">',
                    '<form v-el:frm action="/?r=project-file%2Fupload" method="POST" enctype="multipart/form-data">',
                        '<div class="btn btn-primary btn-file"> ',
                            '<i class="glyphicon glyphicon-folder-open"></i> &nbsp;Добавить документ',
                            '<input @change="onFileChange" name="ProjectUploadFile[projectFile]" type="file" id="doc" />',
                        '</div>',
                    '</form>',
                '</div>',
            '</div>',
        '</div>',
    ].join(' '),
    computed: {},
    ready: function() {
        var vm = this;
        this.restoreFromLs();
    },
    methods: {
        saveToLs: function() {
            localStorage.setItem('documentsformdata', JSON.stringify({
                docs: this.docs,
            }));
        },
        restoreFromLs: function() {
            _.extend(this, JSON.parse(localStorage.getItem('documentsformdata')));
        },
        removeDoc: function(doc) {
            this.docs.$remove(doc);
            this.saveToLs();
        },
        onFileChange: function(e) {
            var files = e.target.files || e.dataTransfer.files;
            var file = _.first(files);
            if (!file) {
                return;
            }
            this.docs.push({
                iconCls: 'fa fa-file-text-o',
                title: file.name,
            });
            this.saveToLs();
        },
    },
    data: function() {
        return {
            doc: null,
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
