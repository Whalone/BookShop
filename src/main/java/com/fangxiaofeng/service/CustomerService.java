package com.fangxiaofeng.service;

import com.fangxiaofeng.model.Customer;
import org.springframework.stereotype.Service;


public interface CustomerService {

    /**
     * 通过ID查找客户
     * @param customerID
     */
    Customer findCustomerByID(int customerID);

    /**
     * userName查找用户
     * @param userName
     * @return
     */
    Customer findCustomerByName(String userName);

    /**
     * 插入新的customer
     * @param customer
     */
    void insertNewCustomer(Customer customer);

    /**
     * 更新customer
     * @param customer
     */
    void updateCustomer(Customer customer);


}
