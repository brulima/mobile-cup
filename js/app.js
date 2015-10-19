var getElement = function(id) {
	return document.getElementById(id);
};

getElement('btn-enviar').addEventListener('click', function() {
	var congeladinhos = JSON.parse(localStorage.congeladinhos || "[]");

	var novo = {
		nome: getElement('nome').value,
		minima: getElement('minima').value,
		maxima: getElement('maxima').value
	}

	for (var i = 0; i < congeladinhos.length; i++) {
		if (congeladinhos[i].nome === novo.nome) {
			congeladinhos[i].minima = novo.minima;
			congeladinhos[i].maxima = novo.maxima;
			console.log(congeladinhos);
			return;
		}
	};

	congeladinhos.push(novo);

	localStorage.congeladinhos = JSON.stringify(congeladinhos);

	console.log(congeladinhos);
});