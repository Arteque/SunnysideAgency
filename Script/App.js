// Add Testimonials to the DOM from the json file
const testimonialDOMContainer = document.querySelector("#testimonials-section .contents")

function testimonialsTemplate(item){
    return `
    <!--${item.name}-->
        <div class="col">
            <img src="${item.src}" alt="${item.name} ${item.position}">
            <p>
                ${item.text.trim()}
            </p>
            <h3>
                <span class="main">
                    ${item.name}
                </span>
                <span class="sub">
                    ${item.position}
                </span>
            </h3>
        </div>
    `
}
async function fetchTestimonials(){
     const getData = await fetch("../data/Testimonials.json")
     const data = await getData.json()
     return data
    
}
fetchTestimonials()
.then((data) => {
      testimonialDOMContainer.innerHTML = data.map(testimonialsTemplate).join("")  
})

