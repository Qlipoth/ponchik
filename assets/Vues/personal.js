$(document).ready(function() {
    window.vm = new Vue({
        el: '#personalTabs',
        template: [
            '<div class="my-tabs-box">',
                '<tabs :class="my-tabs">',
                    '<tab :header="tabHeaders[0]">',
                        '<div class="panel panel-default">',
                            '<div class="panel-body form-horizontal">',
                                '<h3>Публикация заявки</h3><br/>',
                                '<div class="form-group col-md-6">',
                                    '<h4>Финансовая услуга</h4>',
                                    '<div class="radio">',
                                        '<label>',
                                            '<input type="radio" name="financeservice"/>Получить кредит/заем на обеспечение заявки',
                                        '</label>',
                                    '</div>',
                                    '<div class="radio">',
                                        '<label>',
                                            '<input type="radio" name="financeservice"/>Получить банковскую гаранию для обеспечения исполнения контракта',
                                        '</label>',
                                    '</div>',
                                    '<div class="radio">',
                                        '<label>',
                                            '<input type="radio" name="financeservice"/>Получить кредит/заем на исполнение контракта',
                                        '</label>',
                                    '</div>',
                                '</div>',
                                '<div class="col-md-6">',
                                    '<div class="form-group">',
                                        '<label class="col-md-3 control-label">Информация о тендере</label>',
                                        '<div class="col-md-9">',
                                            '<div class="input-group"><span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                            '<input id="notice" type="text" class="form-control"/>',
                                            '</div><span class="help-block">This is sample of text field</span>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="col-md-12">',
                                    '<button class="btn btn-primary">Получить</button>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[1]">',
                        '<re-table v-bind:rows="myrequestsrows" v-bind:config="myrequestsconfig"></re-table>',
                    '</tab>',
                    '<tab :header="tabHeaders[2]">',
                    '</tab>',
                    '<tab :header="tabHeaders[3]">',
                        '<re-table v-bind:rows="myrequestsrows" v-bind:config="myrequestsconfig"></re-table>',
                    '</tab>',
                    '<tab :header="tabHeaders[4]">',
                    '</tab>',
                    '<tab :header="tabHeaders[5]">',
                        '<re-table v-bind:rows="contractsrows" v-bind:config="contractsconfig"></re-table>',
                    '</tab>',
                '</tabs>',
            '</div>',
        ].join(' '),
        components: {
            tabs: VueStrap.tabset,
            tabGroup: VueStrap.tabGroup,
            tab: VueStrap.tab
        },
        data: function() {

            return {
                tabHeaders: [
                    '<i class="fa fa-file-text-o">&nbsp;<span>Создать заявку</span></i>',
                    '<i class="fa fa-envelope">&nbsp;<span>Мои заявки</span></i>',
                    '<i class="fa fa-commenting-o">&nbsp;<span>Запросы документов</span></i>',
                    '<i class="fa fa-folder">&nbsp;<span>Договоры</span></i>',
                    '<i class="fa fa-files-o">&nbsp;<span>Полученные кредиты/займы</span></i>',
                    '<i class="fa fa-list">&nbsp;<span>Счета компании</span></i>',
                ],
                drawTable:false,
                myrequestsrows: [
                {
                    id : 12345678,
                    docReqs : '0/12',
                    creationDate: new Date(),
                    financeStatus: 'Черновик',
                    agent: 'Нет',
                    client: 'ОАО Галеон',
                    sum: 123456,
                    tender: 0,
                    endDate: new Date(),
                    eis: 123123124355353535+'Сбербанк'
                },
                {
                    id : 89898943434,
                    docReqs : '0/6',
                    creationDate: new Date(),
                    financeStatus: 'Черновик',
                    agent: 'Нет',
                    client: 'ОАО Банк',
                    sum: 234567,
                    tender: 10,
                    endDate: new Date(),
                    eis: 3453485345000045+'Сбербанк'
                },

                ],
                myrequestsconfig: {
                    columns: [
                        {
                            title: '№',
                            data: 'id',
                                                },
                        {
                            title: 'Запросы на документы',
                            data: 'docReqs',
                        },
                        {

                            title: 'Дата создания',
                            data: 'creationDate',
                            render: function(value) {
                                return moment(value).format('MM.DD.YYYY, HH:mm:ss');
                            },
                        },
                        {

                            title: 'Фин. статус',
                            data: 'financeStatus',

                        },
                        {

                            title: 'Агент',
                            data:'agent'

                        },
                        {

                            title: 'Клиент',
                            data: 'client',

                        },
                        {

                            title: 'Сумма',
                            data: 'sum',
                            render: function(value) {
                                return value+' руб.';
                            },

                        },
                        {

                            title: 'Предложения',
                            data: 'tender',

                        },
                        {
                            title: 'крайний срок выдачи',
                            data: 'endDate',
                            render: function(value) {
                                return moment(value).format('MM.DD.YYYY, HH:mm:ss');
                            },
                        },
                        {
                            title: 'Номер с ЕИС площадка',
                            data: 'eis',
                        }
                    ],
                },
                contractsrows: [
                {
                    id : 12345678,
                    number : 89898989898,
                    title: 'Наименование1',
                    contractTarget: 'Предмет договора1',
                    customer: 'Нет',
                    contragent: 'Контрагент1',
                    contractStatus: 'Статус1',
                    side: 'Сторона1',
                },
                {
                    id : 22345678,
                    number : 56898989898,
                    title: 'Наименование2',
                    contractTarget: 'Предмет договора2',
                    customer: 'Нет',
                    contragent: 'Контрагент2',
                    contractStatus: 'Статус2',
                    side: 'Сторона2',
                },

                ],
                contractsconfig: {
                    columns: [
                        {
                            title: 'Системный номер',
                            data: 'id',
                        },
                        {
                            title: 'Номер',
                            data: 'number',
                        },
                        {

                            title: 'Наименование',
                            data: 'title',
                        },
                        {
                            title: 'Заказчик',
                            data: 'customer',
                        },
                        {
                            title: 'Контрагент',
                            data:'contragent'
                        },
                        {
                            title: 'Статус договора',
                            data: 'contractStatus',
                        },
                        {
                            title: 'Сторона согласования',
                            data: 'side',
                        }
                    ],
                },
            }
        },
        ready: function() {
        }
        // options
        })

});

