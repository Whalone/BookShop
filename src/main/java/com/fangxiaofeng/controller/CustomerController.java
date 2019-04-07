package com.fangxiaofeng.controller;

import com.fangxiaofeng.model.Category;
import com.fangxiaofeng.model.Customer;
import com.fangxiaofeng.service.CustomerService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    private Map<String,Object> findCustomerByID(HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        String str_customerID = request.getParameter("customerID");
        Customer customer = customerService.findCustomerByID(Integer.parseInt(str_customerID));
        modelMap.put("success",true);
        modelMap.put("customer",customer);
        return modelMap;
    }

    @RequestMapping(value = "/findCustomerByName",method = RequestMethod.POST)
    @ResponseBody
    private Map<String,Object> findCustomerByName(String userName,String password,HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        Customer customer = customerService.findCustomerByName(userName);
        if(customer!=null){
            request.getSession().setAttribute("customer",customer);
            modelMap.put("success",true);
            modelMap.put("customer",customer);
        }else{
            modelMap.put("success",false);
            modelMap.put("msg","Invalid Username or Password.");
        }

        return modelMap;
    }

    @RequestMapping(value = "/getCustomerInfo",method = RequestMethod.GET)
    @ResponseBody
    private Map<String,Object> getCustomerInfo(HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        Customer customer = (Customer) request.getSession().getAttribute("customer");
        if(customer!=null){
            modelMap.put("customer",customer);
            modelMap.put("success",true);
        }else{
            modelMap.put("success",false);
        }
        return modelMap;

    }
}
