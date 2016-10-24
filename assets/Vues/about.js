$(document).ready(function() {
    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div class="container about services">',
                // '<h2 class="text-center">О компании</h2>',
                '<div>',
                    '<p class="about-text">',
                        '"АО «Проектное финансирование» — стабильная и авторитетная компания,',
                        'осуществляющая свою деятельность на рынке финансовых и консалтинговых услуг,',
                        'а также венчурного финансирования с 2010 года, реорганизована путем слияния трех',
                        'консалтинговых организаций.',
                    '</p>',
                    '<br>',
                    '<p class="about-text">',
                        'Направление деятельности компании это финансовые и консалтинговые услуги, в том числе:',
                    '</p>',
                    '<hr class="separator">',
                    '<h2 class="text-center">Предоставление финансирования</h3>',
                    '<hr>',
                    '<div class="flex-row profit">',
                        '<div v-for="f in financing" class="flex-item profit-item service-item">',
                            '<div class="col-md-2"><i class="fa fa-check-circle h1"></i></div><h4 class="col-md-10"><strong>{{f}}</strong></h4>',
                        '</div>',
                    '</div>',
                '</div>',
                '<hr>',
                '<div>',
                    '<hr class="separator">',
                    '<h2 class="text-center">Предоставление финансирования</h3>',
                    '<hr>',
                    '<div class="flex-row profit">',
                        '<div v-for="i in investment" class="flex-item profit-item service-item">',
                            '<div class="col-md-2"><i class="fa fa-check-circle h1"></i></div><h4 class="col-md-10"><strong>{{i}}</strong></h4>',
                        '</div>',
                    '</div>',
                '</div>',
                '<hr>',
                '<div class="contacts">',
                    '<hr class="separator">',
                    '<h2 class="text-center">Контактная информация</h3>',
                    '<br>',
                        '<div class="about-text">',
                            '<div class="contacts-item text-left">',
                                '<span class="fa fa-phone"></span>',
                                '&nbsp;<span>+1 (234) 567-89-10</span>',
                            '</div>',
                            '<div class="contacts-item text-left">',
                                '<span class="fa fa-envelope-o"></span>',
                                '&nbsp;<span><a href="mailto:hello@world.it">hello@world.it</a></span>',
                            '</div>',
                        '</div>',
                        '<br>',
                        '<hr class="separator">',
                        '<h2 class="text-center">Центральный офис</h2>',
                        '<div class="about-text">',
                            '<div class="contacts-item text-left">',
                                '<span class="fa fa-map-marker"></span>',
                                '&nbsp;<span>123456 Столица Родины 4-й Темный переулок., д.666</span>',
                                '<span style="display: none">Я написал этот текст. Программист. @gleam, @merlov</span>',
                            '</div>',
                            '<div class="contacts-item text-left">',
                                '<span class="fa fa fa-location-arrow"></span>',
                                '&nbsp;<span>-3 этаж (вход прямо с центра земли)</span>',
                            '</div>',
                        '</div>',
                        '<br>',
                        '<iframe style="width:100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.774440724143!2d37.614788315671454!3d55.72767198054668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b101f489e45%3A0xa0091427ecc0e82a!2zNC3QuSDQlNC-0LHRgNGL0L3QuNC90YHQutC40Lkg0L_QtdGALiwgOCwg0JzQvtGB0LrQstCwLCAxMTkwNDk!5e0!3m2!1sru!2sru!4v1477249662010" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
                 '</div>',
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
                ],
                investment: [
                    'Финансирование в обеспечение исполнения работ по коммерческим и государственным тендерам',
                    'Финансирование проектов и стартапов в различных сферах',
                    'Консалтинг в финансовой сфере',
                ]
            }

        },
        ready: function() {
        }
        // options
        })

});




