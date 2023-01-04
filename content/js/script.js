document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {

        const phrase = document.querySelector('#text').value.replace(/ /ig, '+');
        const myHeaders = new Headers();
        const apikey = 'AIzaSyARQNOjkqYiKVR3D1HgOLXMX03sjc7kp4o'
        const cx = 'e76915b462b7741f3'
        const myRequest = new Request(`https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${cx}&q=${phrase}`);
        document.querySelector('ol').innerHTML = ''
        fetch(myRequest)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const items = data.items
            items.forEach(item => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-start'
                const div = document.createElement('div');
                div.className = 'ms-2 me-auto';
                const divInner = document.createElement('div');
                divInner.className = 'fw-bold';
                const rsLink = document.createElement('a');
                rsLink.href = item.link;
                rsLink.innerHTML = item.htmlTitle;
                divInner.append(rsLink);
                const snippet = document.createElement('p');
                snippet.innerHTML = item.htmlSnippet;
                div.append(divInner, snippet);
                li.append(div);
                document.querySelector('.list-group').append(li);
            })
            
            }) 
        .catch(error => {
            console.log(`Error: ${error}`)
        });
        return false
    }


});
