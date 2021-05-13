function displayHelpPage(message, delay = 3000, delayPost = 1000) {
    cy.intercept('GET', '/k6info', {
            body: '<html><body><textarea cols="100">' + message + '</textarea></body></html>',
            statusCode: 200,
        }
    );
    cy.visit('/k6info');
    cy.wait(delay);
    cy.get('textarea').type('Time is up');
    cy.wait(delayPost);
}
describe('App Happy Path', () => {
    it('Happy path', () => {
        displayHelpPage('Start k6 recording now.');
        const USER_THINK_TIME=1000;
        cy.visit('/');
        cy.wait(USER_THINK_TIME);
        cy.get(':nth-child(1) > .mr-4').as('guide').click();
        cy.wait(5*USER_THINK_TIME);
        displayHelpPage('Stop k6 recording now.');
    });
})
