const boom = require('@hapi/boom');

const faker = require ('faker');

class UsersService{
  constructor(){
    this.users = []
    this.generate();
  }

  generate(){
    const limit = 10;
    for (let index = 0; index < limit; index++){
      this.users.push({
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        userName: faker.internet.userName()
      });
    }
  }

  create(){

  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  upddate(){

  }

  delete(){
  }
}

module.exports = UsersService;
