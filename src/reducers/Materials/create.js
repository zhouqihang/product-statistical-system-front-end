/**
 * Created by zhouqihang on 2018/3/14.
 */
import {
    NUMBER_CHANGE,
    TITLE_CHANGE,
    UNIT_CHANGE,
    COUNT_CHANGE,
    DANGER_CHANGE,
    REMARK_CHANGE,
    POSTING_MATERIAL,
    POST_MATERIAL_SUCCESS,
    POST_MATERIAL_FAILURE,
    INIT_CREATE_STATE,
} from '../../actions/Materials/create';

const statusEnum = {
    normal: '',
    success: 'success',
    error: 'error',
    warning: 'warning',
    validating: 'validating',
};

let defaultState = {
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
    danger: {
        value: 0,
        status: statusEnum.normal,
        help: '当库存量小于报警数量时，系统将提示您原料数量不足',
    },
    remark: {
        value: '',
        status: statusEnum.normal,
        help: '',
    },
    isPosting: false,
    isCreating: false,
};

const createMaterials = (state = defaultState, action) => {
    const { title, number, unit, danger, count, remark } = state;
    switch (action.type) {
        case NUMBER_CHANGE:
            return {
                ...state,
                number: {
                    ...number,
                    value: action.value,
                    status: (title.value === '' && action.value === '') ? statusEnum.error : statusEnum.normal,
                },
                title: {
                    ...title,
                    status: (title.value === '' && action.value === '') ? statusEnum.error : statusEnum.normal,
                },
            };
        case TITLE_CHANGE:
            return {
                ...state,
                number: {
                    ...number,
                    status: (number.value === '' && action.value === '') ? statusEnum.error : statusEnum.normal,
                },
                title: {
                    ...title,
                    value: action.value,
                    status: (number.value === '' && action.value === '') ? statusEnum.error : statusEnum.normal,
                },
            };
        case UNIT_CHANGE:
            return {
                ...state,
                unit: {
                    ...unit,
                    value: action.value,
                },
            };
        case DANGER_CHANGE:
            return {
                ...state,
                danger: {
                    ...danger,
                    value: action.value,
                },
            };
        case COUNT_CHANGE:
            return {
                ...state,
                count: {
                    ...count,
                    value: action.value,
                },
            };
        case REMARK_CHANGE:
            return {
                ...state,
                remark: {
                    ...remark,
                    value: action.value,
                },
            };
        case POSTING_MATERIAL:
            return {...state, isPosting: true};
        case POST_MATERIAL_SUCCESS:
            return {...state, isPosting: false, id: action.value.id};
        case POST_MATERIAL_FAILURE:
            return {...state, isPosting: false};
        case INIT_CREATE_STATE:
            return defaultState;
        default:
            return state;
    }
};

export default createMaterials;