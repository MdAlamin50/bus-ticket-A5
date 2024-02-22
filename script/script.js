function handleButtonClicked(e) {
  const totalSeatElement = document.getElementById("totalSeat");
  const intTotalSeat = parseInt(totalSeatElement.innerText);
  const afterSubtractionSeat = intTotalSeat - 1;
  totalSeatElement.innerText = afterSubtractionSeat.toString();
  // Access the button element from the event
  const buttonElement = e.currentTarget;
  // Add a class to the button
  buttonElement.classList.add("bg-green-400");
  buttonElement.classList.add("pointer-events-none");
  const bookedSeat = 8 - afterSubtractionSeat;
  document.getElementById("bookedSeat").innerText = bookedSeat.toString();

  // Append in Sit list

  const detailsContainer = document.getElementById("bookedSitList");

  const newSitDetailsDiv = document.createElement("div");
  newSitDetailsDiv.classList.add("flex", "justify-evenly");

  // Create and append the paragraphs to the new div
  const paragraph1 = document.createElement("p");
  paragraph1.textContent = buttonElement.innerText;
  newSitDetailsDiv.appendChild(paragraph1);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = "Economoy";
  newSitDetailsDiv.appendChild(paragraph2);

  const paragraph3 = document.createElement("p");
  paragraph3.textContent = "550";
  newSitDetailsDiv.appendChild(paragraph3);

  // Append the new div to the container
  detailsContainer.appendChild(newSitDetailsDiv);

  // set Total About For Sit
  const totalAmountForSit = bookedSeat * 550;
  document.getElementById("totalAmountForSit").innerText =
    totalAmountForSit.toString();

  // Disable Button if 4 sit is selected
  if (bookedSeat >= 4) {
    document.getElementById("couponButton").removeAttribute("disabled");

    document
      .getElementById("sitContainer")
      .classList.add("pointer-events-none");
  }
}

function handleCoupon() {
  const inputtedCoupon = document.getElementById("couponInput").value;
  const couponCode = "NEW15";
  if (inputtedCoupon === couponCode) {
    const totalAmountStr =
      document.getElementById("totalAmountForSit").innerText;
    const totalAmountInt = parseInt(totalAmountStr);
    const grandTotal = totalAmountInt - totalAmountInt * 0.2;

    document.getElementById("grandTotal").innerText = grandTotal.toString();
    document.getElementById("modalButton").click();
  } else if (inputtedCoupon.length < 1) {
    alert("Please Input Coupon Code");
  } else if (inputtedCoupon !== couponCode) {
    alert("Coupon Code Doesn't match Please Enter Valid Coupon Code");
  } else {
    alert("Something Error Occurred");
  }
}
