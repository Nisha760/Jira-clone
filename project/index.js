var plsBtn = document.querySelector(".plus");
var crossBtn = document.querySelector(".cross");
var closeBtnArr = document.querySelectorAll(".icon.color-3");
var minimizeIcons = document.querySelectorAll(".icon.color-1")

var classN ;

function plusBtnClick() {
    console.log("clicked")
    document.getElementById("dialog").style.display = "flex"
}

function closeDialog() {
    console.log("clicked")
    document.getElementById("dialog").style.display = "none"
}

function displayColorPalette()
{
    document.querySelector(".color-palette").style.display = "flex"

    var colorArr = document.querySelectorAll(".color-box main>div")
    


    for(let i = 0; i < colorArr.length; i++)
    {
        colorArr[i].addEventListener("click", addColor)
        
    }

    
    
}



function addColor(e)
{
    var currentClass =  e.currentTarget.className
   const ticketMainArr = document.querySelectorAll(".wrapper .main .box main textarea")
   console.log(ticketMainArr)
   const lastTicket = ticketMainArr[ticketMainArr.length - 1]
   console.log(lastTicket)
   console.log(currentClass)

   lastTicket.classList.add(`${currentClass}`) ;

    // lastTicket.innerHTML = `
    //                         <textarea name="" id="" cols="42" rows="12" class="${currentClass}"></textarea>    
    //                         `

    console.log(lastTicket.innerHTML)

    document.querySelector(".color-palette").style.display = "none" ;
  


}



plsBtn.addEventListener("click", plusBtnClick);

crossBtn.addEventListener("click", closeDialog);




function addTicket() {
    closeDialog();
    var boxes = document.querySelector(".wrapper .main");
    var oldhtml = boxes.innerHTML;
    var boxContent = document.querySelector("#box-content");
    var title = document.querySelector("#title");

    boxes.innerHTML = oldhtml + `
                                <div class="box">
                                    <header>
                                        <div class="box-heading">
                                            ${title.value}
                                        </div>
                                        <div class="icon color-1">-</div>
                                        <div class="icon color-2">E</div>
                                        <div class="icon color-3">x</div>
                                        
                                    </header>
                                    <main><textarea name="" id="" cols="42" rows="12">${boxContent.value}</textarea></main>
                                </div>
                                `



    title.value = ""
    boxContent.value = ""
    addDelTktLogic()

    displayColorPalette()
}

function addDelTktLogic()
{
    var closeBtnArr = document.querySelectorAll(".icon.color-3");
    var minimizeIcons = document.querySelectorAll(".icon.color-1")

    function closeTicket(e) {
        var box = e.target.closest(".box");
        console.log(box)
        box.style.display = "none"
    }

    function minimize(e)
    {
        var box = e.target.closest(".box") ;
        console.log(box)

        if(box.querySelector("main").style.display !== "none"){
            box.querySelector("main").style.display = "none"
        } else{
            box.querySelector("main").style.display = "flex"
        }
    }

    for (let i = 0; i < closeBtnArr.length; i++) {
        const closeBtn = closeBtnArr[i];
        closeBtn.addEventListener("click", closeTicket)
    }
    
    
    for(let i = 0; i < minimizeIcons.length; i++)
    {
        const minimizeBtn = minimizeIcons[i] ;
        minimizeBtn.addEventListener("click", minimize)
    }
}






