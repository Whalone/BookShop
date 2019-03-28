package com.fangxiaofeng.dao;

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
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-mybatis.xml"})
public class CategoryDaoTest {

    @Autowired
    private CategoryDao categoryDao;

    @Test
    public void testFindAllCategory() throws Exception{
        List<Category> categoryList = categoryDao.findAllCategory();
        System.out.println(categoryList.toString());
    }

    @Test
    public void testFindCateByID() throws Exception {
        Category category = categoryDao.findCateByID(11);
        System.out.println(category);
    }
}

