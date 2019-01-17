(() => {
    // creat a component first
    // const UserComponent = {
    //     props: ['name', 'role'],

    //     template: "#userstemplate",

    //     created: function(){
    //         console.log("I'm aliveeee");
    //     },

    //     methods: {
    //         logFromChild() {
    //             console.log("logged from the component");
    //         },

    //         passEvent() {
    //             this.$emit('shoutup');
    //         }
    //     }
    // };

    const HomePageComponent = {
        template: "<h2>This is the home page</h2>"
    }
    const UsersPageComponent = {
        template: "<h2>This is the users page</h2>"
    }
    const ContactPageComponent = {
        template: "<h2>This is the contact page</h2>"
    }

    // routes are the path you're taking through the app
    // www.google.ca is a route; ists the route to the home page
    // www.sumpinsumpin/contact is the route to the contact page, etc
    // each route gets mapped to a component that you define
    // and that component gets rendered in the <router-view> element
    const routes = [
        { path: '/home', name:'home', component: HomePageComponent },
        { path: '/contact', name: 'contact', component: ContactPageComponent },
        { path: '/users', name: 'users', component: UsersPageComponent }

    ]

    const router = new VueRouter({
        routes
    });

    //then your vue instance
    const vm = new Vue({
        el: "#app",

        data: {
            testmessage: "sup"
        },

        methods: {
            calledOnParent() {
                console.log("This method lives in the main VM and was called from a component");
            }
        },

        created: function(){
            console.log("this is the main vue instance");
        },

        components: {
            // 'activeusers' : UserComponent,
            'homepagecomponent' : HomePageComponent,
            'userscomponent' : UsersPageComponent
        },

        router: router
            });

})();