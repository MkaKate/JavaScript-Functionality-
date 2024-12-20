"use strict";

// main.js
function sortBlogPosts(posts) {
  return posts.sort(function (a, b) {
    // Порівнюємо заголовки в алфавітному порядку
    return a.title.localeCompare(b.title);
  });
}
//# sourceMappingURL=main.dev.js.map
