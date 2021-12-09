var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

app.message = 'I have changed the message';

var app2 = new Vue({
  el: '#app-2',
  data: {
    //app.message = 'type message here' will change message in console
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    //app.seen = false in console will do the magic
    seen: true,
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      //app4.todos.push({ text: 'New Item' }) in console
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})


//Updating the state in our app without touch the DOM. Dom manipulations are handled by Vue, and the code you write is focused on the underlying logic
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

//Two way binding between form input and app state is easier
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})


//Creating a component with pre-defined options that accepts a prop
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue ({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Poop' }
    ]
  }
})

