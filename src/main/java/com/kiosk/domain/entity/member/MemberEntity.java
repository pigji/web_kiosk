package com.kiosk.domain.entity.member;

import com.kiosk.domain.dto.MemberDto;
import com.kiosk.domain.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="member") // DB 에서 사용될 테이블 이름
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class MemberEntity extends BaseEntity {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY ) // 자동 번호
    private int mno;        // 회원번호

    @Column
    private String mname;   // 이름

    @Column
    private String memail;  // 이메일( =아이디 )

    @Column
    private String mpassword;   // 비밀번호

    @Column
    private String mphone;  // 전화번호


    // 연관관계



    // MemberDto 와 연결
    public MemberDto toDto(){
        return MemberDto.builder()
                .mno(this.mno)
                .mname(this.mname)
                .memail(this.memail)
                .mpassword(this.mpassword)
                .mphone(this.mphone)
                .build();
    }

} // class end
