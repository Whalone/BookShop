package com.fangxiaofeng.controller;

import com.fangxiaofeng.model.Book;
import com.fangxiaofeng.model.Cart;
import com.fangxiaofeng.model.Customer;
import com.fangxiaofeng.service.BookService;
import com.fangxiaofeng.service.CartService;
import com.fangxiaofeng.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @Autowired
    BookService bookService;

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/findOrderByCusID",method = RequestMethod.POST)
    @ResponseBody
    private Map<String,Object> findOrderByCusID(String customerID, HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        List<Cart> carts = cartService.findOrderByCusID(Integer.parseInt(customerID));
        modelMap.put("success",true);
        modelMap.put("carts",carts);
        return modelMap;
    }

    @RequestMapping(value = "/addCartItem",method = RequestMethod.POST)
    @ResponseBody
    private Map<String,Object> addCartItem(String bookID,String quantity,HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        Book book = bookService.findBookById(Integer.parseInt(bookID));
        Customer customer = (Customer) request.getSession().getAttribute("customer");
        Cart cart = new Cart();
        cart.setBook(book);
        cart.setCustomer(customer);
        cart.setQuantity(Integer.parseInt(quantity));
        cart.setCreateTime(new Date());
        cartService.addCartItem(cart);
        modelMap.put("success",true);
        return modelMap;
    }
}
