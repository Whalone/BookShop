package com.fangxiaofeng.controller;

import com.fangxiaofeng.model.Category;
import com.fangxiaofeng.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping("/findAllCategory")
    @ResponseBody
    private Map<String,Object> findAllCategory(HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        List<Category> categories = categoryService.findAllCategory();
        modelMap.put("categories",categories);
        modelMap.put("success",true);
        return modelMap;
    }
}
