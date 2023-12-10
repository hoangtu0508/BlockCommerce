export const calculateTotalPrice = (productPayment) => {
    return productPayment?.reduce((acc, item) => {
        return acc + item?.product?.attributes?.productPrice * item?.quantity;
    }, 0);
};

export const getSelectedProducts = (productCart) => {
    // Chỉ lấy các sản phẩm có isSelected là true
    const selectedProducts = productCart?.filter((product) => product.isSelected);
    return selectedProducts
};

export const areAllSelected = (productCart) => {
    return productCart?.every((item) => item.isSelected);
};