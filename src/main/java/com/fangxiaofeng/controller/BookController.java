package com.fangxiaofeng.controller;

import com.fangxiaofeng.model.Book;
import com.fangxiaofeng.model.Category;
import com.fangxiaofeng.service.BookService;
import com.fangxiaofeng.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 *
 */
@Controller
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/SelectNewBook",method = RequestMethod.GET)
    @ResponseBody
    private Map<String,Object> SelectNewBook(HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<String, Object>();
        String str_categoryID = request.getParameter("categoryID");
        System.out.println(str_categoryID);
        int categoryID = Integer.parseInt(str_categoryID);
        Category category;
        category = categoryService.findCateByID(categoryID);
        List<Book> books = bookService.selectNewBook(category);
        modelMap.put("books",books);
        modelMap.put("success",true);
        return modelMap;
    }


}

