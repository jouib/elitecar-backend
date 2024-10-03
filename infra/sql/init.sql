
CREATE TABLE carro (
	id_carro SERIAL PRIMARY KEY,
	marca VARCHAR(50) NOT NULL,
	modelo VARCHAR(50) NOT NULL,
	ano INT,
	cor VARCHAR(20)
);

CREATE TABLE cliente (
	id_cliente SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	telefone VARCHAR(16)
);

CREATE TABLE pedido_venda (
	id_pedido SERIAL PRIMARY KEY,
	id_cliente INT NOT NULL,
	id_carro INT NOT NULL,
	data_pedido DATE NOT NULL,
	valor_pedido DECIMAL(6) NOT NULL,
	FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente),
	FOREIGN KEY (id_carro) REFERENCES carro (id_carro)
); 

INSERT INTO carro (marca, modelo, ano, cor) VALUES
('Honda', 'Odissey', 2020, 'Preto'),
('Toyota', 'Yaris', 2022, 'Preto'),
('Ford', 'Mustang', 2021, 'Branco'),
('Ford', 'Fiesta', 2018, 'Azul'),
('Ford', 'Mustang', 2012, 'Cinza');

INSERT INTO cliente (nome, cpf, telefone) VALUES
('Maria Pereira', '69245678901', '(11) 91234-5678'),
('Cibele Almeida', '23952789012', '(21) 92345-6789'),
('Thiago Santana', '34567890123', '(31) 93456-7890'),
('José Renato', '45678351234', '(41) 94567-8901'),
('Lucas Pereira', '84789012345', '(51) 95678-9012');

 INSERT INTO pedido_venda (id_cliente, id_carro, data_pedido, valor_pedido) VALUES
(1, 1, '2024-10-01', 50000.00),
(2, 2, '2024-10-02', 45000.00),
(3, 3, '2024-10-03', 60000.00),
(4, 4, '2024-10-04', 40000.00),
(5, 5, '2024-10-05', 55000.00);