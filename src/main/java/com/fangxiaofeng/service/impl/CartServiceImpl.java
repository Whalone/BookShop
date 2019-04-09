package com.fangxiaofeng.service.impl;

import com.fangxiaofeng.dao.CartDao;
import com.fangxiaofeng.model.Cart;
import com.fangxiaofeng.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    CartDao cartDao;

    @Override
    public List<Cart> findOrderByCusID(int customerID) {
        return cartDao.findOrderByCusID(customerID);
    }

    @Override
    public void payOrder(int customerID) {
        cartDao.payOrder(customerID);
    }

    @Override
    public void addCartItem(Cart cart) {
        cartDao.addCartItem(cart);
    }
}
