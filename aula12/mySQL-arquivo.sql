CREATE DATABASE p_loja;

USE p_loja;

CREATE TABLE cliente (
	id INT primary key auto_increment UNIQUE, 
    nome VARCHAR(50),
    email VARCHAR(50),
    endereco VARCHAR(50)
);

CREATE TABLE produtos (
	id INT primary key,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2)
);

CREATE TABLE pedidos (
	id INT primary key,
    id_cliente INT,
	periodo DATE,
    total DECIMAL (10,2)
);


CREATE TABLE itens_pedido (
	id_pedidos INT, 
    id_produto INT,
    quantidade INT,
    preco_unitario DECIMAL(10,2)
);

INSERT INTO cliente (nome, email, endereco)
values ('pedro', 'pedro@email', 'rua dos canarios'),
( 'davi', 'davi@email', 'rua das anadorinhas'),
('ramon', 'ramon@email', 'rua dos pombos');


INSERT INTO pedidos (id, id_cliente, periodo, total)
value(10,1,'2025-04-08',100.00),
(20,2,'2025-04-09',150.00),
(30,3,'2025-04-10',200.00);

INSERT INTO produtos (id, nome, descricao, preco)
VALUE (100, 'pão francês', 'pão francês com massa branca assado', 0.70),
(200, 'Baguete', 'Baguete com massa branca de 20cm assada', 5.00),
(300, 'Bolo', 'Bolo de ceneoura com cobertura de chocolate', 20.00);

INSERT INTO itens_pedido (id_pedidos, id_produto, quantidade, preco_unitario)
VALUE (10, 100, 5, 0.70),
(20, 200, 10, 5.00),
(30, 200, 1, 20.00);

select *from cliente;









/*
CREATE TABLE cliente (
	id INT primary key, 
    nome VARCHAR(50),
    email VARCHAR(50),
    endreco VARCHAR(50)
);

CREATE TABLE produtos (
	id INT primary key,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2)
);

CREATE TABLE pedidos (
	id INT primary key,
    id_cliente INT,
    constraint fk_id_cliente foreign key(id_cliente) REFERENCES cliente(id),
	periodo DATE,
    tatal DECIMAL (10,2)
);

CREATE TABLE itens_pedido (
	id_pedidos INT, 
    constraint fk_id_pedidos foreign key(id_pedidos) REFERENCES pedidos(id),
    id_produto INT,
    constraint fk_id_pedidos foreign key (id_produto) REFERENCES produtos(id),
    quantidade INT,
    preco_unitario DECIMAL(10,2)
); */
