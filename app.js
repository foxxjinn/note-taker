const app = new Vue({
    el: '#app',
    data: {
        currentChapter: null,
        currentSubject: null,
        chapters: []
    },
    methods: {
        update:  function() {
            let input = document.getElementById('subject').value
            this.currentChapter = input
        }
    }
})
