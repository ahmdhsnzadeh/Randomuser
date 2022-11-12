const url = 'https://randomuser.me/api/?results=100'

const parent = document.getElementById('card-cont')
parent.innerHTML = ''

function fetchFunc(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let count = 8
        document.querySelector('.loadmore').addEventListener('click', function() {
            count = count + 8
            parent.innerHTML = ''
            data.results.slice(0, count).forEach((val) => {
                let myCard = new Card(val.name.first, val.name.last, val.dob.age, val.email, val.picture.large)
                parent.appendChild(myCard.create())
            })
        })
        // document.querySelector('.less').addEventListener('click', function() {
        //     count = count - 8
        //     parent.innerHTML = ''
        //     data.results.slice(0, count).forEach((val) => {
        //         let myCard = new Card(val.name.first, val.name.last, val.dob.age, val.email, val.picture.large)
        //         parent.appendChild(myCard.create())
        //     })
        // })
        data.results.slice(0, 8).forEach((val) => {
            let myCard = new Card(val.name.first, val.name.last, val.dob.age, val.email, val.picture.large)
            parent.appendChild(myCard.create())
        })
    }
    )
}
fetchFunc()

class Card {
    constructor(first, last, age, email, image) {
        this.first = first
        this.last = last
        this.age = age
        this.email = email
        this.image = image
    }
    create() {
        let div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
            <figure class="photo"><img src="${this.image}" alt=""></figure>
            <div class="person">
                <h1 class="name">${this.first} ${this.last}</h1>
                <h2 class="age">${this.age}</h2>
                <h3 class="email">${this.email}</h3>
                <p class="about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, sint!</p>
            </div>
        `
        // inserting datas here
        return div
    }
}