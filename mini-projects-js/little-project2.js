async function fetchingData() {
    try {
        const respone = await fetch("https://6839a7c56561b8d882b133d4.mockapi.io/api/v1/persons");
        const data = await respone.json();
        return data;
    } catch (error) {
        console.log(error.message);
        
    }
}

const wrapper = document.createElement("div");
document.body.append(wrapper);
wrapper.classList.add("container", "d-flex", "flex-wrap");

function Users(id,name,emailaddress,password) {
    this.id = id;
    this.name = name;
    this.emailaddress = emailaddress;
    this.password = password;
}
Users.prototype.user = function () {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card","m-3");
        cardDiv.style.width = "18rem";
        wrapper.append(cardDiv)
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardDiv.append(cardBody);
        const h5 = document.createElement("h5");
        h5.textContent = this.id;
        const h6 = document.createElement("h6");
        h6.textContent = this.email;
        const h4 = document.createElement("h4");
        h4.textContent = this.name;
        const p = document.createElement("p");
        p.textContent = this.password;
        cardBody.append(h4, h5, h6, p);
        return cardDiv;
}

async function runData() {
    try {
        const res = await fetchingData();
        res.forEach(element => {
            const users = new Users(element.id, element.name, element.emailaddress, element.password);
        users.user();

        });
    } catch (error) {
        console.log(error.message);
        
    }
}
runData()