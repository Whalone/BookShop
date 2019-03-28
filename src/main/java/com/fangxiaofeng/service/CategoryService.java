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
     * 通过名字查询ID
     * @param categoryID
     * @return
     * @throws Exception
     */
    Category findCateByID(int categoryID) throws Exception;
}
