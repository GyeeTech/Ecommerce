/// <reference types="cypress" />

import SignUpPage from '../page-object/createAccountPage'
import SignInPage from '../page-object/SignInPage'
import ProductPage from '../page-object/productPage'
import ProductCategoryPage from '../page-object/categoryPage'
import ProductDetailPage from '../page-object/viewDetailsPage'
import AppCartPage from '../page-object/cartPage'
import CheckOutPage from '../page-object/checkOutPage'
import OrderPage from '../page-object/viewOrdersPage'


describe('User Authentication', () => {
  const signUpPage = new SignUpPage()
  const signInPage = new SignInPage()
  const productPage = new ProductPage()
  const pCP = new ProductCategoryPage()
  const pDP = new ProductDetailPage()
  const appCartPage = new AppCartPage()
  const checkOutPage = new CheckOutPage()
  const orderPage = new OrderPage()


  beforeEach(() => {
      cy.visit('/')  // Replace with your app URL
  })

  it('should register a new user', () => {
      signUpPage.RegistrationFormPage()
      
      // Add assertion to verify registration success
      //cy.url().should('include', '/dashboard')  // or whatever your success URL is
  })

  it('should login with registered credentials', () => {
      // First register to get credentials
      signUpPage.RegistrationFormPage()
      signUpPage.logout()
      // Then login with those credentials
      signInPage.login()
      
      // Add assertion to verify login success
      //cy.url().should('include', '/dashboard')
  })

  it('should increase the qty and add to cart', () => {
        signUpPage.RegistrationFormPage()
        signUpPage.logout()
        signInPage.login()
        productPage.addToCart()
  })

  it('should select product category', () => {
    signUpPage.RegistrationFormPage()
    signUpPage.logout()
    signInPage.login()
    pCP.selectCategory()
  })

  it('test should view product details', () => {
    signUpPage.RegistrationFormPage()
    signUpPage.logout()
    signInPage.login()
    pDP.viewProduct()
  })

  it('should goto cart', () => {
    signUpPage.RegistrationFormPage()
    signUpPage.logout()
    signInPage.login()
    productPage.addToCart()
    appCartPage.viewCart()
  })

  it('should place order', () => {
    signUpPage.RegistrationFormPage()
    signUpPage.logout()
    signInPage.login()
    productPage.addToCart()
    appCartPage.viewCart()
    checkOutPage.placeOrder()
  })

  it('should view order details', () => {
    signUpPage.RegistrationFormPage()
    signUpPage.logout()
    signInPage.login()
    productPage.addToCart()
    appCartPage.viewCart()
    checkOutPage.placeOrder()
    orderPage.viewOrderDetails()
  })

})
