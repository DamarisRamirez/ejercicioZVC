class ProductsModel {
  constructor(n) {
    this.products = [];
    for (let i = 1; i <= n; i++) {
      this.products.push({
        id: "prod_" + i,
        name: "Product " + i,
        price: i * 1000,
        active: false,
      });
    }
  }

  getProducts(textFilter = "") {
    let filter = textFilter.toLowerCase();
    return this.products
      .filter((p) => p.name.toLowerCase().indexOf(filter) >= 0)
      .sort((p1, p2) => (p1.name > p2.name ? 1 : -1));
  }

  getProductsCount(textFilter = "") {
    return this.getProducts(textFilter).length;
  }

  getProductsPage(textFilter = "", fromIndex, nRows) {
    return this.getProducts(textFilter).filter(
      (r, i) => i >= fromIndex && i - fromIndex < nRows
    );
  }

  addProduct(product) {
    if (this.products.findIndex((p) => p.id == product.id) >= 0)
      throw "Product id '" + product.id + "' already exists";
    this.products.push(product);
  }

  saveProduct(product) {
    let idx = this.products.findIndex((p) => p.id == product.id);
    if (idx < 0) throw "Product Not Found";
    this.products.splice(idx, 1);
  }
}
