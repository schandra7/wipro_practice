package com.act;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/act")  // Correct way to define base path
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello Developer";
    }
}
