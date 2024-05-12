const newPost = (post,addDate =Date()) => ({
 ...post,addDate
})//avec les trois point pour la function en creant objet on met les parenthese 
//mais on peut supprimmer les parenthese comme 
//une fonction normale mais pour cela 
//on enleve les trois points 

const newPostTwo = (post, addDate = Date()) => {
  return post,addDate
}//ici on retire  les troit point et les  parenthese et  on ajoute retourne