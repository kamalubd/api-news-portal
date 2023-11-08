fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res => res.json())
.then(data => category(data.data.news_category))

function category (data){

    data.forEach(category => {

        const categoryName = category.category_name;

        const categoryField = document.getElementById('categories');

        const a = document.createElement('a');
        a.innerHTML = `<a class="nav-link text-white fs-5" href="#">${categoryName}</a>`;

        categoryField.appendChild(a);
        
    });
}