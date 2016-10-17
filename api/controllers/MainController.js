module.exports = {
    // Главная
    index: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'Main',
            pageTitle: 'Main'
        }));
    },

    // получить тендерный заем
    loan: function(req, res) {
        return res.render('Personal', _.extend({}, toView, {
            title: 'Получить тендерный заем',
            pageTitle: 'Получить тендерный заем',
            bc: [
                {name: 'Главная', href: '/'},
                {name: 'Личный кабинет', href: '/personal'},
            ],
            vue: '/Vues/personal.js'
        }));
    },



    deposites: function(req, res) {
        return res.render('Finances', _.extend({}, toView, {
            title: 'Разместить финансы',
            pageTitle: 'Разместить финансы',
             bc: [
                {name: 'Главная', href: '/'},
                {name: 'Разместить финансы', href: '/personal'},
            ],
            vue: '/Vues/finances.js'
        }));
    },
    services: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'Финансовые сервисы',
            pageTitle: 'Финансовые сервисы',
            html: 'Финансовые сервисы',
        }));
    },
    partners: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'Партнеры',
            pageTitle: 'Партнеры',
            html: 'Партнеры',
        }));
    },
    about: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'О компании',
            pageTitle: 'О компании',
            html: 'О компании',
        }));
    },


};
