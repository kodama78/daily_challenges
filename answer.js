<script type="text/javascript">
	/* DAILY CHALLENGE 001 */
	var haystack = ['cat','dog','bird','turtle','lizard']; 
	var needle = ['dog','lizard','flower','monkey','unicorn']; 
	var output = null;
	function needle_finder(haystack_array, needle_array){
		var output = [];
		for (var i = 0; i < haystack_array.length; i++ ){
			for (var j = 0; j < needle_array.length; j++){
				if (needle_array[j] == haystack_array[i]){
					console.log(needle_array[j] + ' = ' + haystack_array[i]);
					output.push(needle_array[j]);
				}
			}
		}
		return output;
	}

	/* DAILY CHALLENGE 002 */
	var first_array = [1, 3, 5];
	var needle_array = [1, 3, 5];
	output = null;
	function add_it(array_one, array_two){
		var output = [];
		for (var i = 0; i < array_one.length; i++){
			for (var j = 0; j < array_two.length; j++){
				if (i == j){
					output.push(array_one[i] + array_two[j]);
				}
			}
		}
		return output;
	}

	/* DAILY CHALLENGE 003*/
	var array1 = [ [1,2,3], [3,4,5], [6,7,8] ]; 
	var array2 = [ [1,2,3], [1,2,3], [1,2,3] ];
	var output = null;
	function matrix_add(array1, array2){
		var output = [];
		for (var array1_level1 = 0; array1_level1 < array1.length; array1_level1++){
			for (var array2_level1 = 0; array2_level1 < array2.length; array2_level1++){
				if (array1_level1 == array2_level1){
					var temp_array = [];
					output.push(temp_array);
					for (var array1_level2 = 0; array1_level2 < array1[array1_level1].length; array1_level2++){
						for (var array2_level2 = 0; array2_level2 < array2[array2_level1].length; array2_level2++){
							if (array1_level2 == array2_level2){
								temp_array.push(array1[array1_level1][array1_level2] + array2[array2_level1][array2_level2]);
							}
						}
					}
				}
			}
		}
		return output;
	}
	/* DAILY CHALLENGE 004*/
	function find_factors(factor_number){
		var output = [];
		for (var i = 1; i <= factor_number; i++){
			if (factor_number % i == 0){
				output.push(i);
			}
		}
		return output;
	}

	/* DAILY CHALLENGE 005 */
	var input_array = 
	[
    {name: 'John', age:42, gender:'M'},
    {name: 'Jack', age:34, gender:'M'},
    {name: 'Michael',age:40, gender: 'M'},
    {name: 'Kendra',age:48, gender:'F'}
	]
		function sort_object_list_by_name(list_array){
			for (var i = 0; i < list_array.length-1; i++){
				if(list_array[i].name > list_array[i+1].name){
					var temp = list_array[i];
					list_array[i] = list_array[i+1];
					list_array[i+1] = temp;
				}
			}
			return list_array;
		}

	/* DAILY CHALLENGE 006 */
	function dual_counter(a_number){
		for(var i = 0, j = a_number; i <= a_number, j >= 0; i++, j--){
			console.log(i);
			console.log(j);
		}
	}
	/* DAILY CHALLENGE 007 */
	var random_array = [1, 2, 3, 4, 5];
	function randomize_list(array){
		var output = [];
		for (var i = 0; i < array.length;) {
		var random = Math.floor(Math.random()*array.length);
		output.push(array[random]);
		array.splice(random, 1);
		}
		array = output;
		return array;
	}
	</script>