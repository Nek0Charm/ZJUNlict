import { ref } from 'vue';
const honors = ref([
    {
        title: 'RoboCup小型组国际赛亚军',
        year: '2012',
        location: '墨西哥',
        rank: 'silver',
        flag: 'mx',
    },
    { title: 'RoboCup小型组国际赛冠军', year: '2013', location: '荷兰', rank: 'gold', flag: 'nl' },
    { title: 'RoboCup小型组国际赛冠军', year: '2014', location: '巴西', rank: 'gold', flag: 'br' },
    {
        title: 'RoboCup小型组伊朗公开赛冠军',
        year: '2017',
        location: '伊朗',
        rank: 'gold',
        flag: 'ir',
    },
    { title: 'RoboCup小型组国际赛季军', year: '2017', location: '日本', rank: 'bronze', flag: 'jp' },
    { title: 'RoboCup小型组国际赛冠军', year: '2018', location: '加拿大', rank: 'gold', flag: 'ca' },
    {
        title: 'RoboCup小型组国际赛冠军',
        year: '2019',
        location: '澳大利亚',
        rank: 'gold',
        flag: 'au',
    },
    {
        title: 'RoboCup小型组中国赛冠军',
        year: '2020',
        location: '中国',
        rank: 'gold',
        flag: 'cn',
        link: 'https://www.bilibili.com/video/BV18p4y1r7Vm/?share_source=copy_web&vd_source=335c5ab3c1b3303bc8d4da8f75fd4d6b',
    },
    {
        title: 'RoboCup小型组国际赛亚军',
        year: '2023',
        location: '法国',
        rank: 'silver',
        flag: 'fr',
        link: 'https://youtu.be/sqgVqkanBa8?si=WHaoB2S4wdPTDo7g',
    },
    {
        title: 'RoboCup小型组国际赛亚军',
        year: '2024',
        location: '荷兰',
        rank: 'silver',
        flag: 'nl',
        link: 'https://youtu.be/364zEAsOclU?si=GGnupZvt6Zms2EFO',
    },
    // 添加更多荣誉...
]);
const groups = ref([
    {
        name: '机械组',
        description: '负责机器人机械结构设计与制作',
        icon: 'gear',
    },
    {
        name: '电控组',
        description: '负责机器人电路设计与嵌入式程序开发',
        icon: 'chip',
    },
    {
        name: '策略组',
        description: '场上的指挥官，根据瞬息万变的局势做出此刻的攻防策略',
        icon: 'brain',
    },
    {
        name: '车控组',
        description: '策略的双手，将策略的命令分解为更细小的动作，下发至硬件层执行',
        icon: 'kick',
    },
    {
        name: 'Skill',
        description: '对机器人的每一个动作精确控制',
        icon: 'skill',
    },
]);
// const joinUs = {
//   title: '加入我们',
//   description: '如果你对机器人技术充满热情，想要参与国际顶级机器人赛事，欢迎加入ZJUNLICT！',
//   buttonText: '立即申请',
// }
const aboutRoboCup = {
    title: '关于RoboCup SSL',
    description: 'RoboCup小型组足球机器人比赛（Small Size League，简称SSL）是RoboCup机器人世界杯的重要赛事之一。该赛事要求参赛队伍设计并开发完全自主的机器人足球队，在动态环境中进行5对5的足球比赛。了解更多信息请访问[RoboCup SSL官方网站](https://ssl.robocup.org/)。',
    features: [
        {
            icon: 'mdi-robot',
            title: '全自主机器人',
            description: '机器人完全自主决策，无需人工干预',
        },
        {
            icon: 'mdi-soccer',
            title: '高速比赛',
            description: '比赛节奏快，机器人速度可达4m/s',
        },
        {
            icon: 'mdi-chip',
            title: '实时控制',
            description: '基于实时视觉系统的快速决策',
        },
    ],
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['cta-button', 'cta-button', 'cta-button', 'cta-button', 'bubble', 'bubble', 'bubble', 'bubble', 'medal-icon', 'medal-icon', 'medal-icon', 'bubble', 'bubble', 'wide-container', 'group-card', 'group-icon', 'groups-container', 'join-button', 'join-button', 'join-section', 'join-title', 'join-description', 'feature-card', 'feature-card', 'external-link', 'external-link', 'bubble-title-link',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("home-page") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("hero-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("hero-content") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("hero-title") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("title-line") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("zjunlict-title") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("hero-subtitle") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("cta-buttons") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("#about-section"),
        ...{ class: ("cta-button primary") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("cta-button secondary") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("robot-animation") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("robot") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("about-section"),
        ...{ class: ("about-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("about-container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("section-title") },
    });
    (__VLS_ctx.aboutRoboCup.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://ssl.robocup.org/"),
        target: ("_blank"),
        rel: ("noopener noreferrer"),
        ...{ class: ("external-link") },
    });
    const __VLS_0 = {}.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("about-description") },
    });
    (__VLS_ctx.aboutRoboCup.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("features-grid") },
    });
    for (const [feature, index] of __VLS_getVForSourceType((__VLS_ctx.aboutRoboCup.features))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
            ...{ class: ("feature-card") },
        });
        const __VLS_6 = {}.VIcon;
        /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            ...{ class: ("feature-icon") },
        }));
        const __VLS_8 = __VLS_7({
            ...{ class: ("feature-icon") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        (feature.icon);
        __VLS_11.slots.default;
        var __VLS_11;
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("feature-title") },
        });
        (feature.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("feature-description") },
        });
        (feature.description);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("honors-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("section-title") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bubbles-container") },
    });
    for (const [honor, index] of __VLS_getVForSourceType((__VLS_ctx.honors))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bubble") },
            key: ((index)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bubble-content") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bubble-header") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((`https://flagcdn.com/24x18/${honor.flag}.png`)),
            alt: ((honor.location)),
            ...{ class: ("flag-icon") },
        });
        const __VLS_12 = {}.VIcon;
        /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            ...{ class: ("medal-icon") },
            ...{ class: ((honor.rank)) },
        }));
        const __VLS_14 = __VLS_13({
            ...{ class: ("medal-icon") },
            ...{ class: ((honor.rank)) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        (honor.rank === 'gold'
            ? 'mdi-trophy'
            : honor.rank === 'silver'
                ? 'mdi-medal'
                : 'mdi-medal-outline');
        __VLS_17.slots.default;
        var __VLS_17;
        if (honor.link) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
                href: ((honor.link)),
                target: ("_blank"),
                rel: ("noopener noreferrer"),
                ...{ class: ("bubble-title") },
            });
            (honor.title);
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("bubble-title") },
            });
            (honor.title);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bubble-info") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("bubble-year") },
        });
        (honor.year);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("bubble-location") },
        });
        (honor.location);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("groups-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("section-title") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("groups-container") },
    });
    for (const [group, index] of __VLS_getVForSourceType((__VLS_ctx.groups))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
            ...{ class: ("group-card") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("group-icon") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((`/ZJUNlict/icons/${group.icon}.svg`)),
            alt: ((group.name)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("group-name") },
        });
        (group.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("group-description") },
        });
        (group.description);
    }
    ['home-page', 'hero-section', 'hero-content', 'hero-title', 'title-line', 'zjunlict-title', 'hero-subtitle', 'cta-buttons', 'cta-button', 'primary', 'cta-button', 'secondary', 'robot-animation', 'robot', 'about-section', 'about-container', 'section-title', 'external-link', 'about-description', 'features-grid', 'feature-card', 'feature-icon', 'feature-title', 'feature-description', 'honors-section', 'section-title', 'bubbles-container', 'bubble', 'bubble-content', 'bubble-header', 'flag-icon', 'medal-icon', 'bubble-title', 'bubble-title', 'bubble-info', 'bubble-year', 'bubble-location', 'groups-section', 'section-title', 'groups-container', 'group-card', 'group-icon', 'group-name', 'group-description',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            honors: honors,
            groups: groups,
            aboutRoboCup: aboutRoboCup,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=HomeView.vue.js.map