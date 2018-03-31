/**
 * Created by zhouqihang on 2018/3/15.
 */
import { message } from 'antd';
import { get } from '../../common/requests/request';
import { show } from '../../common/requests/Materials';

export const REQUEST_MATERIALS = 'request_materials';
export const REQUEST_MATERIALS_SUCCESS = 'request_materials_success';
export const REQUEST_MATERIALS_FAILED = 'request_materials_failed';

export const requestMaterials = () => {
    return (dispatch, getState) => {
        dispatch({ type: REQUEST_MATERIALS });
        return get(show, {})
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

