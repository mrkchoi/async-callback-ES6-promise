
///////////////////////////////////////////////////////////////////////////////////////////
// ES5 VERSION

// Example array post [this can be substituted for a file located in a different directory within our app, or from data being pulled from a server or external api]
let posts = [
    {
        title: 'Post 1',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, cum assumenda? Doloribus, eveniet. Totam exercitationem, recusandae harum repellat id nostrum expedita sit. Assumenda nam fuga quisquam reiciendis, fugit natus molestiae. Eveniet qui, temporibus, impedit consequatur fuga modi maxime iusto voluptatum soluta ipsa deserunt, beatae quaerat molestiae tenetur culpa aperiam doloribus!'
    },
    {
        title: 'Post 2',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, cum assumenda? Doloribus, eveniet. Totam exercitationem, recusandae harum repellat id nostrum expedita sit. Assumenda nam fuga quisquam reiciendis, fugit natus molestiae. Eveniet qui, temporibus, impedit consequatur fuga modi maxime iusto voluptatum soluta ipsa deserunt, beatae quaerat molestiae tenetur culpa aperiam doloribus!'
    }

];

// // Create a new post [with delay of 2000ms to mimic potential server delay]
// function createPost(post, callback) {
//     setTimeout(function() {
//         posts.push(post);
//         callback();
//     }, 2000);
    
// }

// // Display all posts [with shorter delay of 1000ms]. The issue we run into is the create post is executed after the post display function is run. Thus, the final post is not displayed on the DOM. To fix this issue, which may arise due to server latency issues, we can use either callback functions to ensure all posts are displayed, or the newer ES6 promise.
// function displayPosts() {
//     let output = '';

//     setTimeout(function() {
//         posts.forEach(function(post) {
//             output += `
//                 <ul>
//                     <li><h5>${post.title}</h5></li>
//                     <li><p>${post.content}</p></li>
//                 </ul>
//                 <br><br>
//             `;
//         });
//         document.querySelector('.container').innerHTML = output;
//     }, 1000);
    
// }



// createPost({
//     title: 'Post 3',
//     content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, cum assumenda? Doloribus, eveniet. Totam exercitationem, recusandae harum repellat id nostrum expedita sit. Assumenda nam fuga quisquam reiciendis, fugit natus molestiae. Eveniet qui, temporibus, impedit consequatur fuga modi maxime iusto voluptatum soluta ipsa deserunt, beatae quaerat molestiae tenetur culpa aperiam doloribus!'
// }, function() {
//     displayPosts();
// });

// displayPosts();




///////////////////////////////////////////////////////////////////////////////////////////

// ES6 PROMISE VERSION

// Create a new post [with delay of 2000ms to mimic potential server delay]
function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            // Mimicing a potential server error
            let error = false;

            if(!error) {
                resolve();
            } else {
                reject('There was an error! Please try again!');
            }
            
        }, 2000);
        

    });
    
    
}

// Display all posts [with shorter delay of 1000ms]. The issue we run into is the create post is executed after the post display function is run. Thus, the final post is not displayed on the DOM. To fix this issue, which may arise due to server latency issues, we can use either callback functions to ensure all posts are displayed, or the newer ES6 promise.
function displayPosts() {
    let output = '';

    setTimeout(function() {
        posts.forEach(function(post) {
            output += `
                <ul>
                    <li><h5>${post.title}</h5></li>
                    <li><p>${post.content}</p></li>
                </ul>
                <br><br>
            `;
        });
        document.querySelector('.container').innerHTML = output;
    }, 1000);
    
}



createPost({
    title: 'Post 3',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, cum assumenda? Doloribus, eveniet. Totam exercitationem, recusandae harum repellat id nostrum expedita sit. Assumenda nam fuga quisquam reiciendis, fugit natus molestiae. Eveniet qui, temporibus, impedit consequatur fuga modi maxime iusto voluptatum soluta ipsa deserunt, beatae quaerat molestiae tenetur culpa aperiam doloribus!'
}).then(displayPosts).catch(function(err) {
    console.log(err);
});


// displayPosts();


// ES6 PROMISE VERSION
// function createPost(post) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             posts.push(post);

//             const error = true;

//             if(!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong!');
//             }

//             // resolve();
//         }, 2000);
//     });
    
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({
//     title: 'Post Three', 
//     body: 'This is post three'
// }).then(getPosts).catch(function(err) {
//     console.log(err);
// });






























// ES5 VERSION
// let posts = [
//     {
//         title: 'Post One', 
//         body: 'This is post one'
//     },
//     {
//         title: 'Post Two', 
//         body: 'This is post two'
//     }
// ];

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({
//     title: 'Post Three', 
//     body: 'This is post three'
// });

// getPosts();


