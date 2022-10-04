import users from '../components/users/userRouter.js';
import products from '../components/products/productRouter.js';
import carts from '../components/carts/cartRouter.js';
import orders from '../components/orders/orderRouter.js';
import configInfo from '../components/configInfo/infoConfig.js';
import chat from '../components/chat/chatRouter.js';




export default (app)  =>{
    app.get('/', (req, res)  =>{
        if(req.session.user){
            return res.redirect('products')
        }
        res.redirect('login')
    })

    products(app);
    carts(app);
    app.use(users);
    app.use(orders);
    app.use(configInfo);
    app.use(chat)
    

    app.get('*', (req, res) =>
    res.status(404).json({
      error: -2,
      description: `ruta ${req.originalUrl} método get no implementado`,
    })
  );

}