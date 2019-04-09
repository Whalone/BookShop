package com.fangxiaofeng.service;

import com.fangxiaofeng.model.Cart;


import java.util.List;

public interface CartService {

    List<Cart> findOrderByCusID( int customerID);

    void payOrder(int customerID);

    void addCartItem(Cart cart);
}
