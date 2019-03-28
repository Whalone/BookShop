package com.fangxiaofeng.model;


import java.util.Date;

/**
 * Book类
 * @author FANGKI
 */
public class Book {
    private int bookID;//书的ID
    private int categoryID;//书的类别
    private String bookName;//书的名字
    private float price;//书的价格
    private String author;//作者
    private Date publishTime;//出版时间
    private String information;//简介
    private Date createTime;//创建时间
    private int weight;//权重
    private String firstImage;//书的首页
    private String secondImage;
    private String thirdImage;
    private String forthImage;
    private String fifthImage;
    private String bigImage;

    public int getBookID() {
        return bookID;
    }

    public void setBookID(int bookID) {
        this.bookID = bookID;
    }

    public int getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Date getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(Date publishTime) {
        this.publishTime = publishTime;
    }

    public String getInformation() {
        return information;
    }

    public void setInformation(String information) {
        this.information = information;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getFirstImage() {
        return firstImage;
    }

    public void setFirstImage(String firstImage) {
        this.firstImage = firstImage;
    }

    public String getSecondImage() {
        return secondImage;
    }

    public void setSecondImage(String secondImage) {
        this.secondImage = secondImage;
    }

    public String getThirdImage() {
        return thirdImage;
    }

    public void setThirdImage(String thirdImage) {
        this.thirdImage = thirdImage;
    }

    public String getForthImage() {
        return forthImage;
    }

    public void setForthImage(String forthImage) {
        this.forthImage = forthImage;
    }

    public String getFifthImage() {
        return fifthImage;
    }

    public void setFifthImage(String fifthImage) {
        this.fifthImage = fifthImage;
    }

    public String getBigImage() {
        return bigImage;
    }

    public void setBigImage(String bigImage) {
        this.bigImage = bigImage;
    }

    @Override
    public String toString() {
        return "Book{" +
                "bookID=" + bookID +
                ", categoryID=" + categoryID +
                ", bookName='" + bookName + '\'' +
                ", price=" + price +
                ", author='" + author + '\'' +
                ", publishTime=" + publishTime +
                ", information='" + information + '\'' +
                ", createTime=" + createTime +
                ", weight=" + weight +
                ", firstImage='" + firstImage + '\'' +
                ", secondImage='" + secondImage + '\'' +
                ", thirdImage='" + thirdImage + '\'' +
                ", forthImage='" + forthImage + '\'' +
                ", fifthImage='" + fifthImage + '\'' +
                '}';
    }
}

