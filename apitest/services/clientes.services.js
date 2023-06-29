const faker = require ('faker');
const boom = require('@hapi/boom');


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
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(this.client);
            }, 1500);
        });
    }

    async findOne(id){
        const client = this.client.find(item => item.id === id);
        return client
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
