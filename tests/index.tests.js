var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
var request = require('superagent');
require('dotenv').config();
var host = 'http://localhost:'+process.env.PORT;
var obj = {origem: 11, destino: 16, plano: 60, tempo: 100};

describe('Deve responder ao GET \'/\'', function(){
    it('Deve retornar um status 200',function(done){
        request
        .get(host)
        .end(function(err, res){
            expect(res.status).to.equal(200);
            done();
        });
    });
});

describe('Deve aceitar um objeto via POST \'/prices\'', function(){
    it('Deve retornar um objeto', function(done){
        request
        .post(host+'/prices')
        .send(obj)
        .end(function(end, res){
            expect(res.body).should.be.a('object');
            done();
        });
    });

    describe('Se o objeto for válido', function(){
        it('Deve retornar origem, destino, novo valor e valor antigo', function(done){
            request
            .post(host+'/prices')
            .send(obj)
            .end(function(end, res){
                expect(res.body).to.have.property('origin');
                expect(res.body).to.have.property('destiny');
                expect(res.body).to.have.property('stdValue');
                expect(res.body).to.have.property('newValue');
                done();
            });
        });
        it('Todos os valores serão number(inteiro ou float)', function(done){
            request
            .post(host+'/prices')
            .send(obj)
            .end(function(end, res){
                expect(res.body).to.have.property('origin').to.be.a('number');
                expect(res.body).to.have.property('destiny').to.be.a('number');
                expect(res.body).to.have.property('stdValue').to.be.a('number');
                expect(res.body).to.have.property('newValue').to.be.a('number');
                done();
            });
        });
    });
    describe('Se não for um objeto válido', function(){
        it('Todos os valores serão null', function(done){
            request
            .post(host+'/prices')
            .send({})
            .end(function(end, res){
                expect(res.body).to.have.property('origin').equal(null);
                expect(res.body).to.have.property('destiny').equal(null);
                expect(res.body).to.have.property('stdValue').equal(null);
                expect(res.body).to.have.property('newValue').equal(null);
                done();
            });
        });
    });
    describe('O objeto retornado deve ter 4 propriedades', function(){
        it('Deve retornar origem, destino, novo valor e valor antigo', function(done){
            request
            .post(host+'/prices')
            .send(obj)
            .end(function(end, res){
                expect(Object.keys(res.body)).to.have.lengthOf(4);
                done();
            });
        });
    });
});
