
// Add Buyer Email WIth Information
const detailSubmitBtn = document.getElementById('detail-submit-btn');
detailSubmitBtn.addEventListener('click', (e) => {
  const buyerDetailsInput = document.getElementById('buyer-details-input');
  const email = document.getElementById('email');
  const inputValue = buyerDetailsInput.value;
  const emailValue = email.value;
  if (inputValue === '' || emailValue === '') {
    alert('Both Field Must Required')
    return false;
  }
  else {
    invoiceElement(inputValue, showDate, emailValue)
    buyerDetailsInput.value = '';
    email.value = '';
  }
})

// Create Invoice Element

function invoiceElement(details, today, email) {
  const invoices = document.getElementById('invoices');
  const InvoiceDiv = document.createElement('div');
  InvoiceDiv.className = 'row row-cols-1 row-cols-md-3 g-4 my-1';
  InvoiceDiv.innerHTML = `<div class="col">
  <div class="color-4 p-3 h-100 rounded text-warning">date : <span id="show-date">${today()}</span></div>
</div>
<div class="col">
  <div class="color-4 p-3 h-100 rounded">
    <span class='text-warning'>
      ${details}
    </span> <br>
    <span id="buyer-info">
    </span>
    </pre>
  </div>
</div>
<div class="col">
  <div class="color-4 p-3 h-100 rounded">
    <span class='text-warning'>
      Seller Email: ${email}</span>
  </div>
</div>`;

  invoices.appendChild(InvoiceDiv);

}

// Add Item Details
const addDetailsBtn = document.getElementById('add-details-btn');
addDetailsBtn.addEventListener('click', (e) => {
  // Element Selection 
  const itemName = document.getElementById('item-name');
  const price = document.getElementById('item-price');
  const quantity = document.getElementById('item-quantity');
  const subTotal = document.getElementById('sub-total');
  const tax = document.getElementById('tax');
  const grandTotal = document.getElementById('grand-total');
  const totalAmount = document.getElementById('grand-total-2');

  // Element Vlaue
  const itemNameValue = itemName.value;
  const itemPriceValue = price.value;
  const itemQuantityValue = quantity.value;

  // Condition Checck
  if (itemNameValue === '' || itemPriceValue === '' || itemQuantityValue === '') {
    alert('All Field Must Required');
    return false;
  } else {
    newItem(itemNameValue, itemPriceValue, itemQuantityValue);
    subTotal.innerText = subTotalCalculation();
    tax.innerText = subTotalCalculation() / 20;
    grandTotal.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
    totalAmount.innerText = grandTotal.innerText;
    itemName.value = '';
    price.value = '';
    quantity.value = '';
  }
})



// Create New Item Element

function newItem(itemName, itemPrice, itemQuantity) {
  const itemParent = document.getElementById('info-table');
  const item = document.createElement('tr');
  item.innerHTML = `
    <th >${itemName}</th>
    <td>${itemPrice}</td>
    <td>${itemQuantity}</td>
    <td id='item-total-price'>${itemQuantity * itemPrice}</td>`;
  itemParent.appendChild(item);
}


// Calculate SubTotal 
function subTotalCalculation() {
  let subTotal = 0;
  const itemTotalPrice = document.querySelectorAll('#item-total-price');
  for (const itemPrice of itemTotalPrice) {
    subTotal += parseFloat(itemPrice.innerText);
  }
  return subTotal;
}












// Show Date 
function showDate() {
  const date = new Date()
  return date.toLocaleDateString()
}