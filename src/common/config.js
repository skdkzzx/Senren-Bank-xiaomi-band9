/**
 * 公共配置文件
 * 存放项目中重复使用的配置数据
 */

// 存档位默认配置
export const DEFAULT_SAVE_SLOTS = [
    { id: 1, text: "空", progress: 1 },
    { id: 2, text: "空", progress: 1 },
    { id: 3, text: "空", progress: 1 },
    { id: 4, text: "空", progress: 1 },
    { id: 5, text: "空", progress: 1 }
];

// 最大存档位数量
export const MAX_SAVE_SLOTS = 30;

// 设置项配置
export const SETTINGS_CONFIG = [
    { key: 'textSpeedSetting', prop: 'textSpeed', type: 'number' },
    { key: 'fontSizeSetting', prop: 'fontSize', type: 'number' },
    { key: 'autoPlayDelaySetting', prop: 'autoPlayDelay', type: 'number' },
    { key: 'bgScrollSpeedSetting', prop: 'bgScrollSpeed', type: 'number' },
    { key: 'characterNameFontSizeSetting', prop: 'characterNameFontSize', type: 'number' },
    { key: 'screenAlwaysOnSetting', prop: 'screenAlwaysOn', type: 'boolean' },
    { key: 'boldTextSetting', prop: 'boldText', type: 'boolean' },
    { key: 'skipOnlyReadSetting', prop: 'skipOnlyRead', type: 'boolean' },
    { key: 'unreadColorSetting', prop: 'unreadColor', type: 'string' },
    { key: 'readColorSetting', prop: 'readColor', type: 'string' }
];

// 章节列表（用于场景/章节跳转）
export const CHAPTERS_LIST = [
    1, 810, 1367, 2321, 2435, 2812, 2993, 3120, 3749, 4330,
    4524, 5302, 6517, 6950, 7724, 8235, 8886, 9181, 9468, 10091,
    10894, 11556, 12220, 12545, 13205, 13344, 13902, 14017, 14663,
    14889, 16030, 16550, 17289, 19000, 19212, 19850, 20019, 20862,
    21343, 21938, 23059, 23394, 23692, 23715, 23920, 24767, 25728,
    28136, 28763, 29175, 29518, 30069, 30408, 30706, 31313, 32563,
    32980, 33166, 33420, 34304, 34877, 35120, 35564, 36167, 36740,
    37249, 37357, 38025, 38222, 39159, 39875, 40257, 40891, 41710,
    42391, 43025, 43638, 44095, 44924, 46030, 46517, 46814, 47393,
    48622, 48995, 49383, 49835, 50046, 50323, 50596, 50901, 51189,
    51228, 51387, 51559, 51750, 51769, 51976, 52097, 52913, 52992,
    53926, 54910
];

// 选择项页面列表
export const CHOICE_PAGES = [
    9181, 19000, 28136, 39159, 48622, 51769, 53926
];
