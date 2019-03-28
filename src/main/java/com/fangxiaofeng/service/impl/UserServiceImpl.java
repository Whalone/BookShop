package com.fangxiaofeng.service.impl;

import com.fangxiaofeng.dao.IUserDao;
import com.fangxiaofeng.model.User;
import com.fangxiaofeng.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userService")
public class UserServiceImpl implements IUserService {

    @Resource
    private IUserDao userDao;

    public User selectUser(long userId) {
        return this.userDao.selectUser(userId);
    }

}

