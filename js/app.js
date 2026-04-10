const table = document.getElementById("productTable");

// FETCH API
fetch("https://dummyjson.com/products?limit=10")
  .then(res => res.json())
  .then(data => {
    data.products.forEach(product => {
      addRow(product.title, product.category, product.price);
    });
  });

// TAMBAH DATA KE TABLE
function addRow(name, category, price) {
  let row = `
    <tr>
      <td>${name}</td>
      <td>${category}</td>
      <td>${price}</td>
      <td><button onclick="deleteRow(this)">Hapus</button></td>
    </tr>
  `;
  table.innerHTML += row;
}

// BORANG SUBMIT
document.getElementById("productForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;

  addRow(name, category, price);
  console.log("Produk ditambah");

  this.reset();
});

// DELETE
function deleteRow(btn) {
  btn.parentElement.parentElement.remove();
}