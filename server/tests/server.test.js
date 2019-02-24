var expect = require('expect');
var supertest = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) =>{
Todo.remove({}).then(() => done());
});

describe('POST todos/', () => {
  it('It should create a new todos', (done) =>{
     var text = 'Test todo text';

     request(app)

     .post('./todos')
     .send({text})
     .expect(200)
     .expect((res) =>{
       expect(res,body,text).toBe(text);

     })
     .end((err, res)=>{
       if(error){
        return done(err);
       }

       Todo.find().then((todos) =>{
         expect(todos.length).toBe(1);
         expect(todos[0].text).toBe(text);
         done();
       }).catch((err) => done());

     })
  });
});