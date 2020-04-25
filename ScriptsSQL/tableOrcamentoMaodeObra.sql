CREATE TABLE OrcamentoMaodeObra (
	OrcamentoId	INT NOT NULL,
	MaodeObraId	INT NOT NULL,
	FOREIGN KEY(MaodeObraId) REFERENCES MaodeObra(MaodeObraId),
	FOREIGN KEY(OrcamentoId) REFERENCES Orcamento(OrcamentoId)
)