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

// Create Invoice 

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
      Seller.
    </span> <br>
    <span>${email}</span>
  </div>
</div>`;

  invoices.appendChild(InvoiceDiv);

}


// Show Date 
function showDate() {
  const date = new Date()
  return date.toLocaleDateString()
}