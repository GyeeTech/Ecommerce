import AddProduct from '../page-object/addProduct'

const addProduct = new AddProduct();

describe('Add Product Test', () => {
  it('adds products', () => {
    addProduct.addMultipleProducts();
  });
});
