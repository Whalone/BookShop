package com.fangxiaofeng.dao;

import com.fangxiaofeng.model.User;

public interface IUserDao {

    User selectUser(long id);

}