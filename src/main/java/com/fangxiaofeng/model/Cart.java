package com.fangxiaofeng.model;

import java.util.Date;
import java.util.List;

/**
 * cart类
 */
public class Cart {
    private int orderID;
    private Book book;
    private Customer customer;
    private Date createTime;
    private int quantity;
    private int flag;// 1代表已付款 0代表未付款

    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }


    @Override
    public String toString() {
        return "Order{" +
                "orderID=" + orderID +
                ", book=" + book +
                ", customer=" + customer +
                ", createTme=" + createTime +
                ", quantity=" + quantity +
                ", flag=" + flag +
                '}';
    }
}
