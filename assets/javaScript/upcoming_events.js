const { createApp } = Vue
const url = 'https://mindhub-xj03.onrender.com/api/amazing'

createApp({
  data(){
    return {
      arrayEvents: [],
      arrayCategories: [],
      filterSelected: [],
      arrayDate: [],
      textInsert:'',
      checked: []
    }
  },
  created(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.arrayEvents = data.events
      console.log(this.arrayEvents)
      this.arrayDate = this.arrayEvents.filter(event => event.date > data.currentDate)
      console.log(this.arrayDate)
      this.filterSelected = this.arrayDate
      this.arrayCategories = [...new Set(this.arrayEvents.map(events => events.category))]
      console.log(arrayCategories)
      })
      
    .catch(error => console.log(error))
  },
  methods:{
    filter(){
      this.filterSelected =this.arrayDate.filter(events =>
        (this.checked.includes(events.category) || this.checked.length === 0) 
        && (events.name.toLowerCase().includes(this.textInsert.toLowerCase())))
    }
  }
}).mount("#app")