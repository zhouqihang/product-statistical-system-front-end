/**
 * Created by zhouqihang on 2018/3/15.
 */
import { message } from 'antd';
import { get } from '../../common/requests/request';
import { show } from '../../common/requests/Materials';

export const REQUEST_MATERIALS = Symbol('request_materials');
export const REQUEST_MATERIALS_SUCCESS = Symbol('request_materials_success');
export const REQUEST_MATERIALS_FAILED = Symbol('request_materials_failed');
export const NUMBER_CHANGE = Symbol('number_change');
export const TITLE_CHANGE = Symbol('title_change');
export const UNIT_CHANGE = Symbol('unit_change');
export const COUNT_BEGIN = Symbol('count_begin');
export const COUNT_END = Symbol('count_end');
export const RESET_QUERY = Symbol('request_query');

const mapNameToAction = {
    number: NUMBER_CHANGE,
    title: TITLE_CHANGE,
    unit: UNIT_CHANGE,
    countBegin: COUNT_BEGIN,
    countEnd: COUNT_END,
};

/**
 * input has changed
 * @param {string} name input name
 * @param {string} value input value
 * @return {Object}
 */
export const onInputChangeAction = (name, value) => ({
    type: mapNameToAction[name],
    value,
    key: name,
});

/**
 * request materials list
 * @returns {function(*, *)}
 */
export const requestMaterials = (page = 1, pagesize = 10) => {
    return (dispatch, getState) => {
        dispatch({ type: REQUEST_MATERIALS });
        const { materials } = getState();
        const { number, title, unit, countBegin, countEnd } = materials;
        const params = {
            number,
            title,
            unit,
            countBegin,
            countEnd,
            page,
            pagesize
        };
        return get(show, params)
            .then(res => {
                dispatch({
                    type: REQUEST_MATERIALS_SUCCESS,
                    value: res,
                });
            })
            .catch(err => {
                dispatch({
                    type: REQUEST_MATERIALS_FAILED,
                });
                message.error(err);
            });
    };
};

/**
 * 重置查询条件
 */
export const resetQueryAction = () => ({
    type: RESET_QUERY,
});

