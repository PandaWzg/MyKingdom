package io.imking.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class IndexController {

	@GetMapping("/")  
    public String html() {  
        return "/common/html/index.html";  
    }


}
