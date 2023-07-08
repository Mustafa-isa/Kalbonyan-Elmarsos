class Product {
  

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}
class Shoop{
items =[]
addProduct(product){

this.items.push(product)
this.totalPricing =`  <h2> total: /$${0}</h2> `


}
render(){



  let cartSection =document.createElement("section")
  cartSection.classList = 'cart'
  cartSection.innerHTML =`
  <h2> total: /$${0}</h2>
  <button>request it now!..</button>
  
  `
  this.totalPricing = cartSection.querySelector('h2')

  return cartSection
}
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addClick(){
    console.log('.....')
    console.log(this.product)
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button  >Add to Cart</button>
          </div>
        </div>
      `;
      let productBtn = prodEl.querySelector('button')
      productBtn.addEventListener('click' , this.addClick.bind(this))
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      ' shelow ',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      162
    ),
    new Product(
      'los',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      25
    )
  ];

  constructor() {}

  render() {
   
    const prodList = document.createElement('ul')
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod)
      const prodEl = productItem.render()
      prodList.append(prodEl)
    }
return prodList
  }
}

class Render{


  render(){
    const renderHook = document.getElementById('app')
    const productList = new ProductList()
   
  const AllLIST=  productList.render()
  this.cart = new Shoop()
   const Cart= this.cart.render()
   renderHook.append(Cart)
   renderHook.append(AllLIST)
  }





}
const moudle =  new Render()
moudle.render()
