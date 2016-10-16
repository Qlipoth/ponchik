module.exports = {
    index: function(req, res) {
        return res.render('Main', _.extend({}, toView, {
            title: 'Main',
            pageTitle: 'Main'
        }));
    },
    personal: function(req, res) {
        return res.render('Personal', _.extend({}, toView, {
            title: 'Personal',
            pageTitle: 'Personal',
            bc: [
                {name: 'Главная', href: '/'},
                {name: 'Личный кабинет', href: '/personal'},
            ],
            vue: '/Vues/personal.js'
        }));
    },


};
