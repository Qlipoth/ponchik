$(document).ready(function() {

    window.vm = new Vue({
      el: '#personalTabs',
      data: function() {
        return {
            rows: [
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
            config: {
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
        }
      }
      // options
    })

});

