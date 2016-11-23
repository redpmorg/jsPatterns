//normal patterns - fasterthan alternative1 and faster for lower number of conditions than alternative2
if(type === 'foo' || type === 'bar'){}

//alternative method1
if(/^(foo|bar)$/.test(type)){}

//alternative2 - object literal lookup (smaller if > 5)
if(({foo:1, bar:2})[type]){}

/* alternative method 5 - only using logical operators
 * Shorter way to use simple statements
 */
 var
 type = 'foo',
 type2 = 'bar',
 result = 0;

 type == 'foo' && result++;
 console.log(result); // 1
 !type == 'foo' || result++;
 console.log(result); // 2
 type == 'foo' && type2 == 'bar' && result++;
 console.log(result); //3
 type == 'foo' && type2 == 'bar' && result == 3 && (result=0); //parentheses avoid "invalid assignment left-hand side" error
 console.log(result); //0
 type == 'OOF' || result++; //equivalent: type != 'OOF' && result++;
 console.log(result); //1
