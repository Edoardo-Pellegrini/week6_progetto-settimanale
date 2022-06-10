
fetch("../users.json").then(function(resp){
  return resp.json();

}) 
.then(function(data){
  console.log(data[0])
  console.log(data[1]);
  creazione_cards(data) 
})



function creazione_cards(data){
    data.forEach(ele => {
        let container = document.querySelector('.container')
        let cardGroup = document.createElement('div')
        cardGroup.className = ('card-group')
        let div = document.createElement('div')
        div.className = ('card border border-secondary')
        div.style = ('widht: 18rem')
        div.innerHTML = '<img src="' + ele.profileURL + '" class="card-img-top" alt="fotoprofilo"></img><div class="card-body border border-secondary"><h5 class="card-title">'+ ele.firstName + ' ' + ele.lastName + '</h5><p class="card-text">Gender: ' + ele.gender + '</p><p class="card-text">Hi,I am '+ele.username+', view my profile!</p> <a  class="btn btn-primary" onclick="mostra()">View profile</a></div>'
                        
                        
                        
                       
        cardGroup.appendChild(div)             
        container.appendChild(cardGroup)
        
        /* <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div> */
        
    });
}

