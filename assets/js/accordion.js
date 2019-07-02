const accordionItems = document.querySelectorAll('.accordion')
let accordionTriggers = document.querySelectorAll('.accordion-trigger')
let activeAccordions = document.querySelectorAll('.accordion.active')

accordionInit(window.location.search.replace('?acc=', ''))

for(let i = 0; i < accordionTriggers.length; i++){
    let currentAccordion = accordionTriggers[i].dataset.acc
    accordionTriggers[i].addEventListener('click', function(){
        console.log(currentAccordion)
        setUrlParams(`?acc=${currentAccordion}`)
        setAccordion(currentAccordion)
    })
}

function setAccordion(accordionID){
    let el = document.getElementById(accordionID)
    console.log(el)
    if(el){
        if(el.classList.contains('active')){
            el.classList.remove('active')
            setUrlParams('');
        } else {
            resetAccordion();
            // el.scrollIntoView();
            el.classList.add('active')    
        }
    }
}

function resetAccordion(){
    for(let i = 0; i < accordionItems.length; i++){
        accordionItems[i].classList.remove("active");
    }
}

function setUrlParams(value){
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `${value}`;
        window.history.pushState({path:newurl},'',newurl);
    }
}

function accordionInit(id){
    let el = document.getElementById(id)
    if(el){
        el.scrollIntoView()
        setAccordion(id)
    }
}