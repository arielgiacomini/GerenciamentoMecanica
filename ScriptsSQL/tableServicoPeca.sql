CREATE TABLE ServicoPeca (
	PecaId	INTEGER,
	ServicoId	INTEGER,
	FOREIGN KEY(PecaId) REFERENCES Peca(PecaId),
	FOREIGN KEY(ServicoId) REFERENCES Servico(ServicoId)
)