describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логинчик
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный парольчик
         cy.get('#loginButton').click(); // клик войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // элемент содержит текст, авторизация файн
         cy.get('#messageHeader').should('be.visible'); // текст виден юзеру
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть и виден юзеру
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // клик на кнопку
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели мыло
        cy.get('#restoreEmailButton').click(); // жмем на конпку
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // эдемент содержит текст, всё файн
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть и виден юзеру

    })

    it('НЕверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логинчик
        cy.get('#pass').type('iLoveqastudio1337'); // ввели НЕверный парольчик
        cy.get('#loginButton').click(); // клик войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // элемент содержит текст, авторизация НЕфайн
        cy.get('#messageHeader').should('be.visible'); // текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть и виден юзеру
    })

    it('Верный пароль и НЕверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikovich.ru'); // ввели НЕверный логинчик
        cy.get('#pass').type('iLoveqastudio1337'); // ввели верный парольчик
        cy.get('#loginButton').click(); // клик войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // элемент содержит текст, авторизация НЕфайн
        cy.get('#messageHeader').should('be.visible'); // текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть и виден юзеру

    })

    it('Верный пароль и логин без @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввели верный логинчик без @
        cy.get('#pass').type('iLoveqastudio1337'); // ввели верный парольчик
        cy.get('#loginButton').click(); // клик войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // элемент содержит текст, авторизация НЕфайн
        cy.get('#messageHeader').should('be.visible'); // текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть и виден юзеру
   })

   it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логинчик GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный парольчик
        cy.get('#loginButton').click(); // клик войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // элемент содержит текст, авторизация файн
        cy.get('#messageHeader').should('be.visible'); // текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть и виден юзеру
   })
})