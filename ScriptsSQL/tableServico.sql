CREATE TABLE Servico (
	ServicoId	INTEGER PRIMARY KEY IDENTITY(1,1),
	ClienteId	INTEGER,
	Descricao	VARCHAR(500) NOT NULL DEFAULT '',
	ValorAdicional	DECIMAL NOT NULL DEFAULT 0.00,
	PercentualDesconto	DECIMAL NOT NULL DEFAULT 0.00,
	ValorDesconto	DECIMAL NOT NULL DEFAULT 0.00,
	ValorTotal	DECIMAL NOT NULL DEFAULT 0.00,
	Status	VARCHAR(20) NOT NULL DEFAULT '',
	Ativo	BIT NOT NULL DEFAULT 1,
	DataCadastro	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(ClienteId) REFERENCES Cliente(ClienteId)
)