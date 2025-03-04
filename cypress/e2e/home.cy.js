// cypress/e2e/home.cy.js
describe('Home Page', () => {
    beforeEach(() => {
      // Před každým testem navštiv homepage
      cy.visit('/')
    })
  
    it('loads successfully', () => {
      // Ověř, že stránka načte
      cy.get('h1').should('be.visible')
    })
  
    it('contains navigation', () => {
      // Ověř existenci navigace
      cy.get('nav').should('exist')
      cy.get('nav a').should('have.length.gt', 0)
    })
  })
  ```
  
//   5. Příkazy do package.json:
//   ```json
//   {
//     "scripts": {
//       "test:e2e": "cypress open",
//       "test:e2e:run": "cypress run"
//     }
//   }
//   ```
  
//   6. Pokročilejší testování Vue komponenty:
//   <antArtifact identifier="cypress-component-test" type="application/vnd.ant.code" language="javascript" title="Test Vue komponenty">
//   // cypress/component/Button.cy.js
//   import { mount } from 'cypress/vue'
//   import Button from '@/components/Button.vue'
  
//   describe('Button Component', () => {
//     it('renders correctly', () => {
//       mount(Button, {
//         props: {
//           label: 'Click me'
//         }
//       })
  
//       cy.get('button')
//         .should('be.visible')
//         .and('have.text', 'Click me')
//     })
  
//     it('emits click event', () => {
//       const onClickSpy = cy.spy().as('clickSpy')
      
//       mount(Button, {
//         props: {
//           label: 'Test Button',
//           onClick: onClickSpy
//         }
//       })
  
//       cy.get('button').click()
//       cy.get('@clickSpy').should('have.been.calledOnce')
//     })
//   })
//   ```
  
//   Tipy pro efektivní testování:
//   - Používejte data-testid atributy pro spolehlivější selektory
//   - Mockujte API volání pro stabilnější testy
//   - Testujte různé stavy komponent
//   - Ověřujte přístupnost (accessibility)
  
//   Doporučená rozšíření:
//   - `@cypress/vite-dev-server` pro lepší integraci s Vite
//   - `cypress-real-events` pro simulaci reálných uživatelských interakcí
  
//   Chcete, abych vám pomohl s nějakým konkrétním typem testování ve vašem Vue projektu?