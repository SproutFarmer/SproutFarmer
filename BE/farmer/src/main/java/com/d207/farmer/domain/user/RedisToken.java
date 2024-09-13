package com.d207.farmer.domain.user;

import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.redis.core.RedisHash;

@RedisHash("Token")
@AllArgsConstructor
@Getter @Setter
public class RedisToken {

    @Id
    private Long userId;
    private String refreshToken;
}
