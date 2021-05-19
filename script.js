


const renderImg = (data) => {
    const parent = document.querySelector('.album .row')
    parent.innerHTML=''
    data.forEach(el => { 
        const card = ` <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src = '${el.large_url}' class='img-fluid'>
        
        <div class="card-body">
        
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
              View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
                </div>
                <small class="text-muted">${el.id}</small>
                </div>
                </div>
                </div>
                </div>`
                parent.innerHTML += card
            });
        }
        
        const searchImages = (query) => {
            fetch(`http://www.splashbase.co/api/v1/images/search?query=${query}`)
            .then(response => response.json()).then((data) => {
                 renderImg(data.images)
            }).catch((err) => console.log(err))
        }
        
        
        
        
        window.onload = () =>{
    const primaryBtn = document.getElementById('primary')
    const secondaryBtn = document.getElementById('secondary')
    primaryBtn.addEventListener('click', ()=>searchImages('car'))
}







// window.onload = function(){
//     let svg = document.querySelectorAll('svg')
//     for(let i=0; i< svg.length; i++){
//         svg[i].remove()
//     }
 
//     let parent = document.querySelectorAll('div>.card')
//     console.log(parent);
//     for(let j=0; j<parent.length; j++){
//         let img = document.createElement('img')
//         img.setAttribute('src',"https://picsum.photos/200")
//         parent[j].appendChild(img)
//     }
// }

// const load = function(){
//     fetch('http://www.splashbase.co/api/v1/images/search?query=cats').then((response) => response.json())
//    .then((jsondata) => { console.log('data', jsondata)
// let images = jsondata.images
// console.log('images', images.length)
// for(let i=0; i< images.length; i++){
    
// }

// })
// }
// load()

// window.onload = function(){
// let svg= document.querySelectorAll('svg')
// for(let i=0; i< svg.length; i++){
//     svg[i].remove()
// }}
// console.log(svg);


// const load = function () {
//   fetch("http://www.splashbase.co/api/v1/images/search?query=cat")
//     .then((response) => response.json())
//     .then((jsondata) => {
//         console.log('what is it',jsondata)
//       let images = jsondata.images
//       console.log('and this', jsondata.images);
//       let parent = document.querySelectorAll('.card')
//       for (let i=0; i< images.length; i++){
//           let singlImg = images[i];
//           console.log(images);
//           let oneImg = document.createElement("img");
//           oneImg.src = singlImg.url;
//           oneImg.classList.add('img-fluid')
//             parent[i].appendChild(oneImg)
//             console.log('parent', parent );
//       //   parent.forEach(el => el.appendChild(oneImg)) 
      
//     }
//     // for(let u= 1; u< parent.length ; u++){
//     //     parent[u].appendChild(oneImg)
//     // }
// }).catch(err => {
//     console.error(err)

// })}
