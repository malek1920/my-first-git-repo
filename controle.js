/*//json object 
var obj={
    "firstname":"foulen",
    "lastname":"ben foulen",
    "age":52,
    

}

console.log(obj.age);
console.log(obj["age"]);



var users=['mouna','hadil','yassmine','amine','maram']
console.log(users[2])
users.push('malek')
users.splice(3,1)
console.log(users)*/
var users=['mouna','hadil','yassmine','amine','maram']
document.write("<ul>")
for(var user of users){
    document.write("<li>",user,"</li>")
}
document.write("</ul>")
/*----------------------*/
for(var i=0;i<5;i=i+1)
{console.log(i)
} 
console.log("finally:",i);


