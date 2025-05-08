-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS p_biblioteca;

-- Usar banco de dados
USE p_biblioteca;

-- Tabela usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(50) NOT NULL DEFAULT 'comum',
    dataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserir dados na tabela usuarios
INSERT INTO usuarios (nome, email, senha, tipo) VALUES
('João Silva', 'joao.silva@email.com', '$2a$10$c.bkXGhi9otUTwZlqW8yUeF1/i8zoVjOyKCmJ0BbrHh.jqz5Pj2', 'admin'),
('Maria Souza', 'maria.souza@email.com', '$2a$10$c.bkXGhi9otUTwZlqW8yUeF1/i8zoVjOyKCmJ0BbrHh.jqz5Pj2', 'comum'),
('Pedro Alves', 'pedro.alves@email.com', '$2a$10$c.bkXGhi9otUTwZlqW8yUeF1/i8zoVjOyKCmJ0BbrHh.jqz5Pj2', 'comum');

-- Tabela livros
CREATE TABLE IF NOT EXISTS livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    capa VARCHAR(255), -- Nome do arquivo da capa
    dataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserir dados na tabela livros
INSERT INTO livros (titulo, descricao, isbn, capa) VALUES
('Dom Quixote', 'A história de um nobre que...', '9780142437238', 'dom_quixote.jpg'),
('Cem Anos de Solidão', 'A saga da família Buendía...', '9780307350523', 'cem_anos.jpg'),
('Orgulho e Preconceito', 'Uma história de amor e classes sociais...', '9780141439518', 'orgulho.jpg');

select *from livros;

select *from usuarios;
