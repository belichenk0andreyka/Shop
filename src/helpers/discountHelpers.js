export const getPriceWithDiscount = ({ discount, price, date }) => {
    const dateNow = Date.now();
    if (discount && date && (dateNow < date)) {
        const discountCount = (price * discount) / 100;
        return price - discountCount;
    }
}
