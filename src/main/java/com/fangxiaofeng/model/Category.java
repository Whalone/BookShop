package com.fangxiaofeng.model;

import java.util.Date;

/**
 * 分类
 * @author FANGKI
 */
public class Category {
    private int categoryID;// 分类ID
    private String categoryName;//分类名称

    public int getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @Override
    public String toString() {
        return "Category{" +
                "categoryID=" + categoryID +
                ", categoryName='" + categoryName + '\'' +
                '}';
    }
}

