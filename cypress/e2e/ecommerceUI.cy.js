/// <reference types="cypress" />

import SignUpPage from '../page-object/createAccountPage'
import SignInPage from '../page-object/SignInPage'
import ProductPage from '../page-object/productPage'
import ProductCategoryPage from '../page-object/categoryPage'
import ProductDetailPage from '../page-object/viewDetailsPage'
import AppCartPage from '../page-object/cartPage'
import CheckOutPage from '../page-object/checkOutPage'
import OrderPage from '../page-object/viewOrdersPage'
import ProducetManagementPage from '../page-object/productManagementPage'
import EditProduct from '../page-object/editProduct'


describe('User Authentication', () => {
  const signUpPage = new SignUpPage()
  const signInPage = new SignInPage()
  const productPage = new ProductPage()
  const pCP = new ProductCategoryPage()
  const pDP = new ProductDetailPage()
  const appCartPage = new AppCartPage()
  const checkOutPage = new CheckOutPage()
  const orderPage = new OrderPage()
  const productManagementPage = new ProducetManagementPage()
  const editProduct = new EditProduct


   // Store credentials at describe level
   // Credentials stored in testCredentials variable (persists across tests)
   let testCredentials

   // before() runs once and registers the account
   // Register ONCE before all tests
   before(() => {
       cy.visit('/')
       const uniqueEmail = `testuser_${Date.now()}@test.com`
       const password = 'Luvyadee@04'
       testCredentials = { email: uniqueEmail, password }

       // Register the user
       cy.contains('Sign In').click()
       cy.contains('have an').click()
       cy.get('#email').type(uniqueEmail)
       cy.get('#password').type(password)
       cy.contains('Sign Up').click()
       cy.get('button[title="Sign Out"]').should('be.visible')
       cy.get('button[title="Sign Out"]').click()
   })

   // Login before each test using cached session
   // cy.session() caches the login state so subsequent tests don't need to log in again
   beforeEach(() => {
       cy.session(testCredentials.email, () => {
           cy.visit('/')
           cy.contains('Sign In').click()
           cy.get('#email').type(testCredentials.email)
           cy.get('#password').type(testCredentials.password)
           cy.contains('Sign In').click()
           cy.get('button[title="Sign Out"]').should('be.visible')
       })
       cy.visit('/')
   })

   it('should increase the qty and add to cart', () => {
       productPage.addToCart()
   })

   it('should select product category', () => {
       pCP.selectCategory()
   })

   it('should view product details', () => {
       pDP.viewProduct()
   })

   it('should goto cart', () => {
       productPage.addToCart()
       appCartPage.viewCart()
   })

   it('should place order', () => {
       productPage.addToCart()
       appCartPage.viewCart()
       checkOutPage.placeOrder()
   })

   it('should view order details', () => {
       productPage.addToCart()
       appCartPage.viewCart()
       checkOutPage.placeOrder()
       orderPage.viewOrderDetails()
   }) 

   it.only('should create new product', () => {
        productManagementPage.admin()
        editProduct.updateProductDetail()

   })

})
