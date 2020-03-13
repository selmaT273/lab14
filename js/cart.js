/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
var tableRows = document.querySelectorAll('#cart tbody tr');

for(var i = 0; i < tableRows.length; i++){
    if(tableRows[i]){
        tableRows[i].remove(); 
    }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
var cartTable = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for(var i = 0; i < cart.items.length; i++){
      var eachCartItem = document.createElement('tr');
      cartTable.appendChild(eachCartItem);
      var deleteItem = document.createElement('td');
      var deleteButton = document.createElement('a');
      deleteButton.setAttribute('href', '');
      deleteButton.textContent = 'X';
      deleteButton.id = i;
      deleteButton.addEventListener('click', removeItemFromCart);
    //   deleteItem.innerHTML = '<a href="">X</a>'
      deleteItem.appendChild(deleteButton);
      eachCartItem.appendChild(deleteItem);
      var eachProductName = document.createElement('td');
      eachProductName.textContent = cart.items[i].product;
      eachCartItem.appendChild(eachProductName);
      var eachProductQuantity = document.createElement('td');
      eachProductQuantity.textContent = cart.items[i].quantity;
      eachCartItem.appendChild(eachProductQuantity);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
    event.preventDefault();
    cart.removeItem(event.target.id);
    console.log(event);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();