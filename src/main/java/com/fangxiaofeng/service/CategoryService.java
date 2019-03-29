package com.fangxiaofeng.service;

import com.fangxiaofeng.model.Category;

import java.util.List;

public interface CategoryService {

    /**
     * 查询所有分类
     * @return
     * @throws Exception
     */
    List<Category> findAllCategory() throws Exception;

    /**
     * 通过ID查询cate
     * @param categoryID
     * @return
     * @throws Exception
     */
    Category findCateByID(int categoryID) throws Exception;

    /**
     * 通过name来查cate
     * @param categoryName
     * @return
     * @throws Exception
     */
    Category findCateByName(String categoryName) throws Exception;
}
