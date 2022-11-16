function setErrorFor(el, mes){
    const span = el.querySelector("span")
    span.innerText=mes
    el.classList.add("active-error")
}
function indexValid(idx,err){
    if (idx.length == 0){
        setErrorFor(err,"Index can't be empty")
    }else if (isNaN(idx)){
        setErrorFor(err,"Index must be a number")
    }else if (idx >= linkedlist.length || idx < 0){
        setErrorFor(err,"Index must be a positive number lower than linked list size")
    }else{
        err.classList.remove("active-error")
    }
}

function dataValid(dat,err){
    if (dat.length == 0){
        setErrorFor(err,"Data can't be empty")
    } else if (isNaN(dat)){
        setErrorFor(err,"Data must be a number")
    }else{
        err.classList.remove("active-error")
    }
}

function addFormValid(dat, err){
    dataValid(dat,err);
    return  !err.classList.contains("active-error")
}

function removeFormValid(idx, err){
    indexValid(idx,err);
    return  !err.classList.contains("active-error")
}