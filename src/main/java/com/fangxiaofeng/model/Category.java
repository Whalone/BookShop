package com.fangxiaofeng.model;

import java.util.Date;

/**
 * 分类
 * @author FANGKI
 */
public class Category {
    private int categoryID;// 分类ID
    private int parentID;//   父分类ID
    private String categoryName;//分类名称
    private Date createTime ;// 创建时间
    private Date modifyTime ;// 修改时间
    private int flag;//  删除标识

    public int getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public int getParentID() {
        return parentID;
    }

    public void setParentID(int parentID) {
        this.parentID = parentID;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }

    @Override
    public String toString() {
        return "Category{" +
                "categoryID=" + categoryID +
                ", parentID=" + parentID +
                ", categoryName='" + categoryName + '\'' +
                ", createTime=" + createTime +
                ", modifyTime=" + modifyTime +
                ", flag=" + flag +
                '}';
    }
}

