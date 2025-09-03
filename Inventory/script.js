// ===== Load data from localStorage =====
let inventory = JSON.parse(localStorage.getItem("inventoryData")) || [];
let orders = JSON.parse(localStorage.getItem("ordersData")) || [];

// ===== Save to localStorage =====
function saveData() {
    localStorage.setItem("inventoryData", JSON.stringify(inventory));
    localStorage.setItem("ordersData", JSON.stringify(orders));
}

// ===== Inventory =====
function renderInventory() {
    const tableBody = document.querySelector("#inventoryTable tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";
    inventory.forEach(item => {
        const row = `<tr class="${item.stock < item.reorder ? 'table-danger' : ''}">
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.stock}</td>
            <td>${item.reorder}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function addProduct() {
    const name = document.getElementById("productName").value.trim();
    const stock = parseInt(document.getElementById("productStock").value);
    const reorder = parseInt(document.getElementById("reorderLevel").value);

    if (!name || isNaN(stock) || isNaN(reorder) || stock < 0 || reorder < 0) {
        alert("Please enter valid product details.");
        return;
    }

    inventory.push({
        id: inventory.length + 1,
        name,
        stock,
        reorder
    });

    saveData();
    renderInventory();
    populateOrderProducts();

    document.getElementById("productName").value = "";
    document.getElementById("productStock").value = "";
    document.getElementById("reorderLevel").value = "";

    const modalEl = document.querySelector("#addProductModal");
    if (modalEl) bootstrap.Modal.getInstance(modalEl).hide();
}

// ===== Orders =====
function populateOrderProducts() {
    const productSelect = document.getElementById("orderProduct");
    if (!productSelect) return;

    productSelect.innerHTML = "";
    inventory.forEach(item => {
        productSelect.innerHTML += `<option value="${item.id}">${item.name} (Stock: ${item.stock})</option>`;
    });
}

function placeOrder() {
    const customerName = document.getElementById("customerName").value.trim();
    const productId = parseInt(document.getElementById("orderProduct").value);
    const quantity = parseInt(document.getElementById("orderQuantity").value);

    if (!customerName || isNaN(productId) || isNaN(quantity) || quantity <= 0) {
        alert("Please fill all fields correctly.");
        return;
    }

    const product = inventory.find(p => p.id === productId);
    if (!product || product.stock < quantity) {
        alert("Not enough stock for this product.");
        return;
    }

    product.stock -= quantity;

    orders.push({
        id: orders.length + 1,
        customer: customerName,
        product: product.name,
        quantity,
        date: new Date().toISOString().split('T')[0],
        status: "Pending"
    });

    saveData();
    renderOrders();
    renderInventory();
    populateOrderProducts();

    document.getElementById("customerName").value = "";
    document.getElementById("orderQuantity").value = "";

    const modalEl = document.querySelector("#placeOrderModal");
    if (modalEl) bootstrap.Modal.getInstance(modalEl).hide();
}

function renderOrders() {
    const tableBody = document.querySelector("#ordersTable tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";
    orders.forEach(order => {
        const row = `<tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>${order.date}</td>
            <td>
                ${order.status} 
                ${order.status === "Pending" ? `<button class="btn btn-sm btn-warning ms-2" onclick="updateOrderStatus(${order.id})">Mark Shipped</button>` : ""}
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function updateOrderStatus(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = "Shipped";
        saveData();
        renderOrders();
        renderReports(); // Keep reports updated too
    }
}

// ===== Reports =====
function renderReports() {
    const totalProducts = inventory.length;
    const lowStockCount = inventory.filter(item => item.stock < item.reorder).length;
    const pendingOrdersCount = orders.filter(order => order.status === "Pending").length;

    if (document.getElementById("totalProducts")) {
        document.getElementById("totalProducts").textContent = totalProducts;
    }
    if (document.getElementById("lowStock")) {
        document.getElementById("lowStock").textContent = lowStockCount;
    }
    if (document.getElementById("pendingOrders")) {
        document.getElementById("pendingOrders").textContent = pendingOrdersCount;
    }
}

// ===== Auto Initialization =====
document.addEventListener("DOMContentLoaded", () => {
    renderInventory();
    renderOrders();
    populateOrderProducts();
    renderReports();
});
