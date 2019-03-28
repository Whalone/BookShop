package com.fangxiaofeng.service;

import com.fangxiaofeng.model.Book;
import com.fangxiaofeng.model.Category;
import org.apache.ibatis.annotations.Param;


import java.util.List;

public interface BookService {

    // 根据书名来查找书籍
    List<Book> findBookByName(String name);

    // 根据ID查找书籍
    Book findBookById(int bookId) throws Exception;

    // 根据分类查找书籍
    List<Book> findBookByCategory (Category category) throws Exception;

    // 更新book
    void updateBook(Book book);

    // 通过bookID删除book
    void deleteBookByID(int bookID);

    // 根据categoryID来查找书籍排行 categoryID为空则是在全部书籍中查找
    List<Book> selectPopularBook(Category category);

    // 查询新上架书籍
    List<Book> selectNewBook(Category category);

}
