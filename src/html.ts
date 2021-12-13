
import uranio from 'uranio';

const button = document.createElement('button');
button.setAttribute('class','button');
button.setAttribute('id','make_call');
const span = document.createElement('span');
span.innerHTML = 'Make call';
button.appendChild(span);
document.body.append(button);

button.addEventListener('click', _make_call);

function _make_call(){
	uranio.hooks.products.count({}).then((trx_response) => {
		console.log(trx_response.payload);
	});
}
