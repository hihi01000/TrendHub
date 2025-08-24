// Page-specific content management

// Content data structure for each page
const pageContent = {
    finance: {
        featuredArticles: [
            {
                id: 1,
                title: "Investment Strategies for 2025",
                date: "2025-01-15",
                readTime: "5 min read",
                excerpt: "As we enter 2025, the investment landscape continues to evolve with new opportunities and challenges. From traditional markets to emerging technologies, here's what savvy investors need to know...",
                content: [
                    {
                        heading: "1. Diversification in Digital Assets",
                        text: "The cryptocurrency market has matured significantly, offering more stable investment opportunities. Consider allocating a small portion of your portfolio to digital assets while maintaining traditional investments."
                    },
                    {
                        heading: "2. Real Estate Investment Trusts (REITs)",
                        text: "With changing work patterns and urban development, REITs offer exposure to real estate without the hassle of direct property management."
                    },
                    {
                        heading: "3. Sustainable Investing",
                        text: "ESG (Environmental, Social, Governance) investing continues to gain momentum, with many funds outperforming traditional benchmarks."
                    }
                ]
            }
        ],
        articles: [
            {
                id: 2,
                title: "Fintech Revolution: What's Next?",
                date: "2025-01-12",
                readTime: "4 min read",
                excerpt: "Financial technology is transforming how we manage money, invest, and plan for the future. From AI-powered robo-advisors to blockchain-based solutions, the future of finance is here..."
            },
            {
                id: 3,
                title: "Building an Emergency Fund: A Complete Guide",
                date: "2025-01-10",
                readTime: "6 min read",
                excerpt: "An emergency fund is the foundation of financial security. Learn how to build and maintain a robust safety net that can weather any storm..."
            }
        ],
        trendingTopics: [
            "Cryptocurrency Regulations",
            "AI in Investment Management",
            "Green Bonds & Climate Finance",
            "Digital Banking Trends"
        ],
        resources: [
            { name: "Investopedia", url: "https://www.investopedia.com/" },
            { name: "Bloomberg", url: "https://www.bloomberg.com/" },
            { name: "CNBC", url: "https://www.cnbc.com/" },
            { name: "Financial Times", url: "https://www.financial-times.com/" }
        ]
    }
    // Add more page content here as needed
};

// Function to get current page content
function getCurrentPageContent() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');
    return pageContent[pageName] || null;
}

// Function to render page content
function renderPageContent() {
    const content = getCurrentPageContent();
    if (!content) return;

    // Render featured articles
    if (content.featuredArticles) {
        renderFeaturedArticles(content.featuredArticles);
    }

    // Render regular articles
    if (content.articles) {
        renderArticles(content.articles);
    }

    // Render sidebar widgets
    if (content.trendingTopics) {
        renderTrendingTopics(content.trendingTopics);
    }

    if (content.resources) {
        renderResources(content.resources);
    }
}

// Function to render featured articles
function renderFeaturedArticles(articles) {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    articles.forEach(article => {
        const articleElement = createArticleElement(article, true);
        mainContent.insertBefore(articleElement, mainContent.firstChild);
    });
}

// Function to render regular articles
function renderArticles(articles) {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    articles.forEach(article => {
        const articleElement = createArticleElement(article, false);
        mainContent.appendChild(articleElement);
    });
}

// Function to create article element
function createArticleElement(article, isFeatured) {
    const articleDiv = document.createElement('article');
    articleDiv.className = isFeatured ? 'featured-article' : 'article';
    articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <div class="article-meta">
            <span class="date">${formatDate(article.date)}</span>
            <span class="read-time">${article.readTime}</span>
        </div>
        <p>${article.excerpt}</p>
        ${article.content ? createArticleContent(article.content) : ''}
    `;
    return articleDiv;
}

// Function to create article content
function createArticleContent(content) {
    let html = '<div class="article-content">';
    content.forEach(item => {
        html += `
            <h3>${item.heading}</h3>
            <p>${item.text}</p>
        `;
    });
    html += '</div>';
    return html;
}

// Function to render trending topics
function renderTrendingTopics(topics) {
    const widget = document.querySelector('.trending-topics ul');
    if (!widget) return;

    widget.innerHTML = topics.map(topic => 
        `<li><a href="#">${topic}</a></li>`
    ).join('');
}

// Function to render resources
function renderResources(resources) {
    const widget = document.querySelector('.resources ul');
    if (!widget) return;

    widget.innerHTML = resources.map(resource => 
        `<li><a href="${resource.url}" target="_blank">${resource.name}</a></li>`
    ).join('');
}

// Function to add new article
function addNewArticle(articleData) {
    const content = getCurrentPageContent();
    if (!content) return;

    const newArticle = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        readTime: calculateReadTime(articleData.content),
        ...articleData
    };

    if (articleData.featured) {
        content.featuredArticles.unshift(newArticle);
    } else {
        content.articles.push(newArticle);
    }

    // Re-render the page
    location.reload();
}

// Function to update article
function updateArticle(articleId, updates) {
    const content = getCurrentPageContent();
    if (!content) return;

    // Search in featured articles
    let article = content.featuredArticles.find(a => a.id === articleId);
    if (article) {
        Object.assign(article, updates);
        return true;
    }

    // Search in regular articles
    article = content.articles.find(a => a.id === articleId);
    if (article) {
        Object.assign(article, updates);
        return true;
    }

    return false;
}

// Function to delete article
function deleteArticle(articleId) {
    const content = getCurrentPageContent();
    if (!content) return false;

    // Remove from featured articles
    const featuredIndex = content.featuredArticles.findIndex(a => a.id === articleId);
    if (featuredIndex > -1) {
        content.featuredArticles.splice(featuredIndex, 1);
        return true;
    }

    // Remove from regular articles
    const articleIndex = content.articles.findIndex(a => a.id === articleId);
    if (articleIndex > -1) {
        content.articles.splice(articleIndex, 1);
        return true;
    }

    return false;
}

// Export functions for external use
window.PageContent = {
    addNewArticle,
    updateArticle,
    deleteArticle,
    getCurrentPageContent
};

// Initialize page content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderPageContent();
    console.log('Page content loaded successfully');
});
