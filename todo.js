
function addTask()
{
    let inputVal=document.getElementById("task").value;
    console.log(inputVal);

    let list=document.getElementById("list");
    let li=document.createElement("li");
    
    let Edit=document.createElement("button");
    Edit.innerText="Edit";
    Edit.style="margin:10px";

    let Delete=document.createElement("button");
    Delete.innerText="Delete";

    li.innerText=inputVal;
    li.appendChild(Edit);
    li.appendChild(Delete);

    list.append(li);

    Edit.onclick=()=>{
        li.innerHTML="";
        let input=document.createElement("input");
        let save=document.createElement("button");
        save.innerText="save";

        li.appendChild(input);
        li.appendChild(save);

        save.onclick=()=>{
            li.innerText=input.value;
            li.appendChild(Edit);
            li.appendChild(Delete);
        }
    }

    Delete.onclick=()=>{
        list.removeChild(li);
    }

    inputVal="";
}