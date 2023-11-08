fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res => res.json())
.then(data => category(data.data.news_category))

function category (data){
    
    data.forEach(category => {
        // console.log(category.category_id);
        
        const categoryName = category.category_name;
        // const categoryId = category.category_id;
        
        const categoryField = document.getElementById('categories');
        
        const a = document.createElement('a');
        a.innerHTML = `<a onclick="getCatgoryId('${(category.category_id)}')" class="nav-link text-white fs-5" href="#">${categoryName}</a>`;
        
        categoryField.appendChild(a);
        
    });
}
// get category id & publish news
function getCatgoryId(categoryId) {
    const dataUrl = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    fetch (dataUrl)
    .then(res => res.json())
    .then(ids => newsData(ids.data))  
    
}

function newsData(newsData){
    newsData.forEach(news => {
        console.log(news);

        const thumbCardField = document.getElementById('news-thumb');

        const div = document.createElement('div');
        div.innerHTML = `<div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">${(news.details).slice(0, 200)}...</p>
              <p><img src="${news.author.img}" class="author-image" alt="..."></p>
              <div><p class="card-text"><small>${news.author.
                name}</small></p>
                <p><small>${news.author.published_date}</p>
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-arrow-right" style="color: #2159ba;"></i>
                </div>
                </div>            
                </div>
                </div>
                </div>`

      thumbCardField.appendChild(div);


    })
}

