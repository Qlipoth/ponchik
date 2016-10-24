$(document).ready(function() {
    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div class="container services">',
                '<div>',
                    // '<h2 class="l-title">Финансовые сервисы</h2>',
                    // '<hr class="separator">',
                    '<h2 class="text-center">Предоставление финансирования:</h2>',
                    '<div class="flex-row profit">',
                        '<div v-for="f in financing" class="flex-item profit-item service-item">',
                            '<div class="col-md-2"><i class="fa fa-check-circle h1"></i></div><h4 class="col-md-10"><strong>{{f}}</strong></h4>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div>',
                    // '<h2 class="l-title">Краткосрочное и среднесрочное инвестирование</h2>',
                    // '<br>',
                    '<hr class="separator">',
                    '<h2 class="text-center">Краткосрочное и среднесрочное инвестирование</h2>',
                    '<div class="flex-row profit">',
                        '<div v-for="i in investment" class="flex-item profit-item service-item">',
                            '<div class="col-md-2"><i class="fa fa-check-circle h1"></i></div><h4 class="col-md-10"><strong>{{i}}</strong></h4>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div>',
                '</div>',
                    '<hr class="separator">',
                    '<h2 class="text-center">Консалтинг в финансовой сфере</h2>',
                    '<img class="img-responsive" style="margin: auto;" src="img/21.png"/>',
            '</div>',
        ].join(' '),

        data: function() {
            return {
                financing: [
                    'тендерные займы',
                    'тендерные кредиты',
                    'банковские гарантии',
                    'обеспечение исполнения контракта',
                    'обеспечение заявки для участия в конкурсе',
                    'вечурное финансирование',
                    'предпринимательские займы',
                    'займы под недвижимость',
                ],
                investment: [
                    'Финансирование в обеспечение исполнения работ по коммерческим и государственным тендерам',
                    'Финансирование проектов и стартапов в различных сферах',
                ]
            }

        },
        ready: function() {
        }
        // options
        })

});




