package com.pairboardbackpj.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("${itemImgLocation}")
    private String itemImgLocation;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 예: http://localhost:8080/images/파일명 으로 접근 가능하게 매핑
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:///" + itemImgLocation + "/");
    }
}
