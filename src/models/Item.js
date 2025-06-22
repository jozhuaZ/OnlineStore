
export default class Item {
    constructor (data) {
        this.barcode = data.barcode; // generateBarcode();
        this.name = data.name;
        this.brandName = data.brand_name;
        this.imageUrl = data.image_url;
        this.price = data.price;
        this.quantity = data.quantity;
        this.category = data.category_name;
    }

    // GETTERS
    getBarcode() { return this.barcode } 
    getName() { return this.name } 
    getBrandName() { return this.brandName } 
    getImageUrl() { return this.imageUrl } 
    getPrice() { return this.price } 
    getQuantity() { return this.quantity } 
    getCategory() { return this.category } 

    // SETTERS
    setBarcode({ barcode }) { this.barcode = barcode }
    setName({ name }) { this.name = name }
    setBrandName({ brandName }) { this.brandName = brandName }
    setImageUrl({ imageUrl }) { this.imageUrl = imageUrl }
    setPrice({ price }) { this.price = price }
    setQuantity({ quantity }) { this.quantity = quantity }
    setCategory({ category }) { this.quantity = quantity }
};