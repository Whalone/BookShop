package com.fangxiaofeng.dao;

import com.fangxiaofeng.model.Book;
import com.fangxiaofeng.model.Cart;
import com.fangxiaofeng.model.Customer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-mybatis.xml"})
public class CartDaoTest {

    @Autowired
    private CartDao cartDao;

    @Test
    public void testFindOrderByCusID() throws Exception{
        int customerID = 1;
        List<Cart> orders = cartDao.findOrderByCusID(customerID);
        System.out.println(orders);
    }

    @Test
    public void testAddCartItem() throws Exception{
        Cart cart = new Cart();
        Book book = new Book();
        book.setBookID(11);
        cart.setBook(book);
        Customer customer = new Customer();
        customer.setCustomerID(1);
        cart.setCustomer(customer);
        Date date = new Date();
        System.out.println(date);
        cart.setCreateTime(date);
        cartDao.addCartItem(cart);

    }
}
