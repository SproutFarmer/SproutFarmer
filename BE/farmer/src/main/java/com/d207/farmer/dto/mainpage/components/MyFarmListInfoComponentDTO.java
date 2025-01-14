package com.d207.farmer.dto.mainpage.components;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
// @NoArgsConstructor
public class MyFarmListInfoComponentDTO {
    private Boolean isUsable;
    private List<myFarmDTO> farms;

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class myFarmDTO {
        private Long placeId;
        private String placeName;
        private Long myPlaceId;
        private String myPlaceName;
    }

    public MyFarmListInfoComponentDTO() {
        farms = new ArrayList<>();
        farms.add(new myFarmDTO());
        farms.add(new myFarmDTO());
    }
}
