<template>
    <section id="destination-section">
        <div id="destination-container">
            <h1>TOP DESTINATIONS IN VIETNAM</h1>
            <div id="destination-box">
                <div v-for="data in destinationsData" :key="data.id" class="destination-item" >
                    <NuxtLink :to="`/${$linkHandle(data.title)}`">
                        <div class="image">
                            <img :src="require(`@/assets/img/destinations/${$linkHandle(data.title)}/${JSON.parse(data.image_json)[0]}`)" :alt=" $linkHandle(data.title) ">
                        </div>
                        <div class="content">
                            <h2>{{ data.title + ' - ' + data.description }}</h2>
                            <div>
                                {{ data.content.slice(0, 180) +'...' }}
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    name: 'DestinationSection',

    props: {
        destinationsData: {
            require: true,
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
        }
    },

    computed: {
    },

    watch: {
        
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    created() {
        console.log('date', this.data)
    },

    methods: {
        handleScroll() {
            const itemList = document.querySelectorAll('#destination-box .destination-item');
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