window.onload = function(){
let svg= document.getElementsByTagName('svg')
for(let i=0; i< svg.length; i++){
    svg[i].remove()
    svg[i].remove()
    svg[i].remove()
    svg[i].remove()
    svg[i].remove()
    svg[i].remove()
    svg[i].remove()
    svg[i].remove()
    svg[i].remove()
    svg[i].remove()
}
console.log(svg);

}

const load = function () {
  fetch("http://www.splashbase.co/api/v1/images/search?query=cat")
    .then((response) => response.json())
    .then((jsondata) => {
        console.log('what is it',jsondata)
      let images = jsondata.images
      console.log('and this', jsondata.images);
          for (let i=0; i< images.length; i++){
      let singlImg = images[i];
      console.log(images[0]);
      let oneImg = document.createElement("img");
      oneImg.src = singlImg.url;
      oneImg.classList.add('img-fluid')
      let parent = document.querySelectorAll('.card')
      console.log('parent', parent );
    //   for(let u= 0; u< parent.length ; u++){}
      parent.forEach(el => el.appendChild(oneImg)) 
      
       }
    });
};

// http://www.splashbase.co/api/v1/images/search?query=your
