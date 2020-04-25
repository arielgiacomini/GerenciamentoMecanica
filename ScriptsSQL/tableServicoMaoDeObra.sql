CREATE TABLE ServicoMaodeObra (
	MaodeObraId	INTEGER,
	ServicoId	INTEGER,
	FOREIGN KEY(MaoDeObraId) REFERENCES MaodeObra(MaodeObraId),
	FOREIGN KEY(ServicoId) REFERENCES Servico(ServicoId)
)