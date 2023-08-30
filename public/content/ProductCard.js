const memory = localStorage.getItem("carrito");
let carrito = [];

class ProductCard extends ZCustomController {
  onThis_init(product) {
    this.product = product;
    this.refresh();
  }

  refresh() {
    if (!this.product) return;
    this.lblProductName.text = this.product.name;
    this.lblProductPrice.text = "precio: $" + this.product.price;
    this.edActive.checked = this.product.active;
    if (this.product.active) {
      this.removeClass("bg-light");
      this.removeClass("text-primary");
      this.addClass("bg-primary");
      this.addClass("text-white");
    } else {
      this.addClass("bg-light");
      this.addClass("text-primary");
    }
  }

  onEdActive_change() {
    console.log("zID", this.zId);
    console.log("object", this.product);
    carrito.push(this.product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    this.product.active = this.edActive.checked;
    this.refresh();
  }
}

ZVC.export(ProductCard);
