package com.fangxiaofeng.dao;

import com.fangxiaofeng.model.Cart;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CartDao {

    /**
     * 根据用户ID来找Order
     * @param customerID
     * @return
     */
    List<Cart> findOrderByCusID(@Param("customerID") int customerID);

    /**
     * 传进来一个book的list来替换
     * @param customerID
     */
    void payOrder(@Param("customerID") int customerID);

    /**
     * 加入购物车
     * @param cart
     */
    void addCartItem(@Param("cart") Cart cart);
}
