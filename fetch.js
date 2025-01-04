fetch('https://dummyjson.com/products/1', {})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))




fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        description: 'Iphone 19',
        price: '1000',
        rating: '9/10'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))



fetch('https://dummyjson.com/products/1', {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Iphone 19',
        description: ' changed to Iphone 19',
        price: '1000',
        rating: '9/10'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',

})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))



