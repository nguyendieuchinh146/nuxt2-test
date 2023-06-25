<template>
    <section id="hotel-reservation">
        <div id="hotel-reservation-container">
            <h1>Hotel Reservation</h1>
            <div id="service-box" ref="serviceBox">
                <div id="service-list" :class="{ 'show-all': isShowAll }">
                    <!-- use v-for here  -->
                    <div v-for="data in filteredhotelReservationData" :key="data.id" class="service-item" @click="showPopupFormHandle(data.title, data.price)">
                        <div class="item-box">
                            <div class="thumbnail">
                                <img :src="$getImageLink(`hotel-images`, `${data.img}`)" :alt="data.title.toLowerCase().replace(/\s+/g, '-')">
                            </div>
                            <div class="service-content">
                                <div class="service-title">
                                    <span>{{ data.destination }}</span>
                                    <p>{{ data.title }}</p>
                                    <small>From ${{ data.price }}/night</small>
                                </div>
                                <div class="save-up">
                                    <p>Save {{ data.discount }}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!isShowAll" id="show-all" @click="showHandle">
                    <p>SHOW MORE</p>
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </div>
                <div v-else id="show-less" ref="showLess" :class="{ 'remove-sticky': isSticky }" @click="hideHandle">
                    <p>SHOW LESS</p>
                    <font-awesome-icon id="icon" :icon="['fas', 'chevron-up']" />
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>


export default {
    name: 'HotelReservation',

    props: {
        hotelReservationData: {
            type: Array,
            require: true,
            default: () => []
        }
    },

    data() {
        return {
            isShowAll: false,
            limit: 6,
            isSticky: false,
        }
    },

    computed: {
        filteredhotelReservationData() {
            return this.hotelReservationData.slice(0, this.limit);
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScrollShowBtn);
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },
    
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScrollShowBtn);
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        showPopupFormHandle(title, price) {
            this.$emit('popup-form', 'hotel-reservation', title, Number(price))
        },

        showHandle() {
            this.isShowAll = !this.isShowAll;
            this.limit = 42;
            setTimeout(() => {
                this.handleScroll()
            }, 100);

        },

        hideHandle() {
            this.isShowAll = !this.isShowAll;
            this.limit = 6;
            this.$nextTick(() => {
                const serviceBoxSection = this.$refs.serviceBox;
                if (serviceBoxSection) {
                    serviceBoxSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
            });
        },
        
        handleScrollShowBtn() {
            if(this.isShowAll) {
                const serviceBoxSection = this.$refs.serviceBox;
                const serviceBoxSectionRect = serviceBoxSection.getBoundingClientRect();
                this.isSticky = serviceBoxSectionRect.bottom < 856 || serviceBoxSectionRect.top > 600;
            }
        },

        handleScroll() {
            const itemList = document.querySelectorAll('#service-list .service-item');
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