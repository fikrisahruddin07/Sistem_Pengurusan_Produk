describe('Sistem Pengurusan Produk', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Ujian Paparan', () => {
    cy.contains('Sistem Pengurusan Produk').should('exist');
    cy.get('table').should('exist');
  });

  it('Ujian Borang', () => {

    cy.get('#name').type('Laptop');
    cy.get('#category').type('Elektronik');
    cy.get('#price').type('3000');

    cy.get('form button').click();

    // CHECK DATA MASUK TABLE
    cy.contains('Laptop').should('exist');
    cy.contains('Elektronik').should('exist');
    cy.contains('3000').should('exist');
  });

 it('Ujian Hapus', () => {

  cy.get('#name').type('Phone');
  cy.get('#category').type('Gadget');
  cy.get('#price').type('2000');

  cy.get('form button').click();

  // DELETE ROW YANG BETUL
  cy.contains('Phone')
    .parent()
    .within(() => {
      cy.contains('Hapus').click();
    });

  // VERIFY HILANG
  cy.get('body').should('not.contain', 'Phone');
});

});