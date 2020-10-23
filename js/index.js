function insert(num) {
	document.form.textview.value = document.form.textview.value + num;
}

function clean() {
	document.form.textview.value = '';
}

function back() {
	let result = document.form.textview.value;
	document.form.textview.value = result.substring(0, result.length - 1);
}

function equal() {
	let result = document.form.textview.value;

	if (result) {
		try {
			document.form.textview.value = eval(result);

			if (isNaN(eval(result)) || eval(result) === undefined) {
				throw new EvalError('Error');
			}
		} catch {
      document.form.textview.value = 'Error';
      
      setTimeout(() => {
        clean();
      }, 2000)
		}
	}
}