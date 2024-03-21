import Http from './Http.js'

class OrderApi extends Http {
    createOrder(data) {
        return this.$postJson('https://cube-shop.azurewebsites.net/api/order', data)
    }
}

export default new OrderApi();
