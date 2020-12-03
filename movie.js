var movies = [
    {
        title: 'Movie A',
        description: 'Movie A description'
    },
    {
        title: 'Movie B',
        description: 'Movie B description'
    },
    {
        title: 'Movie B',
        description: 'Movie B description'
    },
    {
        title: 'Movie A',
        description: 'Movie A description'
    },
    {
        title: 'Movie A',
        description: 'Movie A description'
    }
];
   function listmovies(array) {
       // Creat the list element :
       var list = document.getElementById("list_movies");

       for(var i=0; i< array.length; i++) {
           // Creat the list item :
           var li = document.createElement('li');
           var h4 = document.createElement('h4');
           var p = document.createElement('p');

           console.log(array[i])
           //Set its contents :
           h4.appendChild(document.createTextNode(array[i].title));
           p.appendChild(document.createTextNode(array[i].description));

           //Add it to the list
           li.appendChild(h4);
           li.appendChild(p);

           list.appendChild(li);
       }

       //Finally, return the constructure list;
       // return list;
   }
   //Add the contents of option[0] :
  listmovies(movies);
//Hiển thị list text video bằng cách lập trình javascript
//Có thời gian thêm thì đính kèm video youtube rồi