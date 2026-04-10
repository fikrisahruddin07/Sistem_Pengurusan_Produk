describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    describe('Sistem Pengurusan Produk', () => {
    
      it('Ujian Paparan', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.contains('Sistem Pengurusan Produk');
      });
    
      it('Ujian Borang', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
    
        cy.get('#name').type('Laptop');
        cy.get('#category').type('Elektronik');
        cy.get('#price').type('3000');
        cy.get('button').click();
      });
    
      it('Ujian Hapus', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
    
        cy.contains('Hapus').click();
      });
    
    });
  })
})