const name="rock" //Const cant be modified
let age=22 
var stay="any ware" 
ok="ok"
let state;

//To print multiple console use console.table.
 /* 
 Prefer not to Use var
 Because of issue in block scope and functional scope
 */
age=33;
stay="home"
ok="nok"

console.table([age,stay,ok,state]);