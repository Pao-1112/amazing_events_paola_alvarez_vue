const { createApp } = Vue
const url = "https://mindhub-xj03.onrender.com/api/amazing"

createApp({
  data(){
    return {
      arrayEvents: [],
      detailCard: [],
      id:undefined
    }
  },
  created(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.arrayEvents = data.events
      console.log(this.arrayEvents)

      const id = new URLSearchParams(location.search).get("id");
      this.detailCard = this.arrayEvents.find(event => event._id == id)
      console.log(this.id)
      console.log(this.detailCard)
    })
    .catch(error => console.log(error))
  }
}).mount("#app")
