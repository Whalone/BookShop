package com.fangxiaofeng.dao;

import com.fangxiaofeng.model.Book;
import com.fangxiaofeng.model.Category;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 *
 *
 */
// 加载spring配置文件
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-mybatis.xml"})
public class BookDaoTest {

    @Autowired
    private BookDao bookDao;

    @Test
    public void testFindBookByName(){
        String name = "刀剑神域";
        List<Book> bookList = bookDao.findBookByName(name);
        System.out.println(bookList.get(0).getBookName());
    }

    @Test
    public void testFindBookById() throws Exception{
        int bookID = 1;
        Book book = bookDao.findBookById(bookID);
        System.out.println(book);
    }

    @Test
    public void testFindBookByCategory() throws Exception{
        Category category = new Category();
        //category.setParentID(10);
        System.out.println(category.getCategoryID());
        List<Book> books = bookDao.findBookByCategory(category);
        System.out.println(books.toString());
        books.clear();

        category.setCategoryID(11);
        books = bookDao.findBookByCategory(category);
        System.out.println(books);
    }

    @Test
    public void testUpdateBook() throws Exception{
        Book book = bookDao.findBookById(1);
        book.getBookName();
        book.setBookName("杀戮都市");
        //book.setModifyBy("Kim");
        bookDao.updateBook(book);
    }

    @Test
    public void testDeleteBookByBookID(){
        bookDao.deleteBookByID(4);
    }

    @Test
    public void testSelectPopularBook(){
        Category category = new Category();
        List<Book> books = bookDao.selectPopularBook(category);
        System.out.println(books);
        books.clear();
        //category.setParentID(20);
        books = bookDao.selectPopularBook(category);
        System.out.println(books);
    }

    @Test
    public void testSelectNewBook(){
        Category category = new Category();
        List<Book> books = bookDao.selectNewBook(category);
        System.out.println(books);
        books.clear();
        category.setCategoryID(11);
        books = bookDao.selectNewBook(category);
        System.out.println(books);
    }

}

