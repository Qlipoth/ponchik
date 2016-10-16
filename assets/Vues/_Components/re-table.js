Vue.component('re-table', Vue.extend({
    template: [
        '<div>',
            '<div class="panel panel-default ">',
                // '<pre>{{checked | json}}</pre>',
                '<slot name="pre-table"></slot>',
                '<div class="panel-body">',
                    '<div class="table-responsive table-panel">',
                        '<table v-el:dt class="table re-datatable"></table>',
                    '</div>',
                    '<slot></slot>',
                '</div>',
            '</div>',
        '</div>',
    ].join(' '),
    props: {
        // откуда таблица будет брать данные
        url: {
            type: String,
            required: false,
        },
        rows: {
            type: Array,
            default: function() {return [];},
        },
        onrowclick: {},
        // конфиг таблицы
        config: {
            type: Object,
            coerce: function(obj) {
                return _.extend({
                    data: [],
                    columns: [],
                    dom: 'ZBfrtip',
                    colResize: {
                        handleWidth: 10
                    },
                    scrollX: true,
                    deferRender: true,
                    buttons: [
                        { // https://datatables.net/extensions/buttons/examples/column_visibility/index.html
                            extend: 'colvis',
                            // columns: '3,4,5'
                        },
                    ],
                    // pageLength: 3,
                }, obj);
            },
        },

        checked: {
            type: Array,
            // default: function() {return [];},
        },
    },
    data: function() {
        return {
            DT: null,
        };
    },
    watch: {
        // TODO: @gleam - пишу по наитию, без инета.
        // Наверняка это костыли.
        //
        // Ожидаю от метода - обновление данных при изменении строк
        rows: function() {
            var vm = this;
            var DT = vm.DT;
            DT.clear();
            DT.rows.add(vm.rows);
            // _.each(vm.rows, function(row) {
            //     DT.row.add(row);
            // });
            vm.$nextTick(function() {
                DT.draw();
            });
            console.debug('rows changed');
        },
    },
    methods: {
        redraw: function() {
            this.DT.draw();
        },
        // adds row into table
        add: function(row) {
            this.DT.row.add(row).draw(false);
        },
        updateData: function(oldData, newData) {
            var rowIdx = this.getRowIdxByData(oldData);
            var row = this.DT.row(rowIdx);
            if (row.length === 0) {
                console.warn('Row not found. Data not set.');
                return;
            }
            row.data(newData).draw(false);
        },
        getRowDataByIdx: function(idx) {
            return this.DT.rows(idx).data()[0];
        },
        getRowIdxByData: function(data) {
            var found = null;
            this.DT.rows().every(function(idx) {
                var rows = this;
                var rowData = [rows.row(idx).data()];
                if (!found && _.findIndex(rowData, data) !== -1) {
                    found = idx;
                    return false;
                }
                return true;
            });
            return found;
        },

        // у таблицы есть колонка с чекбоксами
        // datatables draw callback
        //
        onDraw: function(el) {
            var vm = this;
            new Vue({
                el: el,
                methods: {
                    // поставили чек
                    //
                    // осторожно, замыкание!
                    //
                    setChecked: function(data) {
                        if (data === 'all') {
                            return this.setAllChecked(true);
                        }
                        vm.checked.push({
                            row: data,
                        });
                        this.afterCheckchange();
                    },
                    // сняли чек
                    //
                    // осторожно, замыкание!
                    //
                    setUnchecked: function(data) {
                        if (data === 'all') {
                            return this.setAllChecked(false);
                        }
                        var found = _.find(vm.checked, {row: data});
                        vm.checked.$remove(found);
                        this.afterCheckchange();
                    },

                    // изменили состояние чек-ол
                    //
                    // осторожно, замыкание!
                    //
                    setAllChecked: function(state) {
                        console.log(vm);
                        if (state === true) {
                            $(vm.$el).find('.re-datatable tbody .re-check').iCheck('check');
                        }
                        else {
                            $(vm.$el).find('.re-datatable tbody .re-check').iCheck('uncheck');
                        }
                    },


                    afterCheckchange: function() {
                        this.$nextTick(function() {
                            var hCheck = $(vm.$el).find('.re-datatable thead .re-check');
                            var checks = $(vm.$el).find('.re-datatable tbody .re-check');
                            var count = vm.checked.length;
                            if (count === checks.length) {
                                hCheck.iCheck('check');
                            }
                            else if (count === 0) {
                                hCheck.iCheck('uncheck');
                            }
                            else {
                                hCheck.iCheck('uncheck');
                                // TODO
                                // это правильно, но в шаблоне не реализовано
                                // hCheck.iCheck('indeterminate');
                            }
                        });
                    },
                },
            });
        },
        getCheckedData: function() {
            var vm = this;
            return _.map(this.checked, function(ch) {
                return vm.getRowDataByIdx(ch.row);
            });
        },
    },
    ready: function() {
        var vm = this;
        var dt = vm.$els.dt;

        // инициализирую "кнопочные" колонки
        $(dt).on('click', '.buttonsColumn', function(e) {
            var cell = $(this);
            var actionIdx = $(e.target).data('actionidx');
            var action = vm.config.actions[actionIdx];
            var rowData = _.extend({}, vm.DT.cell($(this)).data());

            try {
                vm.$parent[action.emits](rowData, this, vm.DT);
            }
            catch (err) {
                console.warn('catch err:', err);
            }

            return false;
        });
        if (vm.url) {
            return $.get(vm.url)
                .done(next)
                .fail(mp.err)
                ;
        }
        else if (vm.rows) {
            return next(vm.rows);
        }
        else {
            console.warn('vm.url or vm.rows required!');
        }

        function next(rows) {
            var conf = _.extend(vm.config, {
                data: rows,
                language: {
                    search: "Поиск:",
                    paginate: {
                        first:      "Первая",
                        last:       "Последняя",
                        next:       "Следующая",
                        previous:   "Предыдущая"
                    },
                    info:           "Показано _START_ из _END_ из _TOTAL_ записей",
                    buttons: {
                        colvis: 'Видимые колонки'
                    }
                }
            });

            if (vm.checked) {
                // у таблицы есть колонка с чекбоксами
                conf.columns.unshift({
                    data: null,
                    title: [
                        '<re-check',
                            'data="all"',
                            '@check="setChecked"',
                            '@uncheck="setUnchecked"',
                            '>',
                        '</re-check>',
                    ].join(' '),
                    className: 'ta-c',
                    sortable: false,
                    render: function (data, type, row, meta) {
                        return [
                            '<re-check',
                                'data='+meta.row,
                                '@check="setChecked"',
                                '@uncheck="setUnchecked"',
                                '>',
                            '</re-check>',
                        ].join(' ');
                    },
                });

                /**
                 * После рендера строки с вью-компонентом
                 * нужно создать на ней вью-инстанс (onDraw)
                 *
                 */
                _.extend(vm.config, {
                    rowCallback: function(row) {
                        vm.onDraw(row);
                    },
                    headerCallback: function(row) {
                        vm.onDraw(row);
                    },

                    //
                    // // могуть быть проблемы при "дефер рендер"
                    //
                    // drawCallback: function() {
                    //     console.log('drawCallback');
                    //     vm.onDraw(this[0]);
                    // },

                    //
                    // // могут быть проблемы с $nextTick
                    //
                    // createdRow: function(row) {
                    //     console.log('createdRow');
                    //     // vm.onDraw(row)
                    // },
                });
            }


            if (conf.actions && conf.actions.length) {
                // добавляю колонку с действиями
                var toRender = [
                    '<div class="btn-group btn-group-sm">',
                ];

                _.each(conf.actions, function(action, i) {
                    toRender.push([
                        '<div ',
                            'class="btn btn-default"',
                            'data-actionidx="'+i+'"',
                            '>',
                            (action.title || 'noname'),
                        '</div>'
                    ].join(''));
                });

                toRender.push('</div>');

                conf.columns.push({
                    title: 'Actions',
                    data: null,
                    class: 'buttonsColumn ta-c',
                    sortable: false,
                    render: function() {
                        return toRender.join('');
                    },
                });
            }

            vm.DT = $(dt).DataTable(conf);
             $('.dataTables_scrollBody').mCustomScrollbar({axis: "x"});
            // Получаю данные из строки по клику, эмичу событие наверх
            vm.DT.on( 'click', 'tr>td.clicable', function() {
                var rowInfo = vm.DT.row(this).data();
                vm.$emit('onrowclick', rowInfo);
            });
        }
    },
}));
