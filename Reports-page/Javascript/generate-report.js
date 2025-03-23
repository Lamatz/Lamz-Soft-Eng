

// SEARCH FUNCTION
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const tableRows = document.querySelectorAll(".rounded-table tbody tr");

  function filterTable() {
    const searchValue = searchInput.value.toLowerCase();

    tableRows.forEach(row => {
      const customerName = row.querySelector(".name-Report").textContent.toLowerCase();

      if (customerName.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      filterTable();
    }
  });

  searchButton.addEventListener("click", function () {
    filterTable();
  });
});




// FILTER FUNCTION
document.addEventListener("DOMContentLoaded", function () {
  const filterDropdown = document.querySelector(".reports-filter");
  const tableBody = document.querySelector("tbody");

  filterDropdown.addEventListener("change", function () {
    let rows = Array.from(tableBody.querySelectorAll("tr"));
    let filterValue = this.value;

    rows.sort((a, b) => {
      let dateA = new Date(a.cells[2].textContent); // Date column
      let dateB = new Date(b.cells[2].textContent);
      let priceA = parseFloat(a.cells[6].textContent.replace("₱", "").replace(",", "")); // Total column
      let priceB = parseFloat(b.cells[6].textContent.replace("₱", "").replace(",", ""));

      if (filterValue === "newest") return dateB - dateA; // Newest
      if (filterValue === "oldest") return dateA - dateB; // Oldest
      if (filterValue === "price-low") return priceA - priceB; // Price: Low to High
      if (filterValue === "price-high") return priceB - priceA; // Price: High to Low

      return 0;
    });

    // Append sorted rows back to the table in new order
    rows.forEach(row => tableBody.appendChild(row));
  });
});



// RESPONSIVE Earnings (Monthly) Card
document.addEventListener("DOMContentLoaded", function () {
  function updateDailySales() {
    const tableBody = document.querySelector("tbody"); // Get table body
    const totalCells = tableBody.querySelectorAll("tr td:nth-child(7)"); // Get the "Total" column (7th column)
    const dailySalesElement = document.querySelector(".card-report .h5"); // Target the card text

    let totalSales = 0;

    // Loop through each "Total" column value and sum them up
    totalCells.forEach(cell => {
      let amount = parseFloat(cell.textContent.replace("₱", "").replace(",", ""));
      if (!isNaN(amount)) totalSales += amount;
    });

    // Format as currency and update the card
    dailySalesElement.textContent = "₱" + totalSales.toLocaleString();
  }

  updateDailySales(); // Run once on page load

  // Optional: Re-run if the table updates (e.g., if new data is added dynamically)
  const observer = new MutationObserver(updateDailySales);
  observer.observe(document.querySelector("tbody"), { childList: true, subtree: true });
});




document.addEventListener("DOMContentLoaded", function () {
  function updateTotalOrders() {
    const tableBody = document.querySelector("tbody"); // Get table body
    const totalOrdersElement = document.querySelector(".card-report .total-orders"); // Target the card number

    let totalOrders = tableBody.querySelectorAll("tr").length; // Count the number of rows

    // Update the card with the new count
    totalOrdersElement.textContent = totalOrders;
  }

  updateTotalOrders(); // Run once on page load

  // Optional: Watch for table changes (new rows added/removed)
  const observer = new MutationObserver(updateTotalOrders);
  observer.observe(document.querySelector("tbody"), { childList: true, subtree: true });
});