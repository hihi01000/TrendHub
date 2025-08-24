// Topic data structure
const topics = [
    {
        id: 1,
        category: 'finance',
        title: 'Personal Finance & Investing',
        description: 'Investment strategies for stocks, real estate, cryptocurrency, and fintech information',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">Asset+</div>`,
        link: 'https://www.investopedia.com/'
    },
    {
        id: 2,
        category: 'health',
        title: 'Health & Fitness',
        description: 'Workout routines, nutrition information, and wellness lifestyle tips',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px; color: white;">HEALTH</div>`,
        link: 'https://www.healthline.com/'
    },
    {
        id: 3,
        category: 'tech',
        title: 'Tech & Gadget Reviews',
        description: 'Latest smartphone, laptop, and wearable device reviews',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">TECH</div>`,
        link: 'https://www.theverge.com/'
    },
    {
        id: 4,
        category: 'entertainment',
        title: 'Movies & OTT',
        description: 'Latest movie reviews, streaming recommendations, and entertainment news',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px; color: white;">MOVIE</div>`,
        link: 'https://www.imdb.com/'
    },
    {
        id: 5,
        category: 'diy',
        title: 'DIY & Home Decor',
        description: 'Home decoration ideas and DIY project guides',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">DIY</div>`,
        link: 'https://www.houzz.com/'
    },
    {
        id: 6,
        category: 'sustainable',
        title: 'Sustainable Living',
        description: 'Eco-friendly lifestyle, zero-waste, and sustainable living tips',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">ECO</div>`,
        link: 'https://www.treehugger.com/'
    },
    {
        id: 7,
        category: 'pets',
        title: 'Pet Care',
        description: 'Dog and cat health care, training methods, and nutrition information',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">PET</div>`,
        link: 'https://www.akc.org/'
    },
    {
        id: 8,
        category: 'food',
        title: 'Food & Recipes',
        description: 'Delicious recipes from around the world and healthy meal plans',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">FOOD</div>`,
        link: 'https://www.allrecipes.com/'
    },
    {
        id: 9,
        category: 'productivity',
        title: 'Self-Improvement & Productivity',
        description: 'Habit formation, time management, and goal achievement strategies',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">Growth</div>`,
        link: 'https://www.timemanagement.com/'
    },
    {
        id: 10,
        category: 'travel',
        title: 'Themed Travel Guides',
        description: 'Food tours, cultural trips, adventure travel, and unique travel experiences',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 11px; color: white;">TRAVEL</div>`,
        link: 'https://www.lonelyplanet.com/'
    },
    {
        id: 11,
        category: 'games',
        title: 'Gaming & Esports',
        description: 'Latest game reviews, esports news, and gaming culture insights',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">GAME</div>`,
        link: 'https://www.ign.com/'
    },
    {
        id: 12,
        category: 'education',
        title: 'Education & Learning',
        description: 'Online courses, study tips, and lifelong learning resources',
        icon: `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; color: white;">EDU</div>`,
        link: 'https://www.coursera.org/'
    }
];

// Function to create topic card HTML
function createTopicCard(topic) {
    return `
        <div class="topic-card" data-category="${topic.category}" data-id="${topic.id}">
            <div class="topic-icon">
                ${topic.icon}
            </div>
            <h3 class="topic-title">${topic.title}</h3>
            <p class="topic-description">${topic.description}</p>
            <div class="topic-link">Learn More →</div>
        </div>
    `;
}

// Function to render topics
function renderTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    if (topicsGrid) {
        topicsGrid.innerHTML = topics.map(topic => createTopicCard(topic)).join('');
    }
}

// Function to add new topic dynamically
function addNewTopic(newTopic) {
    topics.push(newTopic);
    renderTopics();
    console.log('New topic added:', newTopic.title);
}

// Function to remove topic by ID
function removeTopic(topicId) {
    const index = topics.findIndex(topic => topic.id === topicId);
    if (index > -1) {
        topics.splice(index, 1);
        renderTopics();
        console.log('Topic removed:', topicId);
    }
}

// Function to update topic
function updateTopic(topicId, updates) {
    const topic = topics.find(topic => topic.id === topicId);
    if (topic) {
        Object.assign(topic, updates);
        renderTopics();
        console.log('Topic updated:', topic.title);
    }
}

// Function to get trending topics (placeholder for future API integration)
function getTrendingTopics() {
    // This function can be expanded to fetch trending topics from an API
    return topics.slice(0, 5); // Return first 5 topics as trending
}

// Function to handle topic card clicks
function handleTopicClick(topicId) {
    const topic = topics.find(topic => topic.id === topicId);
    if (topic) {
        console.log('Topic clicked:', topic.title);
        // Navigate to the topic page
        const pageMap = {
            'finance': 'pages/finance.html',
            'health': 'pages/health.html',
            'tech': 'pages/tech.html',
            'entertainment': 'pages/entertainment.html',
            'diy': 'pages/diy.html',
            'sustainable': 'pages/sustainable.html',
            'pets': 'pages/pets.html',
            'food': 'pages/food.html',
            'productivity': 'pages/productivity.html',
            'travel': 'pages/travel.html',
            'games': 'pages/games.html',
            'education': 'pages/education.html'
        };
        
        const pageUrl = pageMap[topic.category];
        if (pageUrl) {
            window.open(pageUrl, '_blank');
        } else {
            console.warn('No page found for category:', topic.category);
        }
    }
}

// Function to add event listeners to topic cards
function addTopicEventListeners() {
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            const topicId = parseInt(this.dataset.id);
            handleTopicClick(topicId);
        });
    });
}

// Function to handle button clicks (simplified)
function handleButtonClicks() {
    // This function is now simplified since we removed most buttons
    console.log('Button handlers initialized');
}

// Function to initialize the application
function initApp() {
    console.log('Trend Hub application initializing...');
    
    // Render topics
    renderTopics();
    
    // Add event listeners
    handleButtonClicks();
    addTopicEventListeners();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('Trend Hub application initialized successfully!');
}

// Function to simulate daily content updates (for future content management)
function addDailyTrendingTopic() {
    const today = new Date();
    const newTopic = {
        id: topics.length + 1,
        category: 'trending',
        title: `What's Hot - ${today.toLocaleDateString()}`,
        description: `Today's trending topic that everyone is talking about`,
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
               </svg>`,
        link: 'https://www.google.com/trends'
    };
    
    addNewTopic(newTopic);
    console.log(`Daily trending topic added: ${newTopic.title}`);
}

// Export functions for external use (if needed)
window.TrendHub = {
    addNewTopic,
    removeTopic,
    updateTopic,
    getTrendingTopics,
    addDailyTrendingTopic,
    topics
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Optional: Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        console.log('Escape key pressed');
        // Add your escape key logic here
    }
});

// Optional: Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe topic cards for animation
    document.querySelectorAll('.topic-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize scroll animations after topics are rendered
setTimeout(addScrollAnimations, 100);
