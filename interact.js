
/* All Buttons */

document.getElementById("firstClass-increase-btn").addEventListener("click", function () {
    ticketBooking("firstClass", true, 150);

});
document.getElementById("firstClass-decrease-btn").addEventListener("click", function () {

    ticketBooking("firstClass", false, 150);
});
document.getElementById("econmy-increase-btn").addEventListener("click", function () {
    ticketBooking("economy", true, 100);
});
document.getElementById("economy-decrease-btn").addEventListener("click", function () {
    ticketBooking("economy", false, 100);

});

/* declaring ticketBooking function*/
function ticketBooking(ticketName, isIncrease, price) {
    var ticketInput = document.getElementById(ticketName + "-count");
    var ticketCount = parseInt(ticketInput.value);
    var newTicketCount = ticketCount;
    if (isIncrease == true) {
        var newTicketCount = ticketCount + 1;

    }
    else if (isIncrease == false && ticketCount > 0) {
        var newTicketCount = ticketCount - 1;
    }
    ticketInput.value = newTicketCount;


    var ticketCost = newTicketCount * price;
    document.getElementById(ticketName + "-cost").innerText = ticketCost;

    totalCost();
}

/* declaring totalCost function to calculate total cost,total vat,total grand amount */
function totalCost() {
    var firstClassCount = getSeatInput("firstClass");
    var economyCount = getSeatInput("economy");

    var totalCost = firstClassCount * 150 + economyCount * 100;
    document.getElementById("total-cost").innerText = "$" + totalCost;

    var totalVat = Math.round(totalCost * 10 / 100);
    document.getElementById("total-vat").innerText = "$" + totalVat;

    var grandTotalCost = totalCost + totalVat;
    document.getElementById("grand-total-cost").innerText = "$" + grandTotalCost;

    /* After confirming booking ticket below items will show in another popup window */
    var bookedFirstClassTicket = firstClassCount;
    document.getElementById("booked-firstClass-ticket").innerText = bookedFirstClassTicket;

    var bookedEconomyTicket = economyCount;
    document.getElementById("booked-economy-ticket").innerText = bookedEconomyTicket;

    var totalTickets = bookedFirstClassTicket + bookedEconomyTicket;
    document.getElementById("total-tickets").innerText = totalTickets;

    var totalPopuplCost = totalCost;
    document.getElementById("total-popup-amount").innerText = "$" + totalPopuplCost;

    var totalPopupVat = totalVat;
    document.getElementById("total-popup-vat").innerText = "$" + totalPopupVat;

    var grandTotalPopupCost = grandTotalCost;
    document.getElementById("grand-total-popup-amount").innerText = "$" + grandTotalPopupCost;
}

/* declaring getSeatInput function to calculate number of tickets */
function getSeatInput(ticketName) {
    var ticketInput = document.getElementById(ticketName + "-count");
    var ticketCount = parseInt(ticketInput.value);
    return ticketCount;

}

// Book Now Button
document.getElementById("book-now-btn").addEventListener("click", function () {
    var firstClassCount = getSeatInput("firstClass");
    var economyCount = getSeatInput("economy");
    if (firstClassCount > 0 || economyCount > 0) {
        document.getElementById("congress-window").setAttribute("style", "transform: scaleY(1)");
        document.getElementById("go-back-btn").setAttribute("style", "width: 94%;margin: 10% 0 0 3%; padding:10px 0");
    }
    else {
        alert("Sorry !! you didn't book any ticket");
    }

});

document.getElementById("go-back-btn").addEventListener("click", function () {
    document.getElementById("congress-window").setAttribute("style", "transform: scaleY(0)");

});

