<template>
    <section id="page-header">
        <div :class="['header-container', isFunctionTarget === 'navigation' && isHeaderFunction ? 'header-navigation-active' : '']">
            
            <div id="header-left">
                <div id="header-left-icon" class="header-left-item" @click="headerFunctionHandle('navigation')">
                    <font-awesome-icon v-show="!isHeaderFunction || isFunctionTarget === 'search'" id="icon-nav" class="icon-bar" :icon="['fas', 'bars']" />
                    <font-awesome-icon v-show="isFunctionTarget === 'navigation' && isHeaderFunction" id="icon-close" class="icon-bar" :icon="['fas', 'x']" />
                </div>
                <div id="header-left-nav" class="header-left-item">
                    <p href="" @click="scrollToSection('destinations')">Destinations & Tour</p>
                    <p href="" @click="scrollToSection('flight-booking')">Flight Booking</p>
                    <p href="" @click="scrollToSection('hotel-reservation')">Hotel Reservation</p>
                    <p href="" @click="scrollToSection('travel-news')">Travel News</p>
                </div>
            </div>
    
            <div id="header-center">
                <NuxtLink to="/"><img src="@/assets/img/additional/asia-logo.png" alt="asia-prime-travel"></NuxtLink>
            </div>
    
            <div id="header-right">
                <div id="search-destinations" @click="headerFunctionHandle('search')">
                    <p>Search</p>
                    <div id="icon-area">
                        <font-awesome-icon v-if="!isHeaderFunction" id="icon-search" :icon="['fas', 'magnifying-glass']" />
                        <font-awesome-icon v-else id="icon-close" :icon="['fas', 'x']" />
                    </div>
                </div>
            </div>
        </div>

        <div id="header-function" :class="[isFunctionTarget === 'navigation' ? 'navigation-active' : 'search-active']" v-show="isHeaderFunction">
            <div v-show="isFunctionTarget === 'navigation'" id="function-navigation">
                <div id="side-bar">
                    <div id="nav-list">
                        <p @mouseover="navContentHandle('destination')" @click="scrollToSection('destinations')">Destinations & Tour</p>
                        <p @mouseover="navContentHandle('flight-booking')" @click="scrollToSection('flight-booking')">Flight Booking</p>
                        <p @mouseover="navContentHandle('hotel-reservation')" @click="scrollToSection('hotel-reservation')">Hotel Reservation</p>
                        <p @mouseover="navContentHandle('travel-news')" @click="scrollToSection('travel-news')">Travel News</p>
                    </div>
                    <div id="contact">
                        <a href="https://www.facebook.com/nhatviettour" target="_blank">Facebook</a>
                        <a href="https://www.messenger.com/t/102109946118187" target="_blank">Messenger</a>
                        <NuxtLink to="/about-us">About us</NuxtLink>
                        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                    </div>
                </div>
                <div id="nav-content">
                    <div v-show="isNavContent === 'destination'" id="destination-content" class="content-container">
                        <div class="content-box" v-for="data in destinationsData" :key="data.id">
                            <NuxtLink :to="'/' + $linkHandle(data.title)">
                                <div id="image-box">
                                    <img :src="require(`@/assets/img/destinations/${$linkHandle(data.title)}/${JSON.parse(data.image_json)[0]}`)" :alt="$linkHandle(data.title)">
                                </div>
                                <h3>{{ data.title }}</h3>
                            </NuxtLink>
                        </div>
                    </div>

                    <div v-for="item in navContentArray" :key="item.id" :id="item.id_name" class="content-container nav-array-style" v-show="isNavContent === item.title">
                        <div class="content-box">
                            <h2>{{ item.content }}</h2>
                        </div>
                        <div class="learn-more" @click="scrollToSection(item.title)">
                            <span>LEARN MORE </span><font-awesome-icon class="arrow-icon" :icon="['fas', 'arrow-right']" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="isFunctionTarget === 'search'" id="function-search">
                <div id="search-area">
                    <form ref="searchForm" @submit.prevent="searchHandle">
                        <input ref="searchInput" type="text" placeholder="Enter your keywords" name="keyword">
                    </form>
                </div>
            </div>
            <button>Open Search</button>
        </div>

    </section>
</template>
  
<script>

export default {
    name: 'PageHeader',

    props: {
        destinationsData: {
            required: true
        },
    },

    data() {
        return {
            isHeaderFunction : false,
            isFunctionTarget: false,
            isNavContent: null,
            navContentArray: [
                {id: 1, title: 'flight-booking', id_name: 'flight-booking-content', content: 'Whether you are looking for domestic or international flights, we offer a wide selection to cater to your needs. With competitive prices and exclusive deals, booking your ideal flight is now so easy and affordable.'},
                {id: 2, title: 'hotel-reservation', id_name: 'hotel-reservation-content', content: 'Discover a wide range of accommodation options in Vietnam, ranging from hotels and apartments to luxurious resorts. With an extensive selection of properties throughout Vietnam, finding and booking your ideal place at the best price with exclusive promotion. Start planning your dream vacation today!'},
                {id: 3, title: 'travel-news', id_name: 'travel-news-content', content: 'Stay up-to-date with the latest travel news covering popular destinations in Vietnam such as Hanoi, Ho Chi Minh, Ha Long Bay, Ha Giang, Da Nang, Nha Trang, Phu Quoc, and more. Get informed about travel policies, data analysis, and insights from airlines, hotels, resorts, travel start-ups, and the hottest attractions in Vietnam.'},
            ],
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        async scrollToSection(section) {
            if (this.isHeaderFunction) {
                this.isHeaderFunction = !this.isHeaderFunction;
            }
            if (this.$nuxt.context.route.path !== '/') {
                await this.$router.push('/');
                this.$store.commit('setNavigateToHome', section);
            } else {
                this.$emit('scrollToSection', section);
            }
        },

        handleScroll() {
            this.$emit('scrollToSection', null);
            this.$store.commit('setNavigateToHome', null);
        },

        headerFunctionHandle(value) {
            this.isHeaderFunction = !this.isHeaderFunction;
            this.isFunctionTarget = value;
            this.isNavContent = null;
            if(value === 'search') {
                setTimeout(() => {
                    this.$refs.searchInput.focus();
                }, 100);
            }
        },

        navContentHandle(content) {
            this.isNavContent = content;
        },

        searchHandle() {
            const formData = new FormData(this.$refs.searchForm)
            const keyword = formData.get('keyword')
            if(keyword) {
                this.$router.push('/search/' + keyword);
            }
        }
    },
}
    
</script>
  