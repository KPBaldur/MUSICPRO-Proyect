const faker = require ('faker');
const boom = require('@hapi/boom');

class UsersService{
  constructor(){
    this.users = []
    this.generate();
  }

  generate(){
    const limit = 4;
    for (let index = 0; index < limit; index++){
      this.users.push({
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        userName: faker.internet.userName(),
      });
    }
  }

  async create(data){
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
        resolve(this.users);
      }, 1000);
    });
  }

  async findOne(id){
    const users = this.users.find(item => item.id === id);
    return users
  }


  async upddate(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('User not Found');
    }
    const users = this.users[index];
    this.client[index] ={
      ...users,
      ...changes
    };
    return this.users[index];
  }



  async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('Users not Found');
    }
    this.users.splice(index, 1);
    return { id }
  }
}

module.exports = UsersService;
