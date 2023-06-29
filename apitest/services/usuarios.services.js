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

  async create(){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }



  find(){
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve(this.client);
      }, 1000);
    });
  }

  async findOne(id){
    return this.users.find(item => item.id === id);
  }

  upddate(){

  }

  delete(){
  }
}

module.exports = UsersService;
