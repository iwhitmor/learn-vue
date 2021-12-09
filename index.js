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


