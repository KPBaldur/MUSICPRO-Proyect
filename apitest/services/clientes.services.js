const boom = require('@hapi/boom');

const faker = require ('faker');

class ClientService{
    constructor(){
        this.client = []
        this.generate();
    }

    generate(){
        const limit = 10;
        for (let index = 0; index < limit; index++){
            this.client.push({
                id: faker.datatype.uuid(),
                email:faker.internet.email(),
                userName: faker.internet.userName()
            });
        }
    }

    async create(data){
        const newClient = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.client.push(newClient);
        return newClient;
    }

    find(){
        return new Promise((resolve, rejecto) =>{
            setTimeout(() =>{
                resolve(this.client);
            }, 1500);
        });
    }

    async findOne(id){
        const client = this.client.fin(item => item.id === id);
        if (!product) {
            throw boom.notFound('Client not Found');
        }
        if (product.isBlock) {
            throw boom.conflict('Client is block');
        }
        return product;
    }

    async update(id, changes){
        const index = this.client.findIndex(item => item.id === id);
        if (index === -1){
            throw boom.notFound('Client not Found');
        }
        const product = this.client[index];
        this.client[index] ={
            ...client,
            ...changes
        };
        return this.client[index];
    }

    async delete(id){
        const index = this.client.findIndex(item => item.id === id);
        if (index === -1){
            throw boom.notFound('Client not Found');
        }
        this.client.splice(index, 1);
        return { id }
    }

}

module.exports = ClientService;