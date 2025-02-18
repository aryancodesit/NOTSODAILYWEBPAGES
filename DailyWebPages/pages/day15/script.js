const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let total = 0;

addExpenseBtn.addEventListener("click", () => {
    const expenseName = document.getElementById("expenseName").value.trim();
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
    const expenseCategory = document.getElementById("expenseCategory").value;

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    // Add expense to the list
    const expenseItem = document.createElement("li");
    expenseItem.innerHTML = `
        <span>${expenseName} (${expenseCategory})</span>
        <span>₹${expenseAmount.toFixed(2)}</span>
    `;
    expenseList.appendChild(expenseItem);

    // Update total
    total += expenseAmount;
    totalAmount.textContent = total.toFixed(2);

    // Clear input fields
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
});
