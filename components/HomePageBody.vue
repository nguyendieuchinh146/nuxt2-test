<template>
    <div>body</div>
</template>
  
<script>


    export default {
    name: "HomePageBody",
    components: {  },

    props: {
        scrollToSectionId: {
            required: true
        },
        data: {
            required: true
        },
    },
    
    data() {
        return {
            isPopupForm: null,
            popupTitle: '',
            popupPrice: 0,
        }
    },

    emits: ['popup-form'],

    watch: {
      scrollToSectionId: {
        immediate: true,
        handler(sectionId) {
            this.scrollToSectionIdHandle(sectionId);
        }
      }
    },

    created() {
        // if(this.$store.state.navigateToHome !== null) {
        //     setTimeout(() => {
        //         this.scrollToSectionIdHandle(this.$store.state.navigateToHome)
        //     }, 1);
        // }
    },

    mounted() {
    },

    methods: {
        scrollToSectionIdHandle(sectionId) {
            const componentRef = this.$refs[sectionId];
            if (componentRef) {
                window.scrollTo({ top: componentRef.$el.offsetTop, behavior: 'smooth' });
            }
        },

        popupFormHandle(isValue, title, price) {
            this.isPopupForm = isValue;
            this.popupTitle = title;
            this.popupPrice = price;
        },

        closePopupHandle(isValue) {
            this.isPopupForm = isValue
        },
    }
}
</script>