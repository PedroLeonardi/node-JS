CREATE DATABASE p_contatos_end;

USE p_contatos_end;

CREATE TABLE clientes (
	id INT primary key auto_increment UNIQUE, 
    nome VARCHAR(50),
    idade int,
    email VARCHAR(100)
);

create table produtos (
id INT primary key auto_increment,
nome VARCHAR(50),
descricao TEXT,
preco decimal (10, 2)
);

create table pedidos (
id INT primary key auto_increment,
cliente_id int,
periodo DATE not null,
total decimal (10,2)
);

create table itens_pedidos (
pedido_id int primary key auto_increment,
produto_id int,
quantidade int,
preco_unitario decimal (10, 2)
);

INSERT INTO clientes (nome, idade, email) VALUES 
('lucas', 35, 'lucas@email'),
('ronaldo', 30, 'ronaldo@email'),
('pedro', 19, 'pedro@email'),
('anderson', 55, 'anderson@email'),
('rodri', 35, 'rodri@email'),
('matheus', 10, 'matheus@email'),
('ana', 16, 'ana@email'),
('patricia', 20, 'patricia@email'),
('luis', 21, 'luis@email'),
('marcos', 9, 'marcos@email');

insert into produtos (id, nome, descricao, preco)
value (1, 'RTX 3050', 'melhor gpu do mundo', 1300.00),
(2, 'Ryzen 7 6600XT', 'melhor cpu do mundo', 1500.00),
(3, 'SSD 240NVme', 'melhor ssd do mundo', 300.00);

insert pedidos (id, cliente_id, periodo, total)
value (1, 1, '2025-04-08', 1300.00),
 (2, 2, '2025-03-18', 1500.00),
 (3, 3, '2025-02-08', 300.00);

insert itens_pedidos (pedido_id, produto_id, quantidade, preco_unitario)
value (1, 1, 1, 1300.00),
(2, 2, 1, 1500.00),
(3, 3, 3, 900.00);

select *from clientes;






