package com.fangxiaofeng.dao;

import com.fangxiaofeng.model.Customer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 *
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-mybatis.xml"})
public class CustomerDaoTest {

    @Autowired
    CustomerDao customerDao;

    @Test
    public void testinsertNewCustomer(){
        Customer customer = new Customer();
        customer.setNickName("test");
        customer.setAge(18);
        customerDao.insertNewCustomer(customer);
    }

    @Test
    public void testFindCustomerByID(){
        Customer customer = customerDao.findCustomerByID(1);
        System.out.println(customer);
    }

    @Test
    public void testUpdateCustomer(){
        Customer customer = customerDao.findCustomerByID(2);
        customer.setNickName("Tommy");
        customerDao.updateCustomer(customer);
    }

    @Test
    public void testFindCustomerByName(){
        String userName = "admin1";
        Customer customer = customerDao.findCustomerByName(userName);
        System.out.println(customer);
    }
}

