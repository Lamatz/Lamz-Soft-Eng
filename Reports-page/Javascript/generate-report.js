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
