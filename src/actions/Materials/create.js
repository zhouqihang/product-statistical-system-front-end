/**
 * Created by zhouqihang on 2018/3/14.
 */
import { message } from 'antd';
import { post } from '../../common/requests/request';
import { create } from '../../common/requests/Materials';

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
            } = createMaterials;
            const params = {
                number: number.value,
                title: title.value,
                unit: unit.value,
                count: count.value,
                danger: danger.value,
                remark: remark.value,
            };
            return post(create, params)
                .then(res => {
                    message.success('新增成功');
                    dispatch({ type: POST_MATERIAL_SUCCESS, value: res });
                    dispatch(requestMaterials());
                })
                .catch(e => {
                    message.error('新增失败：' + e);
                    dispatch({ type: POST_MATERIAL_FAILURE });
                });
        }
    }
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
 */
export const changeCreateStatus = isCreating => ({
    type: CHANGE_CREATE_STATUS,
    value: isCreating,
});
