// const apiUrl = import.meta.env.VITE_API_URL;
import axios from 'axios';
const apiUrl = process.env.apiUrl;
const apiVariable = 'http://localhost/www/asia_prime_travel/back-end/index.php';
export const apiService = {
    async getDestinations(dataLoad) {
        try {
            let response = null
            if(dataLoad) {
                response = await axios.post(apiVariable + '?folder=destinations&data_load=full');
            } else {
                response = await axios.post(apiVariable + '?folder=destinations');
            }
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getDestination(destinationName) {
        try {
            const response = await axios.post(apiVariable + '?folder=destination&title=' + destinationName);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async flightBookings() {
        try {
            const response = await axios.post(apiVariable + '?folder=flight-booking-service');
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async hotelReservations() {
        try {
            const response = await axios.post(apiVariable + '?folder=hotel-reservation');
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async travelNews() {
        try {
            const response = await axios.post(apiVariable + '?folder=travel-news');
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async travelNewsContent(params) {
        try {
            const response = await axios.post('http://localhost/www/asia_prime_travel/back-end/index.php?folder=travel-news-content&link=' + params.news);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async submitForm(formData) {
        try {
            const response = await axios.post('http://localhost/www/asia_prime_travel/back-end/index.php?folder=submit-form', formData);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getTour(destinationName) {
        try {
            const response = await axios.post('http://localhost/www/asia_prime_travel/back-end/index.php?folder=tour&destination=' + destinationName);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getTourPackage(destinationName) {
        try {
            const response = await axios.post('http://localhost/www/asia_prime_travel/back-end/index.php?folder=tour-package&destination=' + destinationName);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async searchAll(keyword) {
        try {
            const response = await axios.post('http://localhost/www/asia_prime_travel/back-end/index.php?folder=search&keyword=' + keyword);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};
