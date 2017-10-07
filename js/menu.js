window.onload = function() {
    // name currently selected category, null for showing all items
    let currCategoryName = null;
    // li element containing selected category
    let currCategoryElem = null;

    // add available categories
    const categoryList = document.getElementsByClassName("menu-category")[0];
    for (const k in Category) {
        if (Category.hasOwnProperty(k)) {
            const categoryItem = document.createElement("li");
            categoryItem.appendChild(document.createTextNode(Category[k]));
    
            // register onclick event for each category item
            categoryItem.onclick = () => {
                currCategoryName = Category[k];
                currCategoryElem = categoryItem;
                render();
            };
    
            categoryList.appendChild(categoryItem);
        }
    }

    // register onclick event for showing all items
    const showAllItems = document.getElementsByClassName("menu-all")[0];
    currCategoryElem = showAllItems;
    showAllItems.onclick = () => {
        // category null for showing all items
        currCategoryName = null;
        currCategoryElem = showAllItems;
        render();
    }
    render();


    function render() {
        // render the category currently selected
        for (let i = 0; i < categoryList.children.length; i++) {
            categoryList.children[i].classList.remove("selected");
        }
        currCategoryElem.classList.add("selected");
        
        // collect all items under current category
        const items = [];
        for (const k in Roll) {
            if (Roll.hasOwnProperty(k)) {
                const item = Roll[k];
                if (currCategoryName == null || item.categories.indexOf(currCategoryName) >= 0) {
                    items.push(item);
                }
            }
        }
    
        // render elements as columns
        if (items.length == 0) {
            return;
        }
        const menuCols = document.getElementsByClassName("menu-listing-col");
        if (menuCols.length == 0) {
            return;
        }
        // remove all items if any currently in each of the columns
        for (let i = 0; i < menuCols.length; i++) {
            while (menuCols[i].hasChildNodes()) {
                menuCols[i].removeChild(menuCols[i].firstChild);
            }
        }
    
        let currCol = 0;
        for (let i = 0; i < items.length; i++) {
            const itemName = items[i].name;
            const itemListElem = document.createElement("li");
            itemListElem.appendChild(document.createTextNode(itemName));
            menuCols[currCol].appendChild(itemListElem);
            currCol = (currCol + 1) % menuCols.length;
        }
    }
    
};
