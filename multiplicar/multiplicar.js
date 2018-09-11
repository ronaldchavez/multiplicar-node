const fs = require('fs');
const colors = require('colors');

let listarTabla = ( base, limite ) => {

	console.log('======================='.green);
	console.log(`Tabla de ${ base }`.green);
	console.log('======================='.green);

	for(let i = 1 ; i <= limite; i++){
			console.log(`${base} * ${i} = ${base * i}\n`);
		}

};

let crearArchivo = ( base ) => {

	return new Promise( (resolve,reject) => {

		if( !Number(base) ){

			reject(`la base introducida ${base} debe ser un numero`);
			return;

		}

		let data = '';

		for(let i = 1 ; i <= 10; i++){
			data += `${base} * ${i} = ${base * i}\n`;
		}

		fs.writeFile(`tabla-${base}.txt`, data, (err) => {
  			if (err) 
  				reject(err)
  			else
  				resolve(`tabla-${base}.txt`);

			});

	});


}

module.exports = {
	crearArchivo,
	listarTabla
}
