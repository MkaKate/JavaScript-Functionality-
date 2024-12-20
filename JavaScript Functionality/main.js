// main.js

function sortBlogPosts(posts) {
    return posts.sort((a, b) => {
        // Порівнюємо заголовки в алфавітному порядку
        return a.title.localeCompare(b.title);
    });
}
