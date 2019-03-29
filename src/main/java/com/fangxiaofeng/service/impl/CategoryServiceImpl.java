package com.fangxiaofeng.service.impl;

import com.fangxiaofeng.dao.CategoryDao;
import com.fangxiaofeng.model.Category;
import com.fangxiaofeng.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 *
 *
 */
@Service("CategoryService")
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryDao categoryDao;

    @Override
    public List<Category> findAllCategory() throws Exception {
        return categoryDao.findAllCategory();
    }

    @Override
    public Category findCateByID(int categoryID) throws Exception {
        return categoryDao.findCateByID(categoryID);
    }

    @Override
    public  Category findCateByName(String categoryName) throws Exception{
        return categoryDao.findCateByName(categoryName);
    }
}

