import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer vpIFLzPkTb2_0zwH1n0Pw3MfScuQZCs_gwbPwnSuqYJzSrhPcKwgV9JA_H2cJ1xXJyiaCaY8753jT7m4AZ6z9OekoDXeKS9ZG-uUsj58jD1ygKAScO6GnO_HXPvvYXYx",
    },
});



