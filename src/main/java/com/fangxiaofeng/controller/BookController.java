package com.fangxiaofeng.controller;

import com.fangxiaofeng.model.Book;
import com.fangxiaofeng.model.Category;
import com.fangxiaofeng.service.BookService;
import com.fangxiaofeng.service.CategoryService;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import sun.misc.Request;

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

    @RequestMapping(value = "/bookProduct",method = RequestMethod.GET)
    private String bookProduct(){
            return "single-product";
    }


    @RequestMapping(value = "/SelectNewBook",method = RequestMethod.GET)
    @ResponseBody
    private Map<String,Object> SelectNewBook(HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<String, Object>();
        String str_categoryID = request.getParameter("categoryID");
        Category category = new Category();
        if(StringUtils.isNotEmpty(str_categoryID)){
            category = categoryService.findCateByID(Integer.parseInt(str_categoryID));
            List<Book> books = bookService.selectNewBook(category);
            modelMap.put("books",books);
            modelMap.put("success",true);
        }else{
            List<Book> books = bookService.selectNewBook(category);
            modelMap.put("books",books);
            modelMap.put("success",true);
        }

        return modelMap;
    }

    @RequestMapping(value = "/FindBookByCategory",method = RequestMethod.GET)
    @ResponseBody
    private Map<String,Object> findBookByCategory(HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        String str_categoryName= request.getParameter("categoryName");
        Category category = new Category();
        if(StringUtils.isNotEmpty(str_categoryName)){
            category = categoryService.findCateByName(str_categoryName);
            List<Book> books = bookService.findBookByCategory(category);
            modelMap.put("books",books);
            modelMap.put("success",true);
        }else{
            List<Book> books = bookService.findBookByCategory(category);
            modelMap.put("books",books);
            modelMap.put("success",true);
        }
        return modelMap;

    }

    @RequestMapping(value = "/selectPopularBook",method = RequestMethod.GET)
    @ResponseBody
    private Map<String,Object> selectPopularBook(HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        String str_categoryName= request.getParameter("categoryName");
        Category category = new Category();
        if(StringUtils.isNotEmpty(str_categoryName)){
            category = categoryService.findCateByName(str_categoryName);
            List<Book> books = bookService.selectPopularBook(category);
            modelMap.put("books",books);
            modelMap.put("success",true);
        }else{
            List<Book> books = bookService.findBookByCategory(category);
            modelMap.put("books",books);
            modelMap.put("success",true);
        }
        return modelMap;
    }

    @RequestMapping(value = "/selectBookByID",method = RequestMethod.GET)
    @ResponseBody
    private Map<String,Object> selectBookByID(HttpServletRequest request) throws Exception{
        Map<String,Object> modelMap = new HashMap<>();
        String bookID= request.getParameter("bookID");
        Book book = bookService.findBookById(Integer.parseInt(bookID));
        modelMap.put("book",book);
        modelMap.put("success",true);
        return modelMap;
    }




}

