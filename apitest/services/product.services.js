const  faker = require ('faker');
const boom = require ('@hapi/boom');

class ProductService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

async create(data){
  const newProduct = {
    id: faker.datatype.uuid(),
    ...data
  }
  this.products.push(newProduct);
  return newProduct;
}

find(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve(this.products);
    }, 3000);
  });
}

async findOne(id){
  const product = this.products.find(item => item.id === id);
  if (!product) {
    throw boom.notFound('Product not Found');
  }
  if (product.isBlock) {
    throw boom.conflict('Product is block');
  }
  return product;
}

async update(id, changes){
  const index = this.products.findIndex(item => item.id === id);
  if (index === -1){
    throw boom.notFound('Product not Found');
  }
  const product = this.products[index];
  this.products[index] ={
    ...product,
    ...changes
  };
  return this.products[index];
}

async delete(id){
  const index = this.products.findIndex(item => item.id === id);
  if (index === -1){
    throw boom.notFound('Product not Found');
  }
  this.products.splice(index, 1);
  return { id }
}

}

module.exports = ProductService;
