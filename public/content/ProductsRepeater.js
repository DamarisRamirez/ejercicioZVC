class ProductsRepeater extends ZCustomController {
  onThis_init() {
    this.prodModel = new ProductsModel(10);
  }
  onThis_activated() {
    this.repeater.refresh();
  }
  onTextSearch_change() {
    this.repeater.refresh();
  }
  onRepeater_getRows() {
    let filter = this.textSearch.value;
    let rows = this.prodModel.getProducts(filter);
    return rows;
  }
}
ZVC.export(ProductsRepeater);
