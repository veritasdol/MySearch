
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = function() {

        const phrase = document.querySelector('#text').value.replace(/ /ig, '+');
        const myHeaders = new Headers();
        const myRequest = new Request(`https://www.google.com/search?q=${phrase}`, {
            method: 'GET',
            headers: myHeaders,
            mode: 'no-cors',
            cache: 'default',
            query: 'codeforgeek'
          });

        fetch(myRequest)
        .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        
        // })
        // .catch(error => {
        //     console.log(`Error: ${error}`)
        // });
        return false
    }

    
});
