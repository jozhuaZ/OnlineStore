
export default class Item {
    constructor ({ barcode, name, imageUrl, price, quantity }) {
        this.barcode = barcode; // generateBarcode();
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;
    }

    // GETTERS
    getBarcode() { return this.barcode } 
    getName() { return this.name } 
    getImageUrl() { return this.imageUrl } 
    getPrice() { return this.price } 
    getQuantity() { return this.quantity } 

    // SETTERS
    setBarcode({ barcode }) { this.barcode = barcode }
    setName({ name }) { this.name = name }
    setImageUrl({ imageUrl }) { this.imageUrl = imageUrl }
    setPrice({ price }) { this.price = price }
    setQuantity({ quantity }) { this.barcode = barcode }
};