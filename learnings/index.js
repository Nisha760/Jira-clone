// var a1 = document.querySelector(".bt-1")
// console.log(a1)
// var a2 = document.querySelector(".bt-2")
// console.log(a2)

for(var i = 0; i < 5; i++)
{
    console.log(i) ;
}

function fun(){
    console.log("hello fun") ;
}

function isRec(name, fun)
{
    console.log(name)
    for(var i = 0; i < 5; i++)
    {
        fun() ;
    }
}

isRec("Nisha", fun)