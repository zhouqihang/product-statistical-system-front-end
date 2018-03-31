/**
 * Created by zhouqihang on 2018/3/15.
 */
import {
    REQUEST_MATERIALS,
    REQUEST_MATERIALS_SUCCESS,
    REQUEST_MATERIALS_FAILED
} from '../../actions/Materials/show';

const defaultState = {
    columns: [
        { title: 'material_number', dataIndex: 'material_number', title: '编号' },
        { title: 'material_title', dataIndex: 'material_title', title: '名称' },
        { title: 'material_unit', dataIndex: 'material_unit', title: '计量单位' },
        { title: 'material_danger', dataIndex: 'material_danger', title: '报警数量' },
        { title: 'material_count', dataIndex: 'material_count', title: '库存量' },
        { title: 'material_remark', dataIndex: 'material_remark', title: '备注' },
    ],
    dataSource: [],
    isLoading: false,
    page: 1,
    total: 0,
};

const materials = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_MATERIALS:
            return {...defaultState, isLoading: true};
        case REQUEST_MATERIALS_SUCCESS:
            const {current_page, data, total} = action.value;
            return {...state, page: current_page, dataSource:data, total, isLoading: false};
        case REQUEST_MATERIALS_FAILED:
            return {...state, isLoading: false};
        default:
            return state;
    }
};

export default materials;
