/**
 * Created by zhouqihang on 2018/3/15.
 */
import {
    REQUEST_MATERIALS,
    REQUEST_MATERIALS_SUCCESS,
    REQUEST_MATERIALS_FAILED,
    NUMBER_CHANGE,
    TITLE_CHANGE,
    UNIT_CHANGE,
    COUNT_BEGIN,
    COUNT_END,
    RESET_QUERY,
} from '../../actions/Materials/show';

const defaultState = {
    columns: [
        { dataIndex: 'material_number', title: '编号' },
        { dataIndex: 'material_title', title: '名称' },
        { dataIndex: 'material_unit', title: '计量单位' },
        { dataIndex: 'material_danger', title: '报警数量' },
        { dataIndex: 'material_count', title: '库存量' },
        { dataIndex: 'material_remark', title: '备注' },
    ],
    dataSource: [],
    isLoading: false,
    page: 1,
    total: 0,
    number: '',
    title: '',
    unit: '',
    countBegin: 0,
    countEnd: 0,
};

const materials = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_MATERIALS:
            return {...state, isLoading: true};
        case REQUEST_MATERIALS_SUCCESS:
            const {current_page, data, total} = action.value;
            return {...state, page: current_page, dataSource:data, total, isLoading: false};
        case REQUEST_MATERIALS_FAILED:
            return {...state, isLoading: false};
        case NUMBER_CHANGE:
        case TITLE_CHANGE:
        case UNIT_CHANGE:
        case COUNT_BEGIN:
        case COUNT_END:
            return {...state, [action.key]: action.value};
        case RESET_QUERY:
            return {
                ...state,
                number: '',
                title: '',
                unit: '',
                countBegin: 0,
                countEnd: 0,
            };
        default:
            return state;
    }
};

export default materials;
