import axios  from "axios";

function getAxios() {
    const axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });


    function onRequestFulfilled(request) {
        // console.log('onRequestFulfilled', request)
        // Do something before request is sent
        return request;
    }

    function onRequestRejected(error) {
        // console.error('onRequestRejected', error.response)
        // Do something with request error
        // Retry code, internet connectivity check
        return Promise.reject(new Error(error?.response?.data?.msg));
    }

    function onResponseFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // console.log("onResponseFulfilled", response);
        const {
            data: { data, status, message, msg },
            config: { url },
        } = response ||{};

        if (!status) {
            return Promise.reject(new Error(msg || message));
        }
        return data;
    }


    function onResponseRejected(error) {
        // Do something with response error
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // console.error('onResponseRejected', error.response)
        const {status} = error?.response || {}
        const {msg,message, code} = error?.response?.data || {}
        const responseMessage = message || msg;
    
        const errorObj = new Error(responseMessage)
        errorObj.status = status
        return Promise.reject(errorObj);
    }


    axiosInstance.interceptors.request.use(onRequestFulfilled, onRequestRejected, {synchronous: true })
    axiosInstance.interceptors.response.use(onResponseFulfilled, onResponseRejected, { synchronous: true })

    return axiosInstance
}

let axiosInstance = null

if (!axiosInstance) {
    axiosInstance = getAxios()
}
    
export default axiosInstance

