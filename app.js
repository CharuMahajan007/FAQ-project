//two ways 
/*using selectors or traversing dom*/ 

/*first method */

//using selectors inside the elements
// const questions = document.querySelectorAll(".question");

// questions.forEach(function(question){
//     const btn = question.querySelector(".question-btn");
//     btn.addEventListener("click",function(){
//         questions.forEach(function(item){
//             if(item !== question){
//                 item.classList.remove("show-text");
//             }
//         })
//         question.classList.toggle("show-text");
//     })
// })


/*second method */
//traversing dom
const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll(".question")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        var item = e.currentTarget.parentElement.parentElement;
        questions.forEach(function(question){
            if(question !== item){
                question.classList.remove("show-text");
            }
        })
        item.classList.toggle("show-text")
    })
})