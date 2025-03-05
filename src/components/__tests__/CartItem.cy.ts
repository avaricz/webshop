import CartItem from '@/components/CartItem.vue'

describe('CartItem Component', () => {
  const mockItem = {
    name: 'Test Product',
    picture: 'https://via.placeholder.com/100',
    count: 2,
    price: 150
  };

  it('renders correctly with props', () => {

    cy.mount(CartItem, { props: { item: mockItem } })

    cy.get('img').should('have.attr', 'src', mockItem.picture);
    cy.contains(mockItem.name).should('be.visible');
    cy.contains('quantity').should('be.visible');
    cy.contains(`${mockItem.count} x`).should('be.visible');
    cy.contains('price').should('be.visible');
    cy.contains(`${mockItem.price},-`).should('be.visible');
    cy.contains('Total price').should('be.visible');
    cy.contains(`${mockItem.price * mockItem.count},-`).should('be.visible');
  })

  it('emits "onRemove" when remove button is clicked', () => {

    const onRemoveSpy = cy.spy().as('onRemoveSpy');

    cy.mount(CartItem, { props: { item: mockItem } }).then(({ wrapper }) => {

      wrapper.vm.$emit = onRemoveSpy;

      cy.get('button').click();
      cy.get('@onRemoveSpy').should('have.been.calledOnce');
    });
  });

})
