package com.kiosk.domain.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString @Builder
public class MemberDto {

    private int mno;            // 회원번호
    private String mname;       // 이름
    private String memail;      // 회원 이메일( =아이디 )
    private String mpassword;   // 비밀번호
    private String mphone;      // 전화번호


    // MemberEntity 연결




} // class end
