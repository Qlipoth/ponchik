$(document).ready(function() {
    window.vm = new Vue({
        el: '#partners',
        template: [
            '<div class="col-md-12">',
                '<h2 class="text-center">Партнеры</h2>',
                '<div class="row" v-for = "p in partners">',
                    '<a href="{{p.href}}" class="partners-href clearfix">',
                        '<div class="col-md-2 partners-logo-box">',
                            '<img :src="p.img" class="img-responsive partners-logo">',
                        '</div>',
                        '<div class="col-md-10 partners-text-box">',
                            '<p>{{{p.info}}}</p>',
                            '<p><strong>{{{p.license}}}</strong></p>',
                        '</div>',
                    '</a>',
                '</div>',
            '</div>',
        ].join(' '),
       
        data: function() {
            return {
                partners: [ 
                    {   href: 'https://sovcombank.ru/',
                        img: 'img/partners/5.png',
                        info: 'Банк-партнер. Долгосрочный рейтинг Standard&amp;Poor`s по обязательствам B, краткосрочный рейтинг по обязательствам C. Рейтинг Fitch&amp;Ratings по национальной шкале А, по международной шкале В+.',
                        license: 'Генеральная лицензия на осуществление банковских операций № 963 от 05 декабря 2014 г.',
                    },
                    {   href: 'http://i-skib.ru',
                        img: 'img/partners/1.png',
                        info: 'Банк-партнер. ООО Банк &laquo;СКИБ&raquo; является дочерним банком ПАО &laquo;Совкомбанк&raquo; и специализируется на предоставлении финансовых услуг, направленных на поддержку субъектов малого и среднего предпринимательства, участвующих в закупках по 44-ФЗ и 223-ФЗ.',
                        license: 'Лицензия Банка России на осуществление банковских операций № 3329 от 05.04.2016',
                    },
                    {   href: 'http://troikabank.com',
                        img: 'img/partners/2.png',
                        info: 'Банк-партнер. Рейтинг кредитоспособности Национального Рейтингового Агентства на уровне &laquo;А-&raquo; по национальной шкале.',
                        license: 'Генеральная лицензия на осуществление банковских операций № 3431 от 22 декабря 2014 г.',
                    },
                    {   href: 'http://www.neal.ru/',
                        img: 'img/partners/3.png',
                        info: 'Банк-партнер.Рейтинг "ЭКСПЕРТ РА" - В++.',
                        license: 'Генеральная лицензия Банка России № 2859 от 17.02.2015 г.',
                    },
                    {   href: 'http://absolutbank.ru',
                        img: 'img/partners/4.png',
                        info: 'Банк-партнер. Долгосрочный рейтинг Moody&rsquo;s Investors Service по обязательствам &laquo;B1&raquo;, рейтинг финансовой устойчивости &laquo;E+&raquo;. Рейтинг Fitch&amp;Ratings по национальной шкале &laquo;А- (rus)&raquo;, индивидуальный рейтинг банка &laquo;B+&raquo;, долгосрочный РДЭ &laquo;B+&raquo;. Рейтинг RAEX кредитоспособности банка &laquo;А+&raquo;, прогноз по рейтингу &laquo;стабильный&raquo;.',
                        license: 'Генеральная лицензия на осуществления банковских операций № 2306 от 11.08.2015 г.',
                    },
                       
                ]
            }
                
        },
        ready: function() {
        }
        // options
        })

});

