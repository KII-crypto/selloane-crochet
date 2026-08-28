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


// ===============================
// CHANGE QUANTITY
// ===============================

function changeQuantity(size, amount) {

  quantities[size] += amount;

  if (quantities[size] < 0) {
    quantities[size] = 0;
  }

  const quantityDisplay =
    document.getElementById(size + "-quantity");

  if (quantityDisplay) {
    quantityDisplay.textContent =
      quantities[size];
  }

  calculateTotal();
}


// ===============================
// CALCULATE TOTAL
// ===============================

function calculateTotal() {

  let total = 0;

  total += quantities.small * prices.small;
  total += quantities.medium * prices.medium;
  total += quantities.large * prices.large;


  const mixedColours =
    document.getElementById("mixed-colours");


  if (
    mixedColours &&
    mixedColours.checked
  ) {
    total += 10;
  }


  const totalDisplay =
    document.getElementById("total");


  if (totalDisplay) {
    totalDisplay.textContent =
      "R" + total;
  }


  const finalTotal =
    document.getElementById("final-total");


  if (finalTotal) {
    finalTotal.textContent =
      "R" + total;
  }


  return total;
}


// ===============================
// SHOW CUSTOMER DETAILS
// ===============================

function showCustomerForm() {

  const total =
    calculateTotal();


  if (total === 0) {

    alert(
      "Please choose at least one scrunchie first. ♡"
    );

    return;
  }


  const customerSection =
    document.getElementById(
      "customer-details"
    );


  if (customerSection) {

    customerSection.classList.remove(
      "hidden"
    );


    customerSection.scrollIntoView({
      behavior: "smooth"
    });

  }

}


// ===============================
// CREATE WHATSAPP ORDER
// ===============================

function placeOrder() {

  const nameElement =
    document.getElementById(
      "customer-name"
    );


  const whatsappElement =
    document.getElementById(
      "whatsapp-number"
    );


  const locationElement =
    document.getElementById(
      "delivery-location"
    );


  const name =
    nameElement
      ? nameElement.value.trim()
      : "";


  const customerWhatsapp =
    whatsappElement
      ? whatsappElement.value.trim()
      : "";


  const location =
    locationElement
      ? locationElement.value
      : "";


  // Check name

  if (!name) {

    alert(
      "Please enter your full name. ♡"
    );

    if (nameElement) {
      nameElement.focus();
    }

    return;
  }


  // Check WhatsApp number

  if (!customerWhatsapp) {

    alert(
      "Please enter your WhatsApp number. ♡"
    );

    if (whatsappElement) {
      whatsappElement.focus();
    }

    return;
  }


  // Check school/location

  if (!location) {

    alert(
      "Please choose your delivery location. ♡"
    );

    if (locationElement) {
      locationElement.focus();
    }

    return;
  }


  const total =
    calculateTotal();


  // ===============================
  // BUILD ORDER MESSAGE
  // ===============================

  let orderMessage =
    "🌹 SELLOANE'S CROCHET — NEW ORDER\n\n";


  orderMessage +=
    "Customer: " +
    name +
    "\n";


  orderMessage +=
    "WhatsApp: " +
    customerWhatsapp +
    "\n\n";


  // Small

  if (quantities.small > 0) {

    orderMessage +=
      "🧶 Small × " +
      quantities.small +
      " — R" +
      (
        quantities.small *
        prices.small
      ) +
      "\n";
  }


  // Medium

  if (quantities.medium > 0) {

    orderMessage +=
      "🧶 Medium × " +
      quantities.medium +
      " — R" +
      (
        quantities.medium *
        prices.medium
      ) +
      "\n";
  }


  // Large

  if (quantities.large > 0) {

    orderMessage +=
      "🧶 Large × " +
      quantities.large +
      " — R" +
      (
        quantities.large *
        prices.large
      ) +
      "\n";
  }


  // Mixed colours

  const mixedColours =
    document.getElementById(
      "mixed-colours"
    );


  if (
    mixedColours &&
    mixedColours.checked
  ) {

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
    "Thank you for supporting " +
    "Selloane's Crochet! ♡";


  // ===============================
  // SELLOANE'S WHATSAPP
  // ===============================

  const sellerNumber =
    "27660627555";


  const whatsappURL =
    "https://wa.me/" +
    sellerNumber +
    "?text=" +
    encodeURIComponent(
      orderMessage
    );


  // Open WhatsApp

  window.open(
    whatsappURL,
    "_blank"
  );

}


// ===============================
// INITIAL TOTAL
// ===============================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    calculateTotal();

  }
);
