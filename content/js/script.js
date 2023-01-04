
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = function() {

        const phrase = document.querySelector('#text').value.replace(/ /ig, '+');
        const myHeaders = new Headers();
        const apikey = 'AIzaSyARQNOjkqYiKVR3D1HgOLXMX03sjc7kp4o'
        const cx = 'e76915b462b7741f3'
        const myRequest = new Request(`https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${cx}&q=${phrase}`, {
            method: 'GET',
            headers: myHeaders,
            // mode: 'no-cors',
            cache: 'default',
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
