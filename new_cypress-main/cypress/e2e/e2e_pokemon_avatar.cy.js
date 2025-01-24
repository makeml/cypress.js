describe('e2e покупка аватара', function () {

    it('e2e', function () {
         cy.visit('https://pokemonbattle.ru/'); // зашли на покемонов
         cy.get(':nth-child(1) > .auth__input').type('USER LOGIN'); // ввели верный логин
         cy.get('#password').type('USER PASS'); // ввели верный пароль
         cy.get('.auth__button').click(); // клик войти
         cy.wait(2000); // ждем 2 секунды, чтоб бэк понял что вообще творится
         cy.get('.pokemon__title').contains('Покемоны'); // видим текст, авторизация файн
         cy.get('.pokemon__title').should('be.visible'); // текст видим для юзеров
         cy.get('.header__container > .header__id').click(); // клик по аве тренера в углу
         cy.get('.title-single__title').contains('makeml'); // видим ник тренера, мы на странице тренера
         cy.get('.title-single__title').should('be.visible'); // ник виден юзеру
         cy.get('[href="/shop"]').click(); // жмем "сменить аватар"
         cy.get('.pokemon__title').contains('Магазин'); // видим текст "магазин", мы в магазине
         cy.get('.pokemon__title').should('be.visible'); // "магазин" виден юзерам
         cy.wait(2000); // ждем 2 секунды, чтоб бэк понял что вообще творится
         cy.get(':nth-child(1) > .shop__button').click(); // жмем кнопку "купить" на аватаре
         cy.get('.pay__main-header').contains('Пикачунькофф'); // видим "Пикачунькофф", мы на экране оплаты
         cy.get('.pay__main-header').should('be.visible'); // "Пикачунькофф" виден юзерам
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // вводим срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим CVV карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Anna Gerkina'); // вводим владельца карты
         cy.get('.pay-btn').click(); // жмем кнопку "оплатить"
         cy.get('#cardnumber').type('56456'); // вводим код из СМС
         cy.get('.payment__submit-button').click(); // жмем кнопку "оплатить"
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // видим текс, покупка файн
         cy.get('.payment__font-for-success').should('be.visible'); // текст виден юзерам, ФСЁ!

    })
})