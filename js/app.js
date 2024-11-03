let box = document.querySelector(".box")
let btn = document.querySelector(".numpage")

let ary = [
    {name:"jak" , fname: "jacson"},
    {name:"emimli" , fname: "gomez"},
    {name:"romea" , fname: "rabinson "},
    {name:"smitle" , fname: "sambolson"},
    {name:"mayki" , fname: "alex"},
    {name:"sara" , fname: "simal"},
    {name:"max" , fname: " shaw"},
    {name:"sina" , fname: " rabert"},
    {name:"mobina" , fname: "soift"},
    {name:"roz" , fname: " finch"},
    {name:"selena" , fname: " ris"},
    {name:"tailor" , fname: " jahani"},
    {name:"jeyk" , fname: " grooz"},
    {name:"samin" , fname: "stasi"},
    {name:"harolt" , fname: "samoel"},
    {name:"jan" , fname: "sofia"},
    {name:"rot" , fname: "martina"}
]

 
let ip
let newbtn
let ropage = 3
let numberpage = 1
let end
let start  

function funadd (newbox , arry , numpag , rowpage){
    end = numpag * rowpage
    start = end - rowpage
    newaryslice = arry.slice(start , end)
    newaryslice.forEach(function(ert){
        newdiv = document.createElement("div")
        newdiv.classList.add("ro")
        newdiv.innerHTML = ert.name +" "+ert.fname
        newbox.append(newdiv)
        
    })
 funbt()
}

function funbt(){
    numberpage = Math.ceil(ary.length/ropage)
    for(i=1 ; i<numberpage +1 ;i++){
        newbtn = document.createElement("div")
        newbtn.classList.add("page")
        newbtn.innerHTML = i
        btn.append(newbtn)
        newbtn.addEventListener("click",function(e){
          box.innerHTML = ''
          numpag = e.target.innerHTML
          end = numpag * ropage
          start = end - ropage
          newaryslice = ary.slice(start , end)
          newaryslice.forEach(function(ert){
              newdiv = document.createElement("div")
              newdiv.classList.add("ro")
              newdiv.innerHTML = ert.name +" "+ert.fname
              box.append(newdiv)
          })
        
    })
    
}

}

funadd(box , ary , numberpage , ropage )
