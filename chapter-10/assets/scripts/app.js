renderHook = document.getElementById('app');
const ulElement = renderHook.firstElementChild;



class Product {
    //title;
    imageUrl;
    price;
    description;
    /* these field definitions above are not required to assign values to these them (this.title)  */

    constructor(title, image, price, desc) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc
    }
}
class Component {

    constructor(hookId){ 
        this.hookId = hookId;
    }

    createRootElement(tag, cssClass, attribute){
        const  rootElement = document.createElement(tag);
        rootElement.className = cssClass;
        console.log(this.hookId)
        this.hookId.prepend(rootElement);
        return rootElement
    }
}

class ProductUI extends Component{

    constructor(eachProduct,hookId) {
        super(hookId)
        this.eachProduct = eachProduct;
    }

    addCartButtonHandler() {
        console.log('the product is adding...');
        console.log(this.eachProduct);
        shop.cart.addProduct(this.eachProduct);


    }

    renderUI(eachProduct) {
        const  liElement = this.createRootElement('li', 'product-item')
        liElement.innerHTML = `
            <div>
                <img
                    src="https://i.pinimg.com/564x/63/cc/ec/63ccec6377a3844a9b26fc1a26f6fe20.jpg"
                    alt="title"
                />
                <div class= 'product-item__content'>
                    <h2>${eachProduct.title}</h2>
                    <h3>${eachProduct.price}</h3>
                    <p>${eachProduct.description}</p>
                    <button>Add to cart</button>
                </div>
        
        `
        const addCartButton = liElement.querySelector('button');
        addCartButton.addEventListener('click', this.addCartButtonHandler.bind(this));
        return liElement;

        /* -------------------------------------- */

    }

}
class ShoppingCart extends Component {
    count = 0;
    constructor(hookId){
        super(hookId);  /* I MUST call super() constructor to use the component class property and method beacuse 
        you are using the property and methods of parent class and without initailizing the property of the
        parent class for the sepecific child object you dont really have any property of the parent 
        class available. As the class rule goes, we initailize the property with constructior mehtod. So, in
        this case we are initializing the property of the parent class by calling the constructor of parent class
        with super() Keyword   */ 
    }
    
    //cartEl = document.createElement('section');

    addProduct(eachProduct) {
        this.count = this.count + eachProduct.price;
        console.log(this.count);
        console.log(this.countSpan);
        this.countSpan.innerHTML = this.count;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
        <h2>Total : <span id='dhor'> ${this.count.toFixed(2)} </span></h2>
        <button>Order Now!</button
        `;
       // this.cartEl.classList = 'cart';
        this.countSpan = cartEl.querySelector('span'); // if i used getElementById, it would not have worked
        console.log(this.countSpan);

        //return cartEl;
    }
}



const productList = {
    product: [

        new Product(
            'A pillow',
            'https://rb.gy/wh7f4z',
            19.99, 'A soft pillow'
        ),

        new Product(
            'A carpet',
            'https://i.pinimg.com/564x/63/cc/ec/63ccec6377a3844a9b26fc1a26f6fe20.jpg',
            89.99,
            'A carpet which you might like or not'
        )

    ],

    render: function () {
        for (eachProduct of this.product) {
            const eachProductComponent = new ProductUI(eachProduct, renderHook)
            ulElement.append(eachProductComponent.renderUI(eachProduct))

        }
    }
}


class Shop {

    render() {
        this.cart = new ShoppingCart(renderHook);
        const cartEl = this.cart.render(); // this cartEl refers to the same DOM element as cartEl does in cart object
        //renderHook.prepend(cartEl);
        productList.render();
    }

}

const shop = new Shop();
shop.render();






