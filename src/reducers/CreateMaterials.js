/**
 * Created by zhouqihang on 2018/3/14.
 */
import { NUMBER_CHANGE } from '../actions/CreateMaterials';

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
};

const createMaterials = (state = defaultState, action) => {
    switch (action.type) {
        case NUMBER_CHANGE:
            const { title, number } = state;
            console.log((title.value === '' && action.value === '') ? statusEnum.error : statusEnum.normal);
            return {
                ...state,
                number: {
                    ...number,
                    value: action.value,
                    status: (title.value === '' && action.value === '') ? statusEnum.error : statusEnum.normal,
                },
            };
        default:
            return state;
    }
};

export default createMaterials;