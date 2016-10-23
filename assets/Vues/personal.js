$(document).ready(function() {
    window.vm = new Vue({
        el: '#personalTabs',
        template: [
            '<div class="my-tabs-box">',
                '<tabs :class="my-tabs" :active="1">',
                    '<tab header="Получение" disabled></tab>',       
                    '<tab :header="tabHeaders[0]">',
                        '<h3>Публикация заявки</h3><br/>',
                        '<div class="panel panel-default">',
                            '<div class="panel-body form-horizontal">',
                                '<div class="form-group col-md-6">',
                                    '<h4>Финансовая услуга</h4>',
                                    '<div class="radio">',
                                        '<label>',
                                            '<input type="radio" checked name="financeservice"/>Получить кредит/заем на обеспечение заявки',
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
                                            '<strong class="help-block">Искать на &nbsp;<a href="http://zakupki.gov.ru">zakupki.gov.ru</a></strong>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="col-md-12">',
                                    '<button @click="showAcception = true" class="btn btn-primary">Получить</button>',
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
                        '<documents></documents>',
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
                    '<tab header="Размещение" disabled></tab>', 
                    '<tab :header="tabHeaders[6]">',
                        '<h3>Запросы на инвестирование</h3><br/>',
                        '<div class="form-group clearfix form-horizontal table-with-radio">',
                            '<re-table @onrowclick="getRowData" v-bind:rows="investmentrows" v-bind:config="investmentconfig"></re-table>',
                            '<div role="form" id="reqi" class="form-group clearfix">',
                                '<label class="control-label reqi-control">Сумма</label>',
                                '<input type="number" min="0" class="form-control reqi-control"/>',
                                '<label class="control-label reqi-control">Процент</label>',
                                '<input id="invper"  type="number" class="form-control reqi-control" value=""/>',
                                '<button @click="showAcception = true" class="btn btn-primary reqi-control">Предложить</button>',
                            '</div>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[7]">',
                        '<h3>Выданные кредиты/займы</h3><br/>',
                        '<div class="form-group clearfix">',
                            '<re-table v-bind:rows="investmentrows" v-bind:config="financeconfig"></re-table>',
                        '</div>',
                    '</tab>',
                    '<tab :header="tabHeaders[8]">',
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
                                    '<div class="form-group clearfix form-horizontal">',
                                        '<label class="col-md-2 control-label">Наименование банка</label>',
                                        '<div class="col-md-7">',
                                            '<div class="input-group">',
                                                '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                                '<input type="text" class="form-control"/>',
                                            '</div>',
                                        '</div>',
                                    '</div>',
                                    '<label class="col-md-2 control-label">БИК</label>',
                                    '<div class="col-md-7">',
                                        '<div class="input-group">',
                                            '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                            '<input type="text" class="form-control"/>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                 '<div class="form-group clearfix form-horizontal">',
                                    '<label class="col-md-2 control-label">КС</label>',
                                    '<div class="col-md-7">',
                                        '<div class="input-group">',
                                            '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                            '<input type="text" class="form-control"/>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="form-group clearfix form-horizontal">',
                                    '<label class="col-md-2 control-label">Раcсчетный счет</label>',
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
                '<re-modal :showfooter="true" ',
                    ':item.sync="showAcception"', 
                    'title="Требуется подтверждение"', 
                    '@save="showInvestmentDialog"',
                    'ok-text="Ок"',
                    'cancel-text="Отмена">',
                        '<h3 class="text-center">Вы действительно хотите это сделать?</h3>',
                '</re-modal>',
                '<re-modal :showfooter="true" ',
                    ':item.sync="investmentDialog"', 
                    'title="Номер карты"', 
                    'ok-text="Ок"',
                    'cancel-text="Отмена">',
                         '<div class="form-group clearfix">',
                            '<label class="control-label">Введите номер карты</label>',
                            '<div>',
                                '<div class="input-group">',
                                    '<span class="input-group-addon"><span class="fa fa-pencil"></span></span>',
                                    '<input v-model="card" type="number" name="card"  class="form-control"/>',
                                '</div>',
                            '</div>',
                        '</div>',
                '</re-modal>',
            '</div>',
        ].join(' '),
        components: {
            tabs: VueStrap.tabset,
            tabGroup: VueStrap.tabGroup,
            tab: VueStrap.tab
        },
        mixins: [mixin],
        data: function() {

            return {
                card: null,
                showAcception: false,
                investmentDialog: false,
                tabHeaders: [
                    '<i class="fa fa-file-text-o">&nbsp;</i><span>Создать заявку</span>',
                    '<i class="fa fa-envelope">&nbsp;</i><span>Мои заявки</span>',
                    '<i class="fa fa-commenting-o">&nbsp;</i><span>Запросы документов</span>',
                    '<i class="fa fa-folder">&nbsp;</i><span>Договоры</span>',
                    '<i class="fa fa-files-o">&nbsp;</i><span>Полученные кредиты/займы</span>',
                    '<i class="fa fa-list">&nbsp;</i><span>Счета компании</span>',
                    '<i class="fa fa-envelope">&nbsp;</i><span>Запросы на инвестирование</span>',
                    '<i class="fa fa-files-o">&nbsp;</i><span>Выданные кредиты/займы</span>',
                    '<i class="fa fa-commenting-o">&nbsp;</i><span>Способы инвестирования</span>',
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
                        deliveryDate: {
                            plan: new Date(),
                            fact: moment().add(1, 'd'),
                        },
                        returnDate: {
                            plan: new Date(),
                            fact: moment().add(3, 'd'),
                        },
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
                         deliveryDate: {
                            plan: new Date(),
                            fact: moment().add(2, 'd'),
                        },
                        returnDate: {
                            plan: new Date(),
                            fact: moment().add(1, 'd'),
                        },
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
                                var planDate = moment(value.plan).format('MM.DD.YYYY H:mm');
                                var factDate = moment(value.fact).format('MM.DD.YYYY H:mm');
                                return '<span>'+planDate+'</span>'+'<br>'+'<span>'+factDate+'</span>';
                            },
                        },
                        {

                            title: 'Дата возврата<br>Плановая/Фактическая',
                            data: 'returnDate',
                            render: function(value) {
                                var planDate = moment(value.plan).format('MM.DD.YYYY H:mm');
                                var factDate = moment(value.fact).format('MM.DD.YYYY H:mm');
                                return '<span>'+planDate+'</span>'+'<br>'+'<span>'+factDate+'</span>';
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
                },
                selectedRow: null,
                investmentconfig: {
                    columns: [
                        {
                            render: function() {
                                return '<input type="radio" name="selectrow"/>';
                            }
                        },
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
                            render: function(value) {
                                return value.number+'<br>'+'<span>'+value.title+'</span>';
                            },
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
            }
        },
        ready: function() {
        },
        methods: {
            getRowData: function(row) {
                var vm = this;
                vm.selectedRow = row;
            },
            showInvestmentDialog: function() {
                var vm = this;
                vm.showAcception = false;
                vm.investmentDialog = true;
            }
        }
        // options
        })

});

