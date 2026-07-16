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
