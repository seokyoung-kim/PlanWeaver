package com.sundayspringstudy.planweaver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "당신의 헝클어진 계획들을 직조해드리는 서비스, PlanWeaver입니다.";
        
    }
}