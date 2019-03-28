package com.fangxiaofeng.service.impl;

import com.fangxiaofeng.dao.BookDao;
import com.fangxiaofeng.model.Book;
import com.fangxiaofeng.model.Category;
import com.fangxiaofeng.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 *
 *
 */
@Service("BookService")
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public List<Book> findBookByName(String name) {
        return bookDao.findBookByName(name);
    }

    @Override
    public Book findBookById(int bookId) throws Exception {
        return bookDao.findBookById(bookId);
    }

    @Override
    public List<Book> findBookByCategory(Category category) throws Exception {
        return bookDao.findBookByCategory(category);
    }

    @Override
    public void updateBook(Book book) {
        bookDao.updateBook(book);
    }

    @Override
    public void deleteBookByID(int bookID) {
        bookDao.deleteBookByID(bookID);
    }

    @Override
    public List<Book> selectPopularBook(Category category) {
        return bookDao.selectPopularBook(category);
    }

    @Override
    public List<Book> selectNewBook(Category category) {
        return bookDao.selectNewBook(category);
    }
}

