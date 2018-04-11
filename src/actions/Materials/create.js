/**
 * Created by zhouqihang on 2018/3/14.
 */
import { message } from 'antd';
import { post, get, put } from '../../common/requests/request';
import { create, query } from '../../common/requests/Materials';
import { requestMaterials } from './show';

export const NUMBER_CHANGE = Symbol('number_change');
export const TITLE_CHANGE = Symbol('title_change');
export const UNIT_CHANGE = Symbol('unit_change');
export const COUNT_CHANGE = Symbol('count_change');
export const DANGER_CHANGE = Symbol('danger_change');
export const REMARK_CHANGE = Symbol('remark_change');
export const POSTING_MATERIAL = Symbol('posting_material');
export const POST_MATERIAL_SUCCESS = Symbol('post_material_success');
export const POST_MATERIAL_FAILURE = Symbol('post_material_failure');
export const INIT_CREATE_STATE = Symbol('init_create_state');
export const CHANGE_CREATE_STATUS = Symbol('change_create_status');
export const REQUEST_MATERIAL = Symbol('request_material');
export const REQUEST_MATERIAL_SUCCESS = Symbol('request_material_success');
export const REQUEST_MATERIAL_FAILURE = Symbol('request_material_failure');

const mapNameToAction = {
    number: NUMBER_CHANGE,
    title: TITLE_CHANGE,
    unit: UNIT_CHANGE,
    count: COUNT_CHANGE,
    danger: DANGER_CHANGE,
    remark: REMARK_CHANGE,
};

/**
 * 表单值更改
 * @param {string} name
 * @param {string|number} value
 */
export const onInputChangeAction = (name, value) => ({
    type: mapNameToAction[name],
    value: value,
});

/**
 * 校验数据
 * @param {Object} createMaterials create materials state
 * @returns {boolean}
 */
const canCreateMaterial = (createMaterials) => {
    const {
        number,
        title,
        unit,
        count,
        danger,
        // remark,
    } = createMaterials;
    if (number.value === '' && title.value === '') {
        message.error('原料编号和原料名称至少需要填写一个');
        return false;
    }
    if (unit.value === '') {
        message.error('请填写原料计量单位');
        return false;
    }
    if (count < 0) {
        message.error('库存数量不能小于0');
        return false;
    }
    if (danger < 0) {
        message.error('报警数量不能小于0');
        return false;
    }
    return true;
};

/**
 * 创建material
 * @returns {function(*, *)}
 */
export const createMaterial = () => {
    return (dispatch, getState) => {
        const { createMaterials } = getState();
        if (canCreateMaterial(createMaterials)) {
            dispatch({ type: POSTING_MATERIAL});
            const {
                number,
                title,
                unit,
                count,
                danger,
                remark,
                id,
            } = createMaterials;
            const params = {
                number: number.value,
                title: title.value,
                unit: unit.value,
                count: count.value,
                danger: danger.value,
                remark: remark.value,
            };
            const url = id === 0 ? create : `${create}/${id}`;
            const requestType = id === 0 ? post : put;
            const type = id === 0 ? '新增' : '更新';
            return requestType(url, params)
                .then(res => {
                    message.success(type + '成功');
                    dispatch({ type: POST_MATERIAL_SUCCESS, value: res });
                    dispatch(requestMaterials());
                })
                .catch(e => {
                    message.error(type + '失败：' + e);
                    dispatch({ type: POST_MATERIAL_FAILURE });
                });
        }
    }
};

export const queryMaterial = () => (dispatch, getState) => {
    const { createMaterials } = getState();
    const { id } = createMaterials;
    const url = query + '/' + id;
    dispatch({ type: REQUEST_MATERIAL});
    return get(url, {})
        .then(res => {
            dispatch({ type: REQUEST_MATERIAL_SUCCESS, value: res });
        })
        .catch(e => {
            message.error('数据获取失败：' + e);
            dispatch({ type: REQUEST_MATERIAL_FAILURE });
        });
};

/**
 * 初始化状态
 */
export const initState = () => ({
    type: INIT_CREATE_STATE,
});

/**
 * 更改isCreating
 * @param {boolean} isCreating
 * @param {number} id
 */
export const changeCreateStatus = (isCreating, id = 0) => ({
    type: CHANGE_CREATE_STATUS,
    value: isCreating,
    id,
});
