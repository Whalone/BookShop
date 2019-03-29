package com.fangxiaofeng.dao;

import com.fangxiaofeng.model.Category;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CategoryDao {
    //查询所有分类
    List<Category> findAllCategory() throws Exception;

    //通过ID查询cate
    Category findCateByID(@Param("categoryID") int categoryID) throws Exception;

    Category findCateByName(@Param("categoryName") String categoryName) throws Exception;
}
