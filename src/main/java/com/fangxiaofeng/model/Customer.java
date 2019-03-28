package com.fangxiaofeng.model;

import java.util.Date;

/**
 * Customer类
 * @author FANGKI
 */

public class Customer {
    private int customerID;// 顾客ID
    private String nickName;// 顾客名字
    private String realName;// 真实姓名
    private int age;// 年龄
    private String sex;// 性别
    private String phone;//  手机号
    private String password;// 密码
    private String email;// 邮箱
    private String image;//头像
    private Date createTime;// 创建时间
    private Date modifyTime;// 修改时间
    private int flag;// 删除标识

    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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
        return "Customer{" +
                "customerID=" + customerID +
                ", nickName='" + nickName + '\'' +
                ", realName='" + realName + '\'' +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", image='" + image + '\'' +
                ", createTime=" + createTime +
                ", modifyTime=" + modifyTime +
                ", flag=" + flag +
                '}';
    }
}

