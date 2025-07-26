 async function fetchingData() {
     const config = {
         headers: {
            Accept:"application/json"
        }
     }
     try {
         const {data} = await axios.get("https://6839a7c56561b8d882b133d4.mockapi.io/api/v1/persons", config);
         return data;
     } catch (error) {
        console.log(error.message);
        
     }
}
async function changeData() {
    const newDate = {
        name: "nastaran",
        emailaddress: "nastaran@gmail.com",
        password: "jslisiiw939930"
    };
    try {
        const respone=await axios.put("https://6839a7c56561b8d882b133d4.mockapi.io/api/v1/persons/53",newDate)
    } catch (error) {
        console.log(error.message);
        
    }
}
changeData()

const wrapper = document.createElement("div");
document.body.append(wrapper);
wrapper.classList.add("container", "d-flex", "flex-wrap");

class Users {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    user() {
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
}

const h5 = document.querySelector("h5");
const h6 = document.querySelector("h6");
const h4 = document.querySelector("h4");
const p = document.querySelector("p");

async function runData() {
    try {
        const res = await fetchingData();
        // console.log(res);
        res.forEach(element => {
        const users = new Users(element.id, element.name, element.emailaddress, element.password);
        users.user(); 
        });

    
    } catch (error) {
        console.log(error.message);
        
    }

}
runData()
