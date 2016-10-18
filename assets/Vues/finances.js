$(document).ready(function() {
    window.vm = new Vue({
        el: '#finances',
        template: [
            '<div class="my-tabs-box">',
                '<tabs :class="my-tabs">',
                    '<tab :header="tabHeaders[0]">',
                        '<h3>Запросы на инвестирование</h3><br/>',
                        '<div class="form-group clearfix form-horizontal">',
                            '<re-table v-bind:rows="investmentrows" v-bind:config="investmentconfig"></re-table>',
                            '<div class="form-group clearfix">',
                                '<label class="col-md-2 control-label">Предложить свой займ</label>',
                                '<div class="col-md-1">',
                                    '<div class="input-group">',
                                        '<input placeholder="%" type="number" min="0" class="form-control"/>',
                                    '</div>',
                                '</div>',
                                '<div class="col-md-2">',
                                    '<button class="btn btn-primary">Инвестировать</button>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[1]">',
                        '<h3>Выданные кредиты/займы</h3><br/>',
                        '<div class="form-group clearfix">',
                            '<re-table v-bind:rows="investmentrows" v-bind:config="investmentconfig"></re-table>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[2]">',
                        '<h3>Способы инвестирования</h3><br/>',
                        '<div class="panel panel-default">',
                            '<div class="panel-body">',
                                '<div class="form-group clearfix">',
                                    '<div class="radio">',
                                        '<label>',
                                            '<input type="radio" name="modeInvestment"/>Инвестировать с банковской карты',
                                        '</label>',
                                    '</div>',
                                    '<div class="radio">',
                                        '<label>',
                                            '<input type="radio" name="modeInvestment"/>Инвестировать с расчетного счета',
                                        '</label>',
                                    '</div>',
                                '</div>',
                                '<h4 class="col-md-offset-2">Реквизиты</h4>',
                                '<div class="form-group clearfix form-horizontal">',
                                    '<label class="col-md-2 control-label">Предложить свой займ</label>',
                                    '<div class="col-md-7">',
                                        '<div class="input-group">',
                                            '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                            '<input type="text" class="form-control"/>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="form-group clearfix form-horizontal">',
                                    '<label class="col-md-2 control-label">Наименование банка</label>',
                                    '<div class="col-md-7">',
                                        '<div class="input-group">',
                                            '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                            '<input type="text" class="form-control"/>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="form-group clearfix form-horizontal">',
                                    '<label class="col-md-2 control-label">кс</label>',
                                    '<div class="col-md-7">',
                                        '<div class="input-group">',
                                            '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                            '<input type="text" class="form-control"/>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="form-group clearfix form-horizontal">',
                                    '<label class="col-md-2 control-label">БИК</label>',
                                    '<div class="col-md-7">',
                                        '<div class="input-group">',
                                            '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                            '<input type="text" class="form-control"/>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="col-md-2 col-md-offset-2">',
                                    '<button class="btn btn-primary">Сохранить</button>',
                                '</div>',
                            '</div>',
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
                    '<i class="fa fa-envelope">&nbsp;</i><span>Запросы на инвестирование</span>',
                    '<i class="fa fa-files-o">&nbsp;</i><span>Выданные кредиты/займы</span>',
                    '<i class="fa fa-commenting-o">&nbsp;</i><span>Способы инвестирования</span>',
                ],
                drawTable:false,
                investmentrows: [
                    {
                        id : 89898943434,
                        creationDate: new Date(),
                        client: 'ОАО Банк',
                        endDate: new Date(),
                        eis: 3453485345000045+'<br>Сбербанк',
                        sum: 234567,
                        tender: 10,
                        period: 0,
                        percent: 0,
                        financeStatus: 'Черновик',
                    },
                    {
                        id : 89898943434,
                        creationDate: new Date(),
                        client: 'ОАО Банк',
                        endDate: new Date(),
                        eis: 3453485345000045+'<br>Сбербанк',
                        sum: 234567,
                        tender: 10,
                        period: 0,
                        percent: 10,
                        financeStatus: 'Черновик',
                    },
                ],
                investmentconfig: {
                    columns: [
                        {
                            title: '№',
                            data: 'id',
                        },
                        {

                            title: 'Дата создания',
                            data: 'creationDate',
                            render: function(value) {
                                return moment(value).format('MM.DD.YYYY, HH:mm:ss');
                            },
                        },
                        {
                            title: 'Клиент',
                            data: 'client',
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
                            title: 'Период',
                            data: 'period', 
                        },
                        {
                            title: 'Процент за займ',
                            data: 'percent', 
                        },  
                        {
                            title: 'Фин. статус',
                            data: 'financeStatus',
                        },   
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
