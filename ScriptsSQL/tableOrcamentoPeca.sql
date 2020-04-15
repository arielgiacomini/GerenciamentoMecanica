CREATE TABLE OrcamentoPeca (
	OrcamentoId	INTEGER NOT NULL,
	PecaId	INTEGER NOT NULL,
	FOREIGN KEY(OrcamentoId) REFERENCES Orcamento(OrcamentoId),
	FOREIGN KEY(PecaId) REFERENCES Peca(PecaId)
)