var mixin = {
    data: function() {
        return {
            financeconfig: {
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
            investmentrows: [
                {
                    id : 89898943434,
                    creationDate: new Date(),
                    client: 'ОАО Банк',
                    endDate: new Date(),
                    eis: {
                        number: 3453485345000045,
                        title: 'Сбербанк'   
                    },
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
                    eis: {
                        number: 3453485345000045,
                        title: 'Сбербанк'   
                    },
                    sum: 234567,
                    tender: 10,
                    period: 0,
                    percent: 10,
                    financeStatus: 'Черновик',
                },
            ],
        }
    },
}
