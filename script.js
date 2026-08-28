const prices = {
  small: 20,
  medium: 30,
  large: 40
};

const quantities = {
  small: 0,
  medium: 0,
  large: 0
};


function changeQuantity(size, amount) {

  quantities[size] += amount;

  if (quantities[size] < 0) {
    quantities[size] = 0;
  }

  document.getElementById(
    size + "-quantity"
  ).textContent = quantities[size];

  calculateTotal();
}


function calculateTotal() {

  let total = 0;

  total += quantities.small * prices.small;
  total += quantities.medium * prices.medium;
  total += quantities.large * prices.large;


  const mixedColours =
    document.getElementById("mixed-colours");

  if (mixedColours && mixedColours.checked) {
    total += 10;
  }


  document.getElementById("total").textContent =
    "R" + total;


  const finalTotal =
    document.getElementById("final-total");

  if (finalTotal) {
    finalTotal.textContent =
      "R" + total;
  }


  return total;
}


function showCustomerForm() {

  const total = calculateTotal();


  if (total === 0) {

    alert(
      "Please choose at least one scrunchie first. ♡"
    );

    return;
  }


  const customerSection =
    document.getElementById("customer-details");


  customerSection.classList.remove("hidden");


  customerSection.scrollIntoView({
    behavior: "smooth"
  });
}


function placeOrder() {

  const name =
    document.getElementById("customer-name").value.trim();


  const whatsapp =
    document.getElementById("whatsapp-number").value.trim();


  const location =
    document.getElementById("delivery-location").value;


  if (!name) {

    alert(
      "Please enter your full name. ♡"
    );

    return;
  }


  if (!whatsapp) {

    alert(
      "Please enter your WhatsApp number. ♡"
    );

    return;
  }


  if (!location) {

    alert(
      "Please choose your delivery location. ♡"
    );

    return;
  }


  const total = calculateTotal();


  let orderMessage =
    "🌹 SELLOANE'S CROCHET — NEW ORDER\n\n";


  orderMessage +=
    "Customer: " + name + "\n";


  orderMessage +=
    "WhatsApp: " + whatsapp + "\n\n";


  if (quantities.small > 0) {

    orderMessage +=
      "🧶 Small × " +
      quantities.small +
      " — R" +
      quantities.small * prices.small +
      "\n";
  }


  if (quantities.medium > 0) {

    orderMessage +=
      "🧶 Medium × " +
      quantities.medium +
      " — R" +
      quantities.medium * prices.medium +
      "\n";
  }


  if (quantities.large > 0) {

    orderMessage +=
      "🧶 Large × " +
      quantities.large +
      " — R" +
      quantities.large * prices.large +
      "\n";
  }


  const mixedColours =
    document.getElementById("mixed-colours");


  if (mixedColours && mixedColours.checked) {

    orderMessage +=
      "🎨 Mixed colours: +R10\n";
  }


  orderMessage +=
    "\nTOTAL: R" +
    total +
    "\n\n";


  orderMessage +=
    "📍 Delivery: " +
    location +
    "\n";


  orderMessage +=
    "🚚 Local delivery only\n\n";


  orderMessage +=
    "Thank you for supporting Selloane's Crochet! ♡";


  /*
    Selloane's WhatsApp number.
    South African format without the leading 0.
  */

  const sellerNumber =
    "27660627555";


  const whatsappURL =
    "https://wa.me/" +
    sellerNumber +
    "?text=" +
    encodeURIComponent(orderMessage);


  window.open(
    whatsappURL,
    "_blank"
  );
}
