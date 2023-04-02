package com.controller;

import com.dto.request.UserLoginReq;
import com.dto.response.LoanOfferResponse;
import com.dto.user.request.CreateNewUserReq;
import com.dto.user.request.GetCustomerDetailReq;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public interface UserController {

    /**
     * createNewUser
     * @param createNewUserReq
     * @return
     */
    public LoanOfferResponse createNewUser(CreateNewUserReq createNewUserReq);

    /**
     * getCustomerDetail
     * @param getCustomerDetailReq
     * @return
     */
    public LoanOfferResponse getCustomerDetail(GetCustomerDetailReq getCustomerDetailReq);

    /**
     * getCustomerList
     * @return
     */
    public LoanOfferResponse getCustomerList();

    /**
     * login
     * @param loginReq
     * @return
     */
    public LoanOfferResponse login(UserLoginReq loginReq);
}
