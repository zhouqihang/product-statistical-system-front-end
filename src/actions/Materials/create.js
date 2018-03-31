/**
 * Created by zhouqihang on 2018/3/14.
 */
import { message } from 'antd';
import { post } from '../../common/requests/request';
import { create } from '../../common/requests/Materials';

export const NUMBER_CHANGE = 'number_change';
export const TITLE_CHANGE = 'title_change';
export const UNIT_CHANGE = 'unit_change';
export const COUNT_CHANGE = 'count_change';
export const DANGER_CHANGE = 'danger_change';
export const REMARK_CHANGE = 'remark_change';
export const POSTING_MATERIAL = 'posting_material';
export const POST_MATERIAL_SUCCESS = 'post_material_success';
export const POST_MATERIAL_FAILURE = 'post_material_failure';
export const INIT_CREATE_STATE = 'init_create_state';

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

const canCreateMaterial = (createMaterials) => {
    const {
        number,
        title,
        unit,
        count,
        danger,
        remark,
    } = createMaterials;
    if (number.value === '' && title.value === '') {
        message.error('原料编号和原料名称至少需要填写一个');
        return false;
    }
    if (unit.value === '') {
        message.error('请填写原料计量单位');
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
                })
                .catch(e => {
                    message.error('新增失败：' + e);
                    dispatch({ type: POST_MATERIAL_FAILURE });
                });
        }
    }
};

export const initState = () => ({
    type: INIT_CREATE_STATE,
});
