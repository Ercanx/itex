
let filter = document.getElementById('searchInNav');
filter.addEventListener("keyup",ara);
function ara(e){
    const inputValue = e.target.value.toLowerCase();
    console.log(inputValue)
    const ulList = document.querySelectorAll(".elemanlar");
    console.log(ulList)
    ulList.forEach(function(i){
        const data = i.textContent.toLowerCase();
        if(data.indexOf(inputValue) === -1){

            console.log("yok")
            i.setAttribute("style","display:block !important")
        }
        else{
            i.setAttribute("style","display:none")
        }
    });
}

