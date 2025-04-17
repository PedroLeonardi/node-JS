CREATE DATABASE p_contatos_end;

USE p_contatos_end;

CREATE TABLE cliente (
	id INT primary key auto_increment UNIQUE, 
    nome VARCHAR(50),
    idade int,
    email VARCHAR(100)
);

INSERT INTO cliente (nome, idade, email) VALUES 
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

select *from cliente;




