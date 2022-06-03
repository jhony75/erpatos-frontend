describe('Navigation', () => {
  it('should navigate to the plans page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "plans" and click it
    cy.get('a[href*="plans"]').click();

    // The new url should include "/plans"
    cy.url().should('include', '/plans');

    // The new page should contain an h1 with "Plans"
    cy.get('h1').contains('Plans');
  });

  it('should navigate to the tools page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "tools" and click it
    cy.get('a[href*="tools"]').click();

    // The new url should include "/tools"
    cy.url().should('include', '/tools');

    // The new page should contain an h1 with "Tools"
    cy.get('h1').contains('Tools');
  });

  it('should navigate to the contact page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "contact" and click it
    cy.get('a[href*="contact"]').click();

    // The new url should include "/contact"
    cy.url().should('include', '/contact');

    // The new page should contain an h1 with "Contact"
    cy.get('h1').contains('Contact');
  });

  it('should navigate to the login page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "login" and click it
    cy.get('a[href*="login"]').click();

    // The new url should include "/plans"
    cy.url().should('include', '/login');

    // The new page should contain an h1 with "Login"
    cy.get('h1').contains('Login');
  });

  it('should navigate to the signup page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "signup" and click it
    cy.get('a[href*="signup"]').click();

    // The new url should include "/signup"
    cy.url().should('include', '/signup');

    // The new page should contain an h1 with "Sign up"
    cy.get('h1').contains('Sign up');
  });
});
