use fast_api;
INSERT INTO crop_base (crop_name, crop_plant_season, is_leaves) VALUES
('토마토', '3,4,5', 0),
('고추', '4,5', 0),
('옥수수', '5,6', 0),
('오이', '3,4,5', 0),
('콩', '5,6', 0),
('가지', '4,5', 0),
('무', '8,9', 1),
('상추', '3,4', 1),
('배추', '9,10', 1),
('감자', '3,4', 1),
('고구마', '5,6', 1),
('대파', '3,4,9', 1);

INSERT INTO crop_water_period (crop_id, watering_step1, watering_step2, watering_step3, watering_step4) VALUES
(1, 3, 7, 10, 14),
(2, 5, 10, 12, 15),
(3, 7, 10, 14, 20),
(4, 3, 7, 10, 14),
(5, 5, 7, 10, 12),
(6, 5, 10, 12, 15),
(7, 7, 14, 21, 28),
(8, 3, 7, 10, 14),
(9, 5, 7, 10, 12),
(10, 3, 7, 10, 14),
(11, 7, 10, 14, 20),
(12, 5, 10, 12, 15);


INSERT INTO growth_temp (crop_id, growth_high_temp, growth_low_temp) VALUES
(1, 30.0, 18.0),
(2, 30.0, 20.0),
(3, 28.0, 18.0),
(4, 28.0, 18.0),
(5, 25.0, 18.0),
(6, 30.0, 18.0),
(7, 28.0, 18.0),
(8, 20.0, 15.0),
(9, 24.0, 18.0),
(10, 25.0, 15.0),
(11, 28.0, 20.0),
(12, 30.0, 18.0);

INSERT INTO crop_fertilizer (fertilizer_id, fertilizer_type, fertilizer_name) VALUES
(1, '질소 비료', '삼양화학 질소 비료'),          -- 질소 비료
(2, '칼슘 비료', '코스트칼슘비료'),              -- 칼슘 비료
(3, '복합 비료', '한일비료 NK 복합비료'),         -- 복합 비료
(4, '유박 비료', '경농 유박비료'),               -- 유박 비료
(5, '칼륨 비료', '팜한농 올코팅 프리미엄'),       -- 칼륨 비료
(6, '인산 비료', '금호 비료 인산칼륨');           -- 인산 비료


INSERT INTO crop_fertilizer_period
(crop_id, fertilizer_step1_cycle, fertilizer_step2_cycle, fertilizer_step3_cycle, fertilizer_step4_cycle, fertilizer_step1_id, fertilizer_step2_id, fertilizer_step3_id, fertilizer_step4_id)
VALUES
-- 토마토: 이식 후 20일, 착과 후 30일, 수확기 40일 주기로 비료 사용
(1, 20, 30, 40, 60, 2, 1, 6, 3),

-- 고추: 정식 후 25일, 착과 전 40일, 착과 후 55일, 수확기 70일 주기로 비료 사용
(2, 25, 40, 55, 70, 3, 4, 5, 3),

-- 옥수수: 파종 후 15일, 생장기 30일, 생장 후반 50일 주기로 비료 사용 (4단계 없음)
(3, 15, 30, 50, NULL, 1, 5, 6, NULL),

-- 오이: 이식 후 10일, 착과 전 30일, 착과 후 45일, 수확기 60일 주기로 비료 사용
(4, 10, 30, 45, 60, 4, 2, 1, 4),

-- 콩: 파종 후 25일, 착과기 50일, 성숙기 75일 주기로 비료 사용 (4단계 없음)
(5, 25, 50, 75, NULL, 5, 6, 1, NULL),

-- 가지: 정식 후 20일, 생장기 35일, 착과기 55일, 수확기 70일 주기로 비료 사용
(6, 20, 35, 55, 70, 6, 3, 4, 6),

-- 무: 파종 후 20일, 본엽기 40일, 비대기 60일, 수확기 80일 주기로 비료 사용
(7, 20, 40, 60, 80, 2, 1, 6, 2),

-- 상추: 파종 후 15일, 생장기 30일, 수확기 45일 주기로 비료 사용 (4단계 없음)
(8, 15, 30, 45, NULL, 3, 4, 5, NULL),

-- 배추: 파종 후 25일, 본엽기 45일, 비대기 65일, 수확기 85일 주기로 비료 사용
(9, 25, 45, 65, 85, 5, 6, 1, 5),

-- 감자: 파종 후 20일, 생장기 40일, 비대기 60일, 수확기 80일 주기로 비료 사용
(10, 20, 40, 60, 80, 2, 1, 6, 2),

-- 고구마: 파종 후 20일, 생장기 40일, 수확기 60일 주기로 비료 사용 (4단계 없음)
(11, 20, 40, 60, NULL, 4, 2, 3, NULL),

-- 대파: 파종 후 20일, 본엽기 35일, 수확기 50일 주기로 비료 사용 (4단계 없음)
(12, 20, 35, 50, NULL, 3, 4, 5, NULL);

INSERT INTO crop_threshold (crop_id, step2_threshold, step3_threshold, step4_threshold) VALUES
(1, 510, 1060, 1940),    -- 토마토
(2, 255, 848, 1746),     -- 고추
(3, 204, 742, 2134),     -- 옥수수
(4, 178, 602, 742),      -- 오이
(5, 204, 742, 1060),     -- 콩 (완두콩 기준)
(6, 255, 954, 1378),     -- 가지
(7, NULL, NULL, 1360),   -- 무
(8, NULL, NULL, 776),    -- 상추
(9, NULL, NULL, 1940),   -- 배추 (결구배추 기준)
(10, NULL, NULL, 1060),  -- 감자
(11, NULL, NULL, 1500),  -- 고구마
(12, NULL, NULL, 2910);  -- 대파