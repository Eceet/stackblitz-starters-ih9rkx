document.addEventListener('DOMContentLoaded', () => {
  // Shopping Cart functionality
  let cart = [];

  // Add event listeners to product buttons
  document.querySelectorAll('.product-item button').forEach(button => {
      button.addEventListener('click', () => {
          const product = button.parentElement;
          const productName = product.querySelector('p').textContent;
          cart.push(productName);
          alert('Item added to the cart');
      });
  });

  // Check if the view cart button exists before adding the event listener
  const viewCartButton = document.querySelector('.view-cart');
  if (viewCartButton) {
      viewCartButton.addEventListener('click', () => {
          const cartModal = document.getElementById('cart-modal');
          if (cartModal) {
              const cartItemsDiv = cartModal.querySelector('.cart-items');
              cartItemsDiv.innerHTML = '';
              cart.forEach(item => {
                  const itemDiv = document.createElement('div');
                  itemDiv.textContent = item;
                  cartItemsDiv.appendChild(itemDiv);
              });
              // Make the modal visible and add the 'active' class
              cartModal.style.display = 'block';
              cartModal.classList.add('active');
          }
      });
  }

  // Clear cart functionality
  const clearCartButton = document.querySelector('.clear-cart');
  if (clearCartButton) {
      clearCartButton.addEventListener('click', () => {
          if (cart.length > 0) {
              alert('Cart cleared');
              cart = [];
              const cartItemsDiv = document.querySelector('.cart-items');
              if (cartItemsDiv) {
                  cartItemsDiv.innerHTML = '';
              }
          } else {
              alert('No items to clear');
          }
      });
  }

  // Process order functionality
  const processOrderButton = document.querySelector('.process-order');
  if (processOrderButton) {
      processOrderButton.addEventListener('click', () => {
          if (cart.length > 0) {
              alert('Thank you for your order');
              cart = [];
              const cartItemsDiv = document.querySelector('.cart-items');
              if (cartItemsDiv) {
                  cartItemsDiv.innerHTML = '';
              }
              const cartModal = document.getElementById('cart-modal');
              if (cartModal) {
                  cartModal.style.display = 'none';
                  cartModal.classList.remove('active');
              }
          } else {
              alert('Cart is empty');
          }
      });
  }

  // Close modal functionality
  const closeButton = document.querySelector('.modal .close');
  if (closeButton) {
      closeButton.addEventListener('click', () => {
          const cartModal = document.getElementById('cart-modal');
          if (cartModal) {
              cartModal.style.display = 'none';
              cartModal.classList.remove('active');
          }
      });
  }

  // Feedback form submission
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
      feedbackForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const nameInput = document.getElementById('name');
          const emailInput = document.getElementById('email');
          const messageInput = document.getElementById('message');

          // Check if any field is empty
          if (nameInput.value.trim() === '' ||
              emailInput.value.trim() === '' ||
              messageInput.value.trim() === '') {
              alert('Please fill in your name, email, and message.');
              return; // Stop further execution
          }

          const formData = new FormData(event.target);
          console.log('Feedback submitted:', Object.fromEntries(formData.entries()));
          alert('Thank you for your message Vutomi Mdumela');
          event.target.reset();
      });
  }

  // Subscription functionality
  const subscribeButton = document.querySelector('.subscribe-button');
  if (subscribeButton) {
      subscribeButton.addEventListener('click', () => {
          alert('Thank you for subscribing');
      });
  }

  // Store data in local storage as JSON 
  const userData = { 
      username: 'vutomi Mdumela', 
      email: 'mdumelavutomi@gmail.com', 
      message: 'Hello, I would like to join the gym.' 
  }; 

  localStorage.setItem('userData', JSON.stringify(userData)); 

  // Retrieve data from local storage and parse it back to an object 
  const storedUserData = JSON.parse(localStorage.getItem('userData')); 
  console.log('User Data from Local Storage:', storedUserData); 

  // Store data in session storage as JSON
  const sessionData = {
      sessionID: 'ABC123',
      groups: ['GroupYoga', 'GroupKickBoxing', 'GroupPilates']
  };

  sessionStorage.setItem('sessionData', JSON.stringify(sessionData));

  // Retrieve data from session storage and parse it back to an object
  const storedSessionData = JSON.parse(sessionStorage.getItem('sessionData'));
  console.log('Session Data from Session Storage:', storedSessionData);

  // Display local storage data on the webpage
  document.getElementById('localStorageData').textContent = JSON.stringify(storedUserData, null, 2);

  // Display session storage data on the webpage
  document.getElementById('sessionStorageData').textContent = JSON.stringify(storedSessionData, null, 2);
});
