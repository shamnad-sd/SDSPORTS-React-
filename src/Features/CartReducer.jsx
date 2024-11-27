const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            // Check if the product is already in the cart
            {
                const existingProductIndex = state.findIndex(p => p.id === action.product.id);
                if (existingProductIndex >= 0) {
                    // If it exists, increase the quantity
                    return state.map((product, index) =>
                        index === existingProductIndex
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                    );
                }
                // If it doesn't exist, add it with quantity 1
                return [...state, { ...action.product, quantity: 1 }];
            }
        case "Remove":
            return state.filter(product => product.id !== action.id);

        case "Increase":
            return state.map(product =>
                product.id === action.id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
        case "Decrease":
            return state.map(product =>
                product.id === action.id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
        default:
            return state;
    }
}

export default CartReducer;