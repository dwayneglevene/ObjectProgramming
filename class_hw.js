var library = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},

  {author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },

  {author: 'Suzanne Collins', title:  'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
  
for(i = 0; i < library.length; i ++){
  if(library[i].readingStatus == true){document.write("already read " + library[i].title + " by " + library[i].author +  "<br>")}
  else{document.write("You still need to read " + library[i].title + " by " + library[i].author+  "<br>")}
}