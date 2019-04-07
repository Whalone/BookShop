package com.fangxiaofeng.service.impl;

import com.fangxiaofeng.dao.CustomerDao;
import com.fangxiaofeng.model.Customer;
import com.fangxiaofeng.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerDao customerDao;


    @Override
    public Customer findCustomerByID(int customerID) {
        return customerDao.findCustomerByID(customerID);
    }

    @Override
    public Customer findCustomerByName(String userName) {
        return customerDao.findCustomerByName(userName);
    }

    @Override
    public void insertNewCustomer(Customer customer) {
        customerDao.insertNewCustomer(customer);
    }

    @Override
    public void updateCustomer(Customer customer) {
        customerDao.updateCustomer(customer);
    }
}
