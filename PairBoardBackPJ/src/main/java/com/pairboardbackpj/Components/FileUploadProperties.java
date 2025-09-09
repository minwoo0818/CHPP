package com.pairboardbackpj.Components;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "")
public class FileUploadProperties {
    private String itemImgLocation;
    private String uploadPath;

    // getter/setter
    public String getItemImgLocation() {
        return itemImgLocation;
    }
    public void setItemImgLocation(String itemImgLocation) {
        this.itemImgLocation = itemImgLocation;
    }
    public String getUploadPath() {
        return uploadPath;
    }
    public void setUploadPath(String uploadPath) {
        this.uploadPath = uploadPath;
    }
}
