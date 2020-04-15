CREATE TABLE
	Cliente 
	(
	ClienteId	INTEGER NOT NULL PRIMARY KEY IDENTITY(1,1),
	NomeCliente	VARCHAR(200) DEFAULT '',
	Apelido	VARCHAR(200) DEFAULT '',
	DocumentoCliente	VARCHAR(200) DEFAULT '',
	Sexo	VARCHAR(20) DEFAULT '',
	EstadoCivil	VARCHAR(20) DEFAULT '',
	DataNascimento	DATETIME,
	Email	VARCHAR(15) DEFAULT '',
	TelefoneFixo	VARCHAR(15) DEFAULT '(00)0000-0000',
	TelefoneCelular	VARCHAR(15) DEFAULT '(00)0-0000-0000',
	TelefoneOutros	VARCHAR(15) DEFAULT '(00)0-0000-0000',
	LogradouroCEP	VARCHAR(15) DEFAULT '',
	LogradouroNome	VARCHAR(500) DEFAULT '',
	LogradouroNumero	VARCHAR(20) DEFAULT '',
	LogradouroComplemento	VARCHAR(500) DEFAULT '',
	LogradouroMunicipio	VARCHAR(500) DEFAULT '',
	LogradouroBairro	VARCHAR(500) DEFAULT '',
	LogradouroUF	CHAR(2) DEFAULT '',
	RecebeNotificacoes	BIT DEFAULT 0,
	ClienteAtivo	INTEGER DEFAULT 1,
	DataCadastro	DATETIME DEFAULT CURRENT_TIMESTAMP
)

ALTER TABLE Cliente ADD DataAlteracao DATETIME