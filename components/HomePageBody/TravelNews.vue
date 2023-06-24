<template>
    <section id="travel-news">
        <div id="travel-news-container">
            <h1>Travel News</h1>
            <div id="news-box">
                <div id="news-list">
                    <!-- use v-for here  -->
                    <div class="news-item" v-for="data in travelNewsData" :key="data.id">
                        <NuxtLink :to="'travel-news/'+data.link">
                            <div class="thumbnail">
                                <img :src="require(`@/assets/img/travel-news/` + data.img)" :alt="data.title.toLowerCase().replace(/\s+/g, '-')">
                            </div>
                            <div class="news-content">
                                <div class="news-title">
                                    <h2>{{ data.title }}</h2>
                                </div>
                                <div class="news-description">
                                    <p>{{ data.content.slice(0,200) +'...' }}</p>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
name: 'TravelNews',

data() {
    return {
    }
    },

    props: {
        travelNewsData: {
            require: true
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            const itemList = document.querySelectorAll('#news-list .news-item');
            const windowHeight = window.innerHeight;
            const threshold = 140;
            
            itemList.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                
                if (itemRect.top + threshold < windowHeight) {
                    item.classList.add('slide-in');
                }

            });
        },
    },

}
</script>
