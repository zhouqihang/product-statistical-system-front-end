/**
 * Created by zhouqihang on 2018/4/13.
 */
const statusEnum = {
    normal: '',
    success: 'success',
    error: 'error',
    warning: 'warning',
    validating: 'validating',
};

const defaultState = {
    id: 0,
    number: {
        value: '',
        status: statusEnum.normal,
        help: '原料编号和原料名称必须填写一个',
    },
    title: {
        value: '',
        status: statusEnum.normal,
        help: '原料编号和原料名称必须填写一个',
    },
    unit: {
        value: '',
        status: statusEnum.normal,
        help: '',
    },
    count: {
        value: 0,
        status: statusEnum.normal,
        help: '',
    },
    remark: {
        value: '',
        status: statusEnum.normal,
        help: '',
    },
    // 正在发送请求
    isPosting: false,
    // 是否显示
    isCreating: false,
    // 正在请求数据
    isLoading: false,
    materials: [],
};