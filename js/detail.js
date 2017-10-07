window.onload = function() {
    // current number of items to add to cart
    let purchaseNum = 1;
    // current number of items in the cart
    let cartCount = 0;

    // register onclick events for purchase number operations
    const incBtns = document.getElementsByClassName("num-inc-btn");
    for (let i = 0; i < incBtns.length; i++) {
        incBtns[i].onclick = incPurchaseNum;
    }
    const decBtns = document.getElementsByClassName("num-dec-btn");
    for (let i = 0; i < incBtns.length; i++) {
        decBtns[i].onclick = decPurchaseNum;
    }

    // register onclick events for adding items to cart
    const cartBtns = document.getElementsByClassName("cart-btn");
    for (let i = 0; i < cartBtns.length; i++) {
        cartBtns[i].onclick = addToCart;
    }

    render();

    function incPurchaseNum() {
        purchaseNum++;
        render();
    }

    function decPurchaseNum() {
        if (purchaseNum > 1) {
            purchaseNum--;
            render();
        }
    }

    function addToCart() {
        cartCount += purchaseNum;
        purchaseNum = 1;
        render();
    }

    function render() {
        // update currently selected purchase number
        const numElems = document.getElementsByClassName("purchase-num");
        for (let i = 0; i < numElems.length; i++) {
            numElems[i].innerHTML = purchaseNum.toString();
        }

        // update shopping cart
        const cartElems = document.getElementsByClassName("cart-num-container");
        if (cartCount == 0 && cartElems.length > 0) {
            cartElems[0].remove();
        }
        if (cartCount > 0) {
            if (cartElems.length == 0) {
                const cartNumContainer = document.createElement("div");
                cartNumContainer.classList.add("cart-num-container");
                const cartNumElem = document.createElement("p");
                cartNumElem.classList.add("cart-num");
                cartNumContainer.appendChild(cartNumElem);
                document.getElementsByClassName("cart-container")[0].appendChild(cartNumContainer);
            }
            document.getElementsByClassName("cart-num")[0].innerHTML = cartCount.toString();
        }
    }
    
};
