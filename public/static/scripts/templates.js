function generateHeader() {

    var headerTemplateSource = document.getElementById('header-container').innerHTML;
    var headerTemplate = Handlebars.compile(headerTemplateSource);
    var headerData = {
        logoLink: '../Pages/home.html',
        logoSrc: '../static/img/logo.png',
        menuItems: [
            { url: '../Pages/home.html', label: 'Главная' },
            { url: '../Pages/about.html', label: 'О нас' },
            { url: '../Pages/blog.html', label: 'Блог' },
            { url: '../Pages/ourdeals.html', label: 'Наши предложения' },
            { url: '../Pages/contactus.html', label: 'Связаться с нами' }
        ]
    };

    var headerHtml = headerTemplate(headerData);
    document.getElementById('header-container').innerHTML = headerHtml;
}