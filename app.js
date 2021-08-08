const app = Vue.createApp({
    //data is going to be a function that returns an object, != data:
    data() {
        return {
            firstName:'John',
            lastName: 'Doe',
            email: 'John@gamil.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/lego/5.jpg'
        }
    },

    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            //able to acess any data above with this keyword
            //notice syntax changes associated with this keyword
            this.firstName = results[0].name.first
            this.lastName =  results[0].name.last
            this.email =  results[0].email
            this.gender =  results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

//mount the app to div in html
app.mount('#app')
