$(document).ready(function() {

    window.vm = new Vue({
        el: '#vue',
        template: [
            '<div class="swiper-container col-md-6">',
                '<div class="swiper-wrapper">',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="Nalog.ru"',
                            ':chartdata="data1"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ФЛ"',
                            ':chartdata="data2"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ИП"',
                            ':chartdata="data3"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ЮЛ"',
                            ':chartdata="data4"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                '</div>',
                '<div class="swiper-button-prev"></div>',
                '<div class="swiper-button-next"></div>',
            '</div>',
            '<div class="swiper-container1 col-md-2">',
                '<div class="swiper-wrapper">',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="Nalog.ru"',
                            ':chartdata="data1"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ФЛ"',
                            ':chartdata="data2"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ИП"',
                            ':chartdata="data3"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ЮЛ"',
                            ':chartdata="data4"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                '</div>',
                '<div class="swiper-button-prev"></div>',
                '<div class="swiper-button-next"></div>',
            '</div>',
            '<div class="swiper-container2 col-md-2">',
                '<div class="swiper-wrapper">',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="Nalog.ru"',
                            ':chartdata="data1"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ФЛ"',
                            ':chartdata="data2"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ИП"',
                            ':chartdata="data3"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ЮЛ"',
                            ':chartdata="data4"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                '</div>',
                '<div class="swiper-button-prev"></div>',
                '<div class="swiper-button-next"></div>',
            '</div>',
            '<div class="col-md-3"></div>',
            '<div class="swiper-container3 col-md-2">',
                '<div class="swiper-wrapper">',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="Nalog.ru"',
                            ':chartdata="data1"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ФЛ"',
                            ':chartdata="data2"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ИП"',
                            ':chartdata="data3"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ЮЛ"',
                            ':chartdata="data4"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                '</div>',
                '<div class="swiper-button-prev"></div>',
                '<div class="swiper-button-next"></div>',
            '</div>',
            '<div class="swiper-container4 col-md-6">',
                '<div class="swiper-wrapper">',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="Nalog.ru"',
                            ':chartdata="data1"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ФЛ"',
                            ':chartdata="data2"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ИП"',
                            ':chartdata="data3"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                    '<div class="swiper-slide">',
                        '<chart-tile',
                            'title="ЛК ЮЛ"',
                            ':chartdata="data4"',
                            '>',
                        '</chart-tile>',
                    '</div>',
                '</div>',
                '<div class="swiper-button-prev"></div>',
                '<div class="swiper-button-next"></div>',
            '</div>',
        ].join(' '),
        data: {
            data1: {
                 timeline: {
                    values: [
                            {
                                event: 'normal',
                                times: [
                                    {"starting_time": 1471294800000, "ending_time": 1473973200000},
                                ]
                            },
                            {
                                event: 'reject',
                                times: [
                                    {"starting_time": 1473973200000, "ending_time": 1476565200000}
                                    ]
                                },
                            {
                                event: 'degradation',
                                times: [
                                    {"starting_time": 1476565200000, "ending_time": 1479243600000}
                                ]
                            }
                        ]
                },
                labels: [
                    {
                        label: "Отказов",
                        value: 27
                    },
                    {
                        label: "В норме",
                        value: 30
                    },
                    {
                        label: "Остановка",
                        value: 20
                    },
                    {
                        label: "Деградация",
                        value: 10
                    }
                ],
                colors: ["#ff1c49", "#00e673", "#FEA223", "#ffdd00"],
            },
            data2: {
                 timeline: {
                    values: [
                            {
                                event: 'normal',
                                times: [
                                    {"starting_time": 1471294800000, "ending_time": 1473973200000},
                                ]
                            },
                            {
                                event: 'reject',
                                times: [
                                    {"starting_time": 1473973200000, "ending_time": 1476565200000}
                                    ]
                                },
                            {
                                event: 'degradation',
                                times: [
                                    {"starting_time": 1476565200000, "ending_time": 1479243600000}
                                ]
                            }
                        ]
                },
                labels: [
                    {
                        label: "Отказов",
                        value: 2
                    },
                    {
                        label: "В норме",
                        value: 2
                    },
                    {
                        label: "Остановка",
                        value: 5
                    },
                    {
                        label: "Нет данных",
                        value: 10
                    }
                ],
                colors: ["#ff1c49", "#00e673", "#FEA223", "#00d5ff"],
            },
             data3: {
                 timeline: {
                    values: [
                            {
                                event: 'normal',
                                times: [
                                    {"starting_time": 1471294800000, "ending_time": 1473973200000},
                                ]
                            },
                            {
                                event: 'reject',
                                times: [
                                    {"starting_time": 1473973200000, "ending_time": 1476565200000}
                                    ]
                                },
                            {
                                event: 'degradation',
                                times: [
                                    {"starting_time": 1476565200000, "ending_time": 1479243600000}
                                ]
                            }
                        ]
                },
                labels: [
                    {
                        label: "Отказов",
                        value: 7
                    },
                    {
                        label: "В норме",
                        value: 7
                    },
                    {
                        label: "Остановка",
                        value: 15
                    },
                    {
                        label: "Нет данных",
                        value: 8
                    }
                ],
                colors: ["#ff1c49", "#00e673", "#FEA223", "#00d5ff"],
            },
             data4: {
                 timeline: {
                    values: [
                            {
                                event: 'normal',
                                times: [
                                    {"starting_time": 1471294800000, "ending_time": 1473973200000},
                                ]
                            },
                            {
                                event: 'reject',
                                times: [
                                    {"starting_time": 1473973200000, "ending_time": 1476565200000}
                                    ]
                                },
                            {
                                event: 'degradation',
                                times: [
                                    {"starting_time": 1476565200000, "ending_time": 1479243600000}
                                ]
                            }
                        ]
                },
                labels: [
                    {
                        label: "Отказов",
                        value: 13
                    },
                    {
                        label: "В норме",
                        value: 20
                    },
                    {
                        label: "Остановка",
                        value: 4
                    },
                    {
                        label: "Нет данных",
                        value: 9
                    }
                ],
                colors: ["#ff1c49", "#00e673", "#FEA223", "#00d5ff"],
            },
        },
        computed: {
        },
        ready: function() {
            var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            spaceBetween: 100,
            speed: 600,
            // Navigation arrows
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
          });
        var mySwiper1 = new Swiper ('.swiper-container1', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                spaceBetween: 100,
                speed: 600,
                // Navigation arrows
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                effect: 'cube',
                grabCursor: true,
                cube: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }

              });
        var mySwiper2 = new Swiper('.swiper-container2', {
            loop: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            effect: 'fade'
        });
        var mySwiper3 = new Swiper('.swiper-container3', {
            loop: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
        });
        var mySwiper4 = new Swiper('.swiper-container4', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });
        },
        methods: {
        },
    });

});
