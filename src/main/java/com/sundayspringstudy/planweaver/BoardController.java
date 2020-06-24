package com.sundayspringstudy.planweaver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
    @GetMapping("/about")
    public String about() {
        return "스프링부트에서 보이는 페이지";
    }

    @GetMapping("/install")
    public int install() {
        return 123;
    }
}