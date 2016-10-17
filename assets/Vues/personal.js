$(document).ready(function() {
    window.vm = new Vue({
        el: '#personalTabs',
        template: [
            '<div class="my-tabs-box">',
                '<tabs :class="my-tabs">',
                    '<tab :header="tabHeaders[0]">',
                        '<h3>Публикация заявки</h3><br/>',
                        '<div class="panel panel-default">',
                            '<div class="panel-body form-horizontal">',
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
                                        '<label class="col-md-3 control-label tender-info">Информация о тендере</label>',
                                        '<div class="col-md-9">',
                                            '<div class="input-group">',
                                                '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                                '<input id="notice" type="text" class="form-control"/>',
                                            '</div>',
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
                        '<h3>Заявки на финансовые услуги тендеров</h3><br/>',
                        '<div class="form-group clearfix">',
                            '<p class="warn">Уважаемые пользователи, черновики заявок теперь можно искать и просматривать в форме "Мои заявки"</p><br/>',
                            '<h4>Фильтр</h4>',
                            '<re-table v-bind:rows="myrequestsrows" v-bind:config="myrequestsconfig"></re-table>',
                            '<div class="clearfix">',
                                '<button class="btn btn-primary">Получить</button>',
                            '</div>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[2]">',
                        '<h3>Заявки на финансовые услуги тендеров</h3><br/>',
                        '<div class="panel panel-default">',
                            '<div class="panel-body">',  
                                '<p>Контент</p>',
                            '</div>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[3]">',
                        '<h3>Договоры</h3>',
                        '<br/>',
                        '<div class="form-group clearfix">',
                            '<re-table v-bind:rows="contractsrows" v-bind:config="contractsconfig"></re-table>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[4]">',
                        '<h3>Полученные кредиты/займы</h3><br/>',
                        '<div class="form-group clearfix">',
                            '<p class="warn">Сумма найденных кредитов/займов: <strong>0,00 </strong>руб.</p><br/>',
                            '<re-table v-bind:rows="creditsrows" v-bind:config="creditsconfig"></re-table>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[5]">',
                        '<h3>Счета компании</h3><br/>',
                        '<div class="form-group clearfix">',
                            '<re-table v-bind:rows="creditaccountrows" v-bind:config="creditaccountconfig"></re-table>',
                        '</div>',
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
                    '<i class="fa fa-file-text-o">&nbsp;</i><span>Создать заявку</span>',
                    '<i class="fa fa-envelope">&nbsp;</i><span>Мои заявки</span>',
                    '<i class="fa fa-commenting-o">&nbsp;</i><span>Запросы документов</span>',
                    '<i class="fa fa-folder">&nbsp;</i><span>Договоры</span>',
                    '<i class="fa fa-files-o">&nbsp;</i><span>Полученные кредиты/займы</span>',
                    '<i class="fa fa-list">&nbsp;</i><span>Счета компании</span>',
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
                creditsrows: [
                    {
                        id: 123123123,
                        info: 'Инфо1',
                        deliveryDate: new Date(),
                        returnDate: new Date(),
                        contractDate: new Date(),
                        sum: 2500,
                        status: 'Статус',
                        crediting: 'Сокредитование',
                        customer: 'Клиент1',
                        organiztion: 'Оргмназация1',

                    },
                    {
                        id: 24234234,
                        info: 'Инфо1',
                        deliveryDate: new Date(),
                        returnDate: new Date(),
                        contractDate: new Date(),
                        sum: 4500,
                        status: 'Статус2',
                        crediting: 'Сокредитование2',
                        customer: 'Клиент2',
                        organiztion: 'Оргмназация2',

                    },
                ],
                creditsconfig: {
                    columns: [
                        {
                            title: '№',
                            data: 'id',
                        },
                        {
                            title: 'Информация о заявке',
                            data: 'info',
                        },
                        {

                            title: 'Дата выдачи<br>Плановая/Фактическая',
                            data: 'deliveryDate',
                            render: function(value) {
                                return moment(value).format('MM.DD.YYYY, HH:mm:ss');
                            },
                        },
                        {

                            title: 'Дата возврата<br>Плановая/Фактическая',
                            data: 'returnDate',
                            render: function(value) {
                                return moment(value).format('MM.DD.YYYY, HH:mm:ss');
                            },
                        },
                        {
                            title: 'Дата подписания договора',
                            data: 'contractDate',
                            render: function(value) {
                                return moment(value).format('MM.DD.YYYY, HH:mm:ss');
                            },
                        },
                        {
                            title: 'Сумма',
                            data:'sum',
                            render: function(value) {
                                return value+' руб.';
                            },
                        },
                        {
                            title: 'Сокредитование',
                            data: 'crediting',
                        },
                        {
                            title: 'Получатель<br>кредита/займа',
                            data: 'customer',
                        },
                        {
                            title: 'Кредитная организация',
                            data: 'organiztion',
                        }
                    ],
                },
                creditaccountrows: [
                    {
                        area: 'OTC-argo',
                        number: '16.2977281042426-AGR',
                        freeSum: '0 00 руб.',
                        blockSum: '0 00 руб.',
                        availableSum: '0 00 руб.',
                        paymentSum: '0 00 руб.',
                        creditLimit: '0 00 руб.',
                    },
                    {
                        area: 'OTC-tender',
                        number: '17.2977281042426-AGR',
                        freeSum: '0 00 руб.',
                        blockSum: '0 00 руб.',
                        availableSum: '0 00 руб.',
                        paymentSum: '0 00 руб.',
                        creditLimit: '0 00 руб.',
                    },
                    {
                        area: 'Penenza',
                        number: '18.2977281042426-AGR',
                        freeSum: '0 00 руб.',
                        blockSum: '0 00 руб.',
                        availableSum: '0 00 руб.',
                        paymentSum: '0 00 руб.',
                        creditLimit: '0 00 руб.',
                    },
                ],
                creditaccountconfig: {
                    columns: [
                        {
                            title: 'Площадка',
                            data: 'area',
                        },
                        {
                            title: 'Номер счета',
                            data: 'number',
                        },
                        {
                            title: 'Свободная сумма',
                            data: 'freeSum',
                        },
                        {
                            title: 'Заблокированная сумма',
                            data: 'blockSum',
                        },
                        {
                            title: 'Доступная сумма',
                            data: 'availableSum',
                        },
                        {
                            title: 'Сумма на оплату',
                            data: 'paymentSum',
                        },
                        {
                            title: 'Кредитный лимит',
                            data: 'creditLimit',
                        },
                    ]
                    
                }
            }
        },
        ready: function() {
        }
        // options
        })

});

