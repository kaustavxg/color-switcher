let button = document.querySelectorAll('.button');
const body = document.querySelector("body");

button.forEach(function(button){
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        
        // switch(e.target.id){
        //     case "red" :
        //         body.style.backgroundColor = e.target.id;
        //         break;
        //     case "blue" :
        //         body.style.backgroundColor = e.target.id;
        //         break;
        //     case "grey" :
        //         body.style.backgroundColor = e.target.id;
        //         break;
        //     case "yellow" :
        //         body.style.backgroundColor = e.target.id;
        //         break;
        //     case "purple" :
        //         body.style.backgroundColor = e.target.id;
        //         break;
        //     case "green" :
        //         body.style.backgroundColor = e.target.id;
        //         break;
        // }
            
        
        // approach 2
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
    })
})