package com.fangxiaofeng.dao;

import com.fangxiaofeng.model.Book;
import com.fangxiaofeng.model.Category;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BookDao {
    /**
     * 根据名字查找书籍
     * @param name
     * @return
     */
    List<Book> findBookByName(@Param("bookName")String name);

    /**
     * 根据ID查找书籍
     * @param bookId
     * @return
     * @throws Exception
     */
    Book findBookById(@Param("bookId")int bookId) throws Exception;

    /**
     * 根据分类查找书籍
     * @param category
     * @return
     * @throws Exception
     */
    List<Book> findBookByCategory (Category category) throws Exception;

    /**
     * 更新book
     * @param book
     */
    void updateBook(Book book);

    /**
     * 通过bookID删除book
     * @param bookID
     */
    void deleteBookByID(@Param("bookID") int bookID);

    /**
     * 根据categoryID来查找书籍排行
     * categoryID为空则是在全部书籍中查找
     * @param category
     */
    List<Book> selectPopularBook(Category category);

    /**
     * 查询新上架书籍
     * @return
     */
    List<Book> selectNewBook(Category category);


}
