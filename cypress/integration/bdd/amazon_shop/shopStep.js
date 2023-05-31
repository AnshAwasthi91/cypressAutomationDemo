/// <reference types="Cypress" />
import {Given,When,And,Then} from 'cypress-cucumber-preprocessor/steps' 
import homePage from './homePage'
import productsPage from './productsPage'
import shopPage from './shopPage'
import signinPage from './signinPage'

Given(/^User is navigated to amazon website$/,()=>{
   homePage.launchApp()
})

When(/^User enter \"([^\"]*)\" in search box$/,function(product){
    homePage.enterProductInSearchTextBox(product)
})

And(/^User click on search icon$/,()=>{
    homePage.clickSearchIcon()
})

Then(/^User is able to see the desired search result$/,()=>{
    productsPage.validateSearchResults()
})

When(/^User click on the desired product$/,function(){
    productsPage.clickOnProduct()
})

Then(/^User is able to see \"([^\"]*)\" and \"([^\"]*)\" buttons$/,function(buyNow,addToCart){
    shopPage.validateAddToCartButton(addToCart)
    shopPage.vaidateBuyButton(buyNow)
})

When(/^user click on the Add to cart button$/,()=>{
    shopPage.addProductToCart()
})

Then(/^product is added to the cart$/,()=>{
    shopPage.validateProductAddedToCart()
})

When(/^User proceed to cart$/,()=>{
    shopPage.checkoutProduct()
})

Then(/^User navigated to Sign-in page$/,()=>{
    signinPage.validateSignInFormHeading()
})
