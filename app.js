const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



//let argv2 = process.argv;
//let parametro = argv2[2];
//let base = parametro.split('=')[1]
console.log(argv);
console.log(argv.base);
let comando = argv._[0];

 switch(comando) {

 	case 'listar':
 	listarTabla(argv.base || argv.b, argv.limite || argv.l);
 	break;

 	case 'crear':
 	crearArchivo(argv.base || argv.b)
	.then( archivo => console.log(archivo) ).
	catch( (e) => console.log(e) );
	break;

	default:
	console.log('comando no reconocido');


 }

