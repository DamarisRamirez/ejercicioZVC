class Cart extends ZCustomController {
  onThis_init() {
    this.shopCart = [];
    this.shopCart = JSON.parse(localStorage.getItem("carrito"));
  }

  onThis_activated() {
    this.productsList.refresh();
  }

  onTextSearch_change() {
    this.productsList.refresh();
  }

  onProductsList_getRows() {
    let filter = this.textSearch.value;
    return this.shopCart
      .filter((product) => product.name.includes(filter))
      .map((row) => this.prepareRow(row));
  }

  prepareRow(row) {
    if (row.active) {
      delete row._rowClass;
      row.iconActive = "<i class='far fa-check-square'></i>";
    } else {
      row._rowClass = "table-danger";
      row.iconActive = "<i class='far fa-square'></i>";
    }
    return row;
  }
  onProductsList_cellClick(row, rowIndex, field) {
    if (field == "iconActive") {
      row.active = !row.active;
      this.productsList.updateRow(rowIndex, this.prepareRow(row));
    }
  }

  onRestartBtn_click() {
    localStorage.removeItem("carrito");
    //location.reload();
    this.shopCart = [];
    this.productsList.refresh();
  }
}

ZVC.export(Cart);
