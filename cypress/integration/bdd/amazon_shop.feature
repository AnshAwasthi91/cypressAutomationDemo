Feature: This is amazon shop feature

    We are going to amazon.com and shop some products

    Scenario: As a user I am able to add products to shopping cart
     Given User is navigated to amazon website
     When User enter "iphone 14" in search box
     And User click on search icon
     Then User is able to see the desired search result
     When User click on the desired product
     Then User is able to see "Buy Now" and "Add to cart" buttons
     When user click on the Add to cart button
     Then product is added to the cart
     When User proceed to cart
     Then User navigated to Sign-in page
